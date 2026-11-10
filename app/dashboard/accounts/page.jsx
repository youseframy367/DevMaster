"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Eye, LoaderCircle, Pencil, Plus, RefreshCw, ShieldAlert, Trash2, Users, X } from "lucide-react";
import { addAccount, deleteAccount, getAccounts, updateAccount } from "../../lib/accounts";
import { getAccessToken, getCurrentUser } from "../../lib/auth";

const inputClassName = "w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#01C5FF]";
const initialForm = { email: "", username: "", password: "" };

function profileFromPayload(payload) {
  return payload?.user || payload?.data?.user || payload?.data || payload || null;
}

function roleValues(payload) {
  const profiles = [
    payload,
    payload?.user,
    payload?.data,
    payload?.data?.user,
    payload?.account,
    payload?.data?.account,
  ].filter(Boolean);

  return profiles.flatMap((profile) => {
    const roles = Array.isArray(profile.roles) ? profile.roles : [];
    return [profile.role, profile.userRole, profile.type, ...roles].filter(Boolean).map((role) => String(role).toUpperCase());
  });
}

function tokenRoleValues() {
  try {
    const token = getAccessToken();
    const encodedPayload = token?.split(".")[1];
    if (!encodedPayload) return [];
    const claims = JSON.parse(atob(encodedPayload.replace(/-/g, "+").replace(/_/g, "/")));
    return [claims.role, claims.userRole, ...(Array.isArray(claims.roles) ? claims.roles : [])].filter(Boolean).map((role) => String(role).toUpperCase());
  } catch {
    return [];
  }
}

function isAdmin(payload) {
  return [...roleValues(payload), ...tokenRoleValues()].includes("ADMIN");
}

function text(value, fallback = "—") {
  if (value === null || value === undefined || String(value).trim() === "") return fallback;
  return String(value);
}

function statusClass(status) {
  const normalized = String(status || "").toUpperCase();
  if (["APPROVED", "ACTIVE"].includes(normalized)) return "border-emerald-400/30 bg-emerald-950/30 text-emerald-300";
  if (["PENDING", "IN_REVIEW"].includes(normalized)) return "border-amber-400/30 bg-amber-950/30 text-amber-300";
  if (["REJECTED", "DISABLED"].includes(normalized)) return "border-red-400/30 bg-red-950/30 text-red-300";
  return "border-white/10 bg-white/[0.04] text-gray-300";
}

function actionLabel(action) {
  return { CREATE: "إضافة", UPDATE: "تعديل", DELETE: "حذف" }[String(action || "").toUpperCase()] || text(action);
}

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-[#01C5FF]/50 bg-[#11111C] p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between gap-4"><h2 className="text-xl font-medium text-white">{title}</h2><button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Close"><X size={18} /></button></div>
        {children}
      </div>
    </div>
  );
}

function StatusBadge({ value }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs ${statusClass(value)}`}>{text(value)}</span>;
}

export default function AccountsPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [users, setUsers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("accounts");
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(initialForm);

  const signOut = useCallback(() => {
    router.replace("/dashboard/login");
  }, [router]);

  const loadAccounts = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError("");
    try {
      const payload = await getAccounts();
      setUsers(payload.users);
      setPendingRequests(payload.pendingRequests);
    } catch (requestError) {
      if (requestError.status === 401) {
        signOut();
        return;
      }
      setError(requestError.message || "تعذر تحميل الحسابات.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [signOut]);

  useEffect(() => {
    let active = true;
    Promise.resolve().then(() => getCurrentUser()).then((payload) => {
      if (!active) return;
      if (!payload) {
        signOut();
        return;
      }
      setCurrentUser(profileFromPayload(payload));
      if (!isAdmin(payload)) {
        setCheckingAccess(false);
        return;
      }
      setAuthorized(true);
      setCheckingAccess(false);
    }).catch((requestError) => {
      if (!active) return;
      if (requestError.status === 401 || requestError.status === 403) signOut();
      else setError(requestError.message || "تعذر التحقق من الصلاحيات.");
      setCheckingAccess(false);
    });
    return () => { active = false; };
  }, [signOut]);

  useEffect(() => {
    if (authorized) Promise.resolve().then(() => loadAccounts());
  }, [authorized, loadAccounts]);

  const filteredUsers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return users;
    return users.filter((account) => [account.username, account.email, account.role, account.status].some((value) => String(value || "").toLowerCase().includes(normalized)));
  }, [query, users]);

  const isCurrentAccount = (account) => {
    if (!account || !currentUser) return false;
    return (account.id !== undefined && currentUser.id !== undefined && String(account.id) === String(currentUser.id)) || (account.email && currentUser.email && account.email.toLowerCase() === currentUser.email.toLowerCase());
  };

  const openCreate = () => {
    setSelected(null);
    setForm(initialForm);
    setError("");
    setSuccess("");
    setModal("form");
  };

  const openEdit = (account) => {
    setSelected(account);
    setForm({ email: account.email || "", username: account.username || "", password: "" });
    setError("");
    setSuccess("");
    setModal("form");
  };

  const openView = (account) => {
    setSelected(account);
    setModal("view");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      if (!selected) {
        await addAccount({ email: form.email.trim(), username: form.username.trim() || undefined, password: form.password });
      } else {
        const values = {};
        if (form.email.trim() !== String(selected.email || "").trim()) values.email = form.email.trim();
        if (form.username.trim() !== String(selected.username || "").trim()) values.username = form.username.trim();
        if (form.password) values.password = form.password;
        if (!Object.keys(values).length) {
          setError("غيّر حقلًا واحدًا على الأقل قبل الحفظ.");
          setSaving(false);
          return;
        }
        await updateAccount(selected.id, values);
      }
      setModal(null);
      setSuccess("تم إرسال الطلب، في انتظار موافقة المالك");
      await loadAccounts(true);
    } catch (requestError) {
      if (requestError.status === 401) signOut();
      else if (requestError.status === 404) { setError(requestError.message || "الحساب غير موجود."); await loadAccounts(true); }
      else setError(requestError.message || "تعذر إرسال الطلب.");
    } finally {
      setSaving(false);
    }
  };

  const removeAccount = async (account) => {
    if (isCurrentAccount(account)) {
      setError("لا يمكنك حذف حسابك الحالي.");
      return;
    }
    if (!window.confirm(`هل تريد إرسال طلب حذف الحساب ${text(account.email)}؟`)) return;
    setError("");
    setSuccess("");
    try {
      await deleteAccount(account.id);
      setSuccess("تم إرسال الطلب، في انتظار موافقة المالك");
      await loadAccounts(true);
    } catch (requestError) {
      if (requestError.status === 401) signOut();
      else if (requestError.status === 404) { setError(requestError.message || "الحساب غير موجود."); await loadAccounts(true); }
      else setError(requestError.message || "تعذر إرسال طلب الحذف.");
    }
  };

  if (checkingAccess) return <div className="flex min-h-[50vh] items-center justify-center text-gray-400"><LoaderCircle className="mr-2 animate-spin" size={19} /> Checking permissions...</div>;
  if (!authorized) return <section className="mx-auto max-w-xl rounded-2xl border border-red-400/25 bg-red-950/20 p-8 text-center"><ShieldAlert className="mx-auto text-red-300" size={32} /><h1 className="mt-4 text-xl font-semibold text-white">ليس لديك صلاحية</h1><p className="mt-2 text-sm text-red-200/70">هذه الصفحة متاحة لحسابات ADMIN فقط.</p></section>;

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs uppercase tracking-[0.2em] text-[#9DDBFF]">Administration</p><h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">الحسابات</h1><p className="mt-3 max-w-[680px] text-sm leading-6 text-gray-400">إدارة الحسابات ومراجعة طلبات التغيير التي تنتظر موافقة المالك.</p></div><div className="flex flex-wrap gap-3"><button type="button" onClick={() => loadAccounts(true)} disabled={refreshing} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white disabled:opacity-60"><RefreshCw size={16} className={refreshing ? "animate-spin" : ""} /> تحديث</button><button type="button" onClick={openCreate} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#16121E] transition-opacity hover:opacity-80"><Plus size={17} /> إضافة حساب</button></div></div>

      {error && <p role="alert" className="mb-5 rounded-xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-300">{error}</p>}
      {success && <p role="status" className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300"><CheckCircle2 size={17} />{success}</p>}

      <div className="mb-5 flex flex-wrap gap-2 border-b border-white/10"><button type="button" onClick={() => setActiveTab("accounts")} className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm transition ${activeTab === "accounts" ? "border-[#01C5FF] text-white" : "border-transparent text-gray-500 hover:text-white"}`}><Users size={16} /> الحسابات ({users.length})</button><button type="button" onClick={() => setActiveTab("pending")} className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm transition ${activeTab === "pending" ? "border-[#01C5FF] text-white" : "border-transparent text-gray-500 hover:text-white"}`}>الطلبات المعلّقة ({pendingRequests.length})</button></div>

      {activeTab === "accounts" ? <>
        <div className="mb-5 rounded-2xl border border-white/10 bg-[#1A1A1A66] p-4 backdrop-blur-xl"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث بالاسم أو الإيميل أو الدور أو الحالة" className={inputClassName} aria-label="Search accounts" /></div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A66] backdrop-blur-xl">{loading ? <div className="flex items-center justify-center p-12 text-sm text-gray-400"><LoaderCircle className="mr-2 animate-spin" size={18} /> Loading accounts...</div> : filteredUsers.length === 0 ? <div className="p-12 text-center text-sm text-gray-400">لا توجد حسابات مطابقة.</div> : <div className="dashboard-scrollbar-hidden max-h-[70vh] overflow-x-hidden overflow-y-auto"><table className="w-full table-fixed text-left text-sm"><thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500"><tr><th className="w-[8%] break-words px-2 py-4 font-medium sm:px-5">ID</th><th className="w-[25%] break-words px-2 py-4 font-medium sm:px-5">الاسم</th><th className="w-[30%] break-all px-2 py-4 font-medium sm:px-5">الإيميل</th><th className="w-[17%] break-words px-2 py-4 font-medium sm:px-5">الدور</th><th className="w-[20%] break-words px-2 py-4 font-medium sm:px-5">الحالة</th><th className="w-[100px] px-2 py-4 text-right font-medium sm:px-5">Actions</th></tr></thead><tbody className="divide-y divide-white/10">{filteredUsers.map((account) => <tr key={account.id} className="transition-colors hover:bg-white/[0.03]"><td className="break-words px-2 py-4 text-gray-500 sm:px-5">{text(account.id)}</td><td className="break-words px-2 py-4 text-white sm:px-5">{text(account.username)}</td><td className="break-all px-2 py-4 text-[#9DDBFF] sm:px-5">{text(account.email)}</td><td className="break-words px-2 py-4 text-gray-300 sm:px-5">{text(account.role)}</td><td className="break-words px-2 py-4 sm:px-5"><StatusBadge value={account.status} /></td><td className="px-2 py-4 sm:px-5"><div className="flex flex-wrap justify-end gap-1"><button type="button" onClick={() => openView(account)} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-[#9DDBFF]" aria-label="View account"><Eye size={17} /></button><button type="button" onClick={() => openEdit(account)} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Edit account"><Pencil size={17} /></button><button type="button" onClick={() => removeAccount(account)} disabled={isCurrentAccount(account)} className="rounded-lg p-2 text-gray-400 hover:bg-red-950 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-25" aria-label="Delete account"><Trash2 size={17} /></button></div></td></tr>)}</tbody></table></div>}</div>
      </> : <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A66] backdrop-blur-xl">{loading ? <div className="p-12 text-center text-sm text-gray-400">Loading requests...</div> : pendingRequests.length === 0 ? <div className="p-12 text-center text-sm text-gray-400">لا توجد طلبات معلّقة.</div> : <div className="dashboard-scrollbar-hidden max-h-[70vh] overflow-x-hidden overflow-y-auto"><table className="w-full table-fixed text-left text-sm"><thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500"><tr><th className="w-[20%] break-words px-2 py-4 font-medium sm:px-5">العملية</th><th className="w-[32%] break-all px-2 py-4 font-medium sm:px-5">الإيميل</th><th className="w-[24%] break-words px-2 py-4 font-medium sm:px-5">الاسم</th><th className="w-[24%] break-words px-2 py-4 font-medium sm:px-5">الحالة</th></tr></thead><tbody className="divide-y divide-white/10">{pendingRequests.map((request, index) => <tr key={`${request.id || request.email}-${request.action}-${index}`} className="transition-colors hover:bg-white/[0.03]"><td className="break-words px-2 py-4 text-white sm:px-5">{actionLabel(request.action)}</td><td className="break-all px-2 py-4 text-[#9DDBFF] sm:px-5">{text(request.email)}</td><td className="break-words px-2 py-4 text-gray-300 sm:px-5">{text(request.username)}</td><td className="px-2 py-4 sm:px-5"><StatusBadge value={request.status || "PENDING"} /></td></tr>)}</tbody></table></div>}</div>}

      {modal === "view" && selected && <Modal title="تفاصيل الحساب" onClose={() => setModal(null)}><div className="grid gap-3 sm:grid-cols-2">{[["ID", selected.id], ["الاسم", selected.username], ["الإيميل", selected.email], ["الدور", selected.role], ["الحالة", selected.status]].map(([label, value]) => <div key={label} className="rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-xs uppercase tracking-wider text-gray-500">{label}</p><p className="mt-2 break-words text-sm text-white">{text(value)}</p></div>)}</div></Modal>}
      {modal === "form" && <Modal title={selected ? "تعديل حساب" : "إضافة حساب"} onClose={() => setModal(null)}><form onSubmit={submitForm} className="flex flex-col gap-4"><label className="flex flex-col gap-2 text-sm text-gray-300">الإيميل<input type="email" maxLength={50} required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className={inputClassName} placeholder="email@example.com" /></label><label className="flex flex-col gap-2 text-sm text-gray-300">اسم المستخدم <span className="text-xs text-gray-500">اختياري، من 3 إلى 20 حرفًا</span><input minLength={selected ? undefined : 3} maxLength={20} value={form.username} onChange={(event) => setForm((current) => ({ ...current, username: event.target.value }))} className={inputClassName} placeholder="Username" /></label><label className="flex flex-col gap-2 text-sm text-gray-300">كلمة المرور <span className="text-xs text-gray-500">{selected ? "اتركها فارغة إذا لم ترد تغييرها" : "مطلوبة"}</span><input type="password" maxLength={50} minLength={selected ? undefined : 1} required={!selected} value={form.password} onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))} className={inputClassName} autoComplete="new-password" /></label><div className="mt-3 flex justify-end gap-3"><button type="button" onClick={() => setModal(null)} className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300">إلغاء</button><button type="submit" disabled={saving} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#16121E] disabled:cursor-not-allowed disabled:opacity-60">{saving && <LoaderCircle size={16} className="animate-spin" />}{saving ? "جارٍ الإرسال..." : selected ? "إرسال طلب التعديل" : "إرسال طلب الإضافة"}</button></div></form></Modal>}
    </section>
  );
}
