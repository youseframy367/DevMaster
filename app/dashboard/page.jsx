"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Contact,
  Eye,
  FileText,
  MessageSquare,
  Newspaper,
  Package,
  RefreshCw,
  Users,
  X,
} from "lucide-react";
import { getDashboardOverview } from "../lib/dashboard";

const emptyOverview = {
  totalArticles: 0,
  totalComments: 0,
  totalContacts: 0,
  totalJobs: 0,
  totalJobApplications: 0,
  totalProducts: 0,
  totalServesRequests: 0,
  latestRequests: [],
  latestContacts: [],
};

const statCards = [
  { key: "totalArticles", title: "Total Articles", subtitle: "Published content", icon: Newspaper, color: "blue", href: "/dashboard/articles" },
  { key: "totalComments", title: "Total Comments", subtitle: "Customer feedback", icon: MessageSquare, color: "purple", href: "/dashboard/comments" },
  { key: "totalContacts", title: "Total Contacts", subtitle: "Contact messages", icon: Contact, color: "emerald", href: "/dashboard/contacts" },
  { key: "totalJobs", title: "Total Jobs", subtitle: "Open opportunities", icon: BriefcaseBusiness, color: "orange", href: "/dashboard/jobs" },
  { key: "totalJobApplications", title: "Job Applications", subtitle: "Candidate submissions", icon: Users, color: "indigo", href: "/dashboard/job-applications" },
  { key: "totalProducts", title: "Total Products", subtitle: "Portfolio projects", icon: Package, color: "pink", href: "/dashboard/projects" },
  { key: "totalServesRequests", title: "Service Requests", subtitle: "Consultation requests", icon: ClipboardList, color: "cyan", href: "/dashboard/service-requests" },
];

const colorClasses = {
  blue: "border-blue-400/20 bg-blue-500/10 text-blue-300",
  purple: "border-purple-400/20 bg-purple-500/10 text-purple-300",
  emerald: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
  orange: "border-orange-400/20 bg-orange-500/10 text-orange-300",
  indigo: "border-indigo-400/20 bg-indigo-500/10 text-indigo-300",
  pink: "border-pink-400/20 bg-pink-500/10 text-pink-300",
  cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
};

const numberFormatter = new Intl.NumberFormat("en-US");

function safeText(value, fallback = "—") {
  if (value === null || value === undefined || String(value).trim() === "") return fallback;
  return String(value);
}

function initials(value) {
  const parts = safeText(value, "Guest").trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "G";
}

function isValidPhone(value) {
  return /^[+]?\d[\d\s().-]{6,}$/.test(String(value || "").trim());
}

function phoneHref(value) {
  return `tel:${String(value).replace(/[^\d+]/g, "")}`;
}

function StatCard({ card, value }) {
  const Icon = card.icon;
  return (
    <Link href={card.href} className="group block h-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111522]/90 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#161c2b]">
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${colorClasses[card.color]}`}><Icon size={21} /></div>
        <ChevronRight size={17} className="text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-gray-300" />
      </div>
      <p className="mt-5 text-sm text-gray-400">{card.title}</p>
      <p className="mt-1 min-w-0 break-all text-3xl font-semibold tabular-nums tracking-tight text-white">{numberFormatter.format(Number(value) || 0)}</p>
      <p className="mt-2 break-words text-xs text-gray-500">{card.subtitle}</p>
    </Link>
  );
}

function TableSkeleton({ columns = 5 }) {
  return <div className="space-y-4 p-5">{[1, 2, 3].map((row) => <div key={row} className="flex animate-pulse gap-4">{Array.from({ length: columns }).map((_, index) => <div key={index} className={`h-10 rounded-lg bg-white/[0.06] ${index === 0 ? "w-10" : "flex-1"}`} />)}</div>)}</div>;
}

function DetailModal({ record, type, onClose }) {
  if (!record) return null;
  const isRequest = type === "request";
  const title = isRequest ? "Service Request Details" : "Contact Message Details";
  const fields = isRequest
    ? [["Name", record.name], ["Company Name", record.companyName], ["Email", record.email], ["Phone Number", record.phoneNumber], ["Message", record.message]]
    : [["Name", record.name], ["Email", record.email], ["Phone Number", record.phoneNumber], ["Message", record.message]];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title}>
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#01C5FF]/40 bg-[#111522] p-6 shadow-2xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div><p className="text-xs uppercase tracking-[0.2em] text-[#9DDBFF]">Record #{safeText(record.id)}</p><h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2></div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white" aria-label="Close details"><X size={19} /></button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {fields.map(([label, value]) => <div key={label} className={`rounded-xl border border-white/10 bg-black/20 p-4 ${label === "Message" ? "sm:col-span-2" : ""}`}><p className="text-xs uppercase tracking-wider text-gray-500">{label}</p><p className="mt-2 break-words text-sm leading-6 text-white">{safeText(value)}</p></div>)}
        </div>
      </div>
    </div>
  );
}

function LatestTable({ title, records, type, onView, loading }) {
  const isRequest = type === "request";
  const visibleRecords = (Array.isArray(records) ? records : []).slice(0, 10);
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#111522]/90 shadow-[0_12px_35px_rgba(0,0,0,0.14)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-5 sm:px-6">
        <div><h2 className="text-lg font-semibold text-white">{title}</h2><p className="mt-1 text-xs text-gray-500">Showing up to 10 latest records</p></div>
        <Link href={isRequest ? "/dashboard/service-requests" : "/dashboard/contacts"} className="inline-flex items-center gap-1 text-sm text-[#9DDBFF] transition hover:text-white">View all <ChevronRight size={16} /></Link>
      </div>
      {loading ? <TableSkeleton columns={isRequest ? 6 : 5} /> : visibleRecords.length === 0 ? <div className="px-6 py-14 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.05] text-gray-500"><FileText size={20} /></div><p className="mt-4 text-sm text-gray-400">No {isRequest ? "service requests" : "contact messages"} yet.</p><p className="mt-1 text-xs text-gray-600">New records from the website will appear here.</p></div> : (
        <div className="dashboard-scrollbar-hidden max-h-[70vh] overflow-x-hidden overflow-y-auto"><table className="w-full table-fixed text-left text-sm"><thead className="bg-white/[0.025] text-xs uppercase tracking-wider text-gray-500"><tr><th className="break-words px-2 py-4 font-medium sm:px-5">ID</th><th className="break-words px-2 py-4 font-medium sm:px-5">Name</th>{isRequest && <th className="break-words px-2 py-4 font-medium sm:px-5">Company</th>}<th className="break-words px-2 py-4 font-medium sm:px-5">Email</th><th className="break-words px-2 py-4 font-medium sm:px-5">Phone</th><th className="break-words px-2 py-4 font-medium sm:px-5">Message</th><th className="break-words px-2 py-4 text-right font-medium sm:px-5">Actions</th></tr></thead><tbody className="divide-y divide-white/10">{visibleRecords.map((record) => <tr key={record.id} className="transition-colors hover:bg-white/[0.025]"><td className="break-words px-2 py-4 text-gray-500 sm:px-5">{safeText(record.id)}</td><td className="break-words px-2 py-4 sm:px-5"><div className="flex flex-wrap items-center gap-2"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#504CFF] to-[#01C5FF] text-[10px] font-semibold text-white">{initials(record.name)}</span><span className="break-words text-white">{safeText(record.name)}</span></div></td>{isRequest && <td className="break-words px-2 py-4 text-gray-300 sm:px-5">{safeText(record.companyName)}</td>}<td className="break-all px-2 py-4 sm:px-5"><a href={`mailto:${safeText(record.email, "")}`} className="break-all text-[#9DDBFF] transition hover:text-white">{safeText(record.email)}</a></td><td className="break-words px-2 py-4 sm:px-5">{isValidPhone(record.phoneNumber) ? <a href={phoneHref(record.phoneNumber)} className="break-words text-gray-300 transition hover:text-white">{record.phoneNumber}</a> : <span className="text-gray-500">{safeText(record.phoneNumber)}</span>}</td><td className="px-2 py-4 sm:px-5"><span className="block truncate text-gray-400" title={safeText(record.message)}>{safeText(record.message)}</span></td><td className="break-words px-2 py-4 text-right sm:px-5"><button type="button" onClick={() => onView(record)} className="inline-flex max-w-full items-center gap-1 rounded-lg border border-white/10 px-2 py-2 text-xs text-gray-300 transition hover:border-[#01C5FF]/50 hover:bg-white/5 hover:text-white sm:gap-2 sm:px-3"><Eye size={15} /> <span>View</span></button></td></tr>)}</tbody></table></div>
      )}
    </section>
  );
}

export default function DashboardPage() {
  const [overview, setOverview] = useState(emptyOverview);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedType, setSelectedType] = useState("request");

  const loadOverview = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError("");
    try {
      const payload = await getDashboardOverview();
      setOverview({ ...emptyOverview, ...payload, latestRequests: Array.isArray(payload.latestRequests) ? payload.latestRequests : [], latestContacts: Array.isArray(payload.latestContacts) ? payload.latestContacts : [] });
    } catch (requestError) {
      setError(requestError.message || "Unable to load dashboard overview.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(() => loadOverview());
  }, [loadOverview]);

  const currentDate = useMemo(() => new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(new Date()), []);
  const viewRecord = (record, type) => { setSelectedRecord(record); setSelectedType(type); };

  return (
    <main className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div><p className="text-xs uppercase tracking-[0.22em] text-[#9DDBFF]">Overview</p><h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Dashboard Overview</h1><p className="mt-3 text-sm leading-6 text-gray-400">Welcome back! Here&apos;s what&apos;s happening with your business today.</p></div>
        <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111522]/80 px-4 py-3 text-xs text-gray-400 sm:flex"><CalendarDays size={15} className="text-[#9DDBFF]" />{currentDate}</div><button type="button" onClick={() => loadOverview(true)} disabled={loading || refreshing} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#111522] px-4 py-3 text-sm text-gray-300 transition hover:border-[#01C5FF]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-60" aria-label="Refresh dashboard"><RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />{refreshing ? "Refreshing" : "Refresh"}</button></div>
      </header>

      {error && <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-red-400/25 bg-red-950/20 px-5 py-4"><div><p className="font-medium text-red-200">Unable to load dashboard data</p><p className="mt-1 text-sm text-red-300/70">{error}</p></div><button type="button" onClick={() => loadOverview()} className="rounded-lg bg-red-400/10 px-4 py-2 text-sm text-red-200 transition hover:bg-red-400/20">Try again</button></section>}

      <section className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{statCards.map((card) => <div key={card.key} className="min-w-0">{loading ? <div className="h-[174px] animate-pulse rounded-2xl border border-white/10 bg-white/[0.04]" /> : <StatCard card={card} value={overview[card.key]} />}</div>)}</section>

      <div className="space-y-6"><LatestTable title="Latest Service Requests" records={overview.latestRequests} type="request" loading={loading} onView={(record) => viewRecord(record, "request")} /><LatestTable title="Latest Contact Messages" records={overview.latestContacts} type="contact" loading={loading} onView={(record) => viewRecord(record, "contact")} /></div>

      {selectedRecord && <DetailModal record={selectedRecord} type={selectedType} onClose={() => setSelectedRecord(null)} />}
    </main>
  );
}
