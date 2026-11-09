"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Eye, FileText, Search, Trash2, X } from "lucide-react";
import { aboutCrud, normalizeCollection } from "../../lib/about";
import { apiUrl } from "../../lib/api";

const pageSize = 8;
const fields = [
  ["id", "ID"],
  ["jobId", "Job ID"],
  ["name", "Name"],
  ["email", "Email"],
  ["mobile", "Mobile"],
  ["residence", "Residence"],
  ["experience", "Experience"],
  ["age", "Age"],
  ["specialization", "Specialization"],
  ["education", "Education"],
  ["salary", "Expected Salary"],
  ["notice", "Notice Period"],
  ["message", "Message"],
];

function fileUrl(value) {
  if (!value) return "";
  if (/^(https?:)?\/\//.test(value)) return value;
  return apiUrl(String(value).replace(/^\//, ""));
}

function Modal({ application, onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-2xl border border-[#01C5FF]/60 bg-[#11111C] p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium text-white">Application #{application.id}</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Close modal"><X size={18} /></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(([key, label]) => (
            <div key={key} className={`rounded-xl border border-white/10 bg-black/20 p-4 ${key === "message" ? "sm:col-span-2" : ""}`}>
              <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
              <p className="mt-2 break-words text-sm text-white">{application[key] === null || application[key] === undefined || application[key] === "" ? "—" : String(application[key])}</p>
            </div>
          ))}
        </div>
        {application.cv && <a href={fileUrl(application.cv)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#16121E]"><FileText size={17} /> Open CV</a>}
      </div>
    </div>
  );
}

export default function DashboardJobApplicationsPage() {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selected, setSelected] = useState(null);

  const loadApplications = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const payload = await aboutCrud.list("/job-applications");
      setRows(normalizeCollection(payload));
    } catch (requestError) {
      setError(requestError.message || "Unable to load applications.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(loadApplications);
  }, [loadApplications]);

  const filteredRows = useMemo(() => {
    const value = query.trim().toLowerCase();
    return rows.filter((row) => !value || fields.some(([key]) => String(row[key] ?? "").toLowerCase().includes(value)) || String(row.cv ?? "").toLowerCase().includes(value));
  }, [query, rows]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const remove = async (row) => {
    if (!window.confirm(`Delete application #${row.id}? This action cannot be undone.`)) return;
    setError("");
    setSuccess("");
    try {
      await aboutCrud.remove("/job-applications", row.id);
      setSuccess("Application deleted successfully.");
      await loadApplications();
    } catch (requestError) {
      setError(requestError.message || "Unable to delete this application.");
    }
  };

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="title-gradient bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-[length:400%_400%] bg-clip-text text-3xl font-normal text-transparent sm:text-4xl">Job Applications</h1>
          <p className="mt-3 max-w-[680px] text-sm leading-6 text-gray-400">Review applications submitted by candidates from the public job application form.</p>
        </div>
        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">{filteredRows.length} application{filteredRows.length === 1 ? "" : "s"}</span>
      </div>

      <div className="mb-5 rounded-2xl border border-white/10 bg-[#1A1A1A66] p-4 backdrop-blur-xl">
        <label className="relative block">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search applicants, email, job ID, or message..." className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 pl-10 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#01C5FF]" aria-label="Search applications" />
        </label>
      </div>

      {error && <p role="alert" className="mb-5 rounded-xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-300">{error}</p>}
      {success && <p role="status" className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">{success}</p>}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A66] backdrop-blur-xl">
        {loading ? <div className="p-10 text-center text-sm text-gray-400">Loading applications...</div> : visibleRows.length === 0 ? <div className="p-10 text-center text-sm text-gray-400">No applications found.</div> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500"><tr><th className="px-5 py-4 font-medium">ID</th><th className="px-5 py-4 font-medium">Applicant</th><th className="px-5 py-4 font-medium">Email</th><th className="px-5 py-4 font-medium">Mobile</th><th className="px-5 py-4 font-medium">Job ID</th><th className="px-5 py-4 font-medium">CV</th><th className="px-5 py-4 text-right font-medium">Actions</th></tr></thead>
              <tbody className="divide-y divide-white/10">{visibleRows.map((row) => <tr key={row.id} className="transition-colors hover:bg-white/[0.03]"><td className="px-5 py-4 text-gray-400">{row.id}</td><td className="px-5 py-4 text-white">{row.name || "—"}</td><td className="px-5 py-4 text-gray-300">{row.email || "—"}</td><td className="px-5 py-4 text-gray-300">{row.mobile || "—"}</td><td className="px-5 py-4 text-gray-400">{row.jobId || "—"}</td><td className="px-5 py-4">{row.cv ? <a href={fileUrl(row.cv)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#9DDBFF] hover:text-white"><FileText size={16} /> Open CV</a> : <span className="text-gray-500">—</span>}</td><td className="px-5 py-4"><div className="flex justify-end gap-1"><button type="button" onClick={() => setSelected(row)} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-[#9DDBFF]" aria-label="View application"><Eye size={17} /></button><button type="button" onClick={() => remove(row)} className="rounded-lg p-2 text-gray-400 hover:bg-red-950 hover:text-red-300" aria-label="Delete application"><Trash2 size={17} /></button></div></td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-gray-500"> <span>{filteredRows.length} result{filteredRows.length === 1 ? "" : "s"}</span>{totalPages > 1 && <div className="flex items-center gap-3"><button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => value - 1)} className="rounded-lg border border-white/10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40">Previous</button><span>Page {currentPage} of {totalPages}</span><button type="button" disabled={currentPage === totalPages} onClick={() => setPage((value) => value + 1)} className="rounded-lg border border-white/10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40">Next</button></div>}</div>

      {selected && <Modal application={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
