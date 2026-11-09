"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Eye, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { aboutCrud, normalizeCollection } from "../../../lib/about";

const pageSize = 8;
const inputClassName = "w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#01C5FF]";

function displayValue(value) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

function Modal({ title, children, onClose, wide = false }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className={`max-h-[90vh] w-full overflow-y-auto rounded-2xl border border-[#01C5FF]/60 bg-[#11111C] p-6 shadow-2xl ${wide ? "max-w-[680px]" : "max-w-[500px]"}`}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium text-white">{title}</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Close modal"><X size={18} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function AboutCrudPage({ title, description, endpoint, columns, fields, searchPlaceholder, filter, dateFilter = false, sortBy, entityLabel = "Record", addLabel = "Add New", allowCreate = true, allowEdit = true }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [dateValue, setDateValue] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState("");

  const loadRows = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const payload = await aboutCrud.list(endpoint);
      setRows(normalizeCollection(payload));
    } catch (requestError) {
      setError(requestError.message || "Unable to load data.");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    Promise.resolve().then(loadRows);
  }, [loadRows]);

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesQuery = !normalizedQuery || columns.some((column) => String(row[column.key] ?? "").toLowerCase().includes(normalizedQuery));
      const matchesFilter = !filter || filterValue === "all" || String(row[filter.key] ?? "") === filterValue;
      const matchesDate = !dateFilter || !dateValue || String(row.date ?? "").slice(0, 10) === dateValue;
      return matchesQuery && matchesFilter && matchesDate;
    }).sort((first, second) => sortBy ? String(second[sortBy] ?? "").localeCompare(String(first[sortBy] ?? "")) : 0);
  }, [columns, dateFilter, dateValue, filter, filterValue, query, rows, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const openCreate = () => {
    setSelected(null);
    setForm(Object.fromEntries(fields.map((field) => [field.key, ""])));
    setSuccess("");
    setModal("form");
  };

  const openEdit = (row) => {
    setSelected(row);
    setForm(Object.fromEntries(fields.map((field) => [field.key, row[field.key] ?? ""])));
    setSuccess("");
    setModal("form");
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      if (selected?.id !== undefined && selected?.id !== null) await aboutCrud.update(endpoint, selected.id, form);
      else await aboutCrud.create(endpoint, form);
      setModal(null);
      setSuccess(selected ? `${entityLabel} updated successfully.` : `${entityLabel} created successfully.`);
      await loadRows();
    } catch (requestError) {
      setError(requestError.message || "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row) => {
    if (!window.confirm(`Delete ${entityLabel.toLowerCase()} #${row.id}? This action cannot be undone.`)) return;
    setError("");
    setSuccess("");
    try {
      await aboutCrud.remove(endpoint, row.id);
      setSuccess(`${entityLabel} deleted successfully.`);
      await loadRows();
    } catch (requestError) {
      setError(requestError.message || "Unable to delete this record.");
    }
  };

  return (
    <section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="title-gradient bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-[length:400%_400%] bg-clip-text text-3xl font-normal text-transparent sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-[680px] text-sm leading-6 text-gray-400">{description}</p>
        </div>
        {allowCreate && <button type="button" onClick={openCreate} className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#16121E] transition-opacity hover:opacity-80"><Plus size={17} /> {addLabel}</button>}
      </div>

      <div className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-[#1A1A1A66] p-4 backdrop-blur-xl">
        <label className="relative min-w-[240px] flex-1">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={searchPlaceholder || "Search records..."} className={`${inputClassName} pl-10`} aria-label="Search" />
        </label>
        {filter && (
          <select value={filterValue} onChange={(event) => { setFilterValue(event.target.value); setPage(1); }} className={`${inputClassName} max-w-[220px]`} aria-label={filter.label}>
            <option value="all">All {filter.label}</option>
            {[...new Set(rows.map((row) => String(row[filter.key] ?? "")).filter(Boolean))].sort().map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        )}
        {dateFilter && <label className="flex items-center gap-2 text-xs text-gray-500"><span>Date</span><input type="date" value={dateValue} onChange={(event) => { setDateValue(event.target.value); setPage(1); }} className={`${inputClassName} max-w-[180px]`} aria-label="Filter by date" /></label>}
      </div>

      {error && <p role="alert" className="mb-5 rounded-xl border border-red-400/30 bg-red-950/30 px-4 py-3 text-sm text-red-300">{error}</p>}
      {success && <p role="status" className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-300">{success}</p>}

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A66] backdrop-blur-xl">
        {loading ? <div className="p-10 text-center text-sm text-gray-400">Loading data...</div> : visibleRows.length === 0 ? <div className="p-10 text-center text-sm text-gray-400">No records found.</div> : (
          <div className="dashboard-scrollbar-hidden max-h-[70vh] overflow-x-hidden overflow-y-auto">
            <table className="w-full table-fixed text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-gray-500"><tr>{columns.map((column) => <th key={column.key} className="px-5 py-4 font-medium">{column.label}</th>)}<th className="px-5 py-4 text-right font-medium">Actions</th></tr></thead>
              <tbody className="divide-y divide-white/10">{visibleRows.map((row) => <tr key={row.id} className="transition-colors hover:bg-white/[0.03]">{columns.map((column) => <td key={column.key} className="max-w-[420px] break-words px-3 py-4 align-top text-gray-300 sm:px-5"><span className={column.key === "link" ? "break-all text-[#9DDBFF]" : "line-clamp-2"}>{column.render ? column.render(row[column.key], row) : displayValue(row[column.key])}</span></td>)}<td className="break-words px-3 py-4 sm:px-5"><div className="flex flex-wrap justify-end gap-1"><button type="button" onClick={() => { setSelected(row); setModal("view"); }} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-[#9DDBFF]" aria-label="View"><Eye size={17} /></button>{allowEdit && <button type="button" onClick={() => openEdit(row)} className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white" aria-label="Edit"><Pencil size={17} /></button>}<button type="button" onClick={() => remove(row)} className="rounded-lg p-2 text-gray-400 hover:bg-red-950 hover:text-red-300" aria-label="Delete"><Trash2 size={17} /></button></div></td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-gray-500"><span>{filteredRows.length} record{filteredRows.length === 1 ? "" : "s"}</span>{totalPages > 1 && <div className="flex items-center gap-3"><button type="button" disabled={currentPage === 1} onClick={() => setPage((current) => current - 1)} className="rounded-lg border border-white/10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40">Previous</button><span>Page {currentPage} of {totalPages}</span><button type="button" disabled={currentPage === totalPages} onClick={() => setPage((current) => current + 1)} className="rounded-lg border border-white/10 px-3 py-2 disabled:cursor-not-allowed disabled:opacity-40">Next</button></div>}</div>

      {modal === "view" && selected && <Modal title={`${entityLabel} details`} onClose={() => setModal(null)} wide><div className="grid gap-4 sm:grid-cols-2">{columns.map((column) => <div key={column.key} className="rounded-xl border border-white/10 bg-black/20 p-4"><p className="text-xs uppercase tracking-wider text-gray-500">{column.label}</p><div className="mt-2 break-words text-sm text-white">{column.renderView ? column.renderView(selected[column.key], selected) : displayValue(selected[column.key])}</div></div>)}</div></Modal>}
      {modal === "form" && (allowCreate || allowEdit) && <Modal title={selected ? "Edit record" : "Add new record"} onClose={() => setModal(null)}><form onSubmit={save} className="flex flex-col gap-4">{fields.map((field) => <label key={field.key} className="flex flex-col gap-2 text-sm text-gray-300">{field.label}{field.type === "textarea" ? <textarea rows={5} value={form[field.key] ?? ""} onChange={(event) => setForm((current) => ({ ...current, [field.key]: event.target.value }))} required={field.required !== false} placeholder={field.placeholder || ""} className={`${inputClassName} resize-y`} /> : <input type={field.type || "text"} value={form[field.key] ?? ""} onChange={(event) => setForm((current) => ({ ...current, [field.key]: event.target.value }))} required={field.required !== false} placeholder={field.placeholder || ""} className={inputClassName} />}</label>)}<div className="mt-3 flex justify-end gap-3"><button type="button" onClick={() => setModal(null)} className="rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300">Cancel</button><button type="submit" disabled={saving} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#16121E] disabled:cursor-not-allowed disabled:opacity-60">{saving ? "Saving..." : selected ? "Save Changes" : "Create"}</button></div></form></Modal>}
    </section>
  );
}
