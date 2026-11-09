import { apiUrl } from "./api";
import { getAccessToken } from "./auth";

async function parseResponse(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function messageFrom(payload, fallback) {
  if (typeof payload === "string" && payload.trim()) return payload;
  if (Array.isArray(payload?.message)) return payload.message.join(" ");
  return payload?.message || payload?.error || fallback;
}

function headers(includeBody = false) {
  const token = getAccessToken();
  return {
    Accept: "application/json",
    ...(includeBody ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  if (payload?.data && typeof payload.data === "object") return [payload.data];
  return payload && typeof payload === "object" ? [payload] : [];
}

export async function aboutRequest(path, options = {}) {
  const response = await fetch(apiUrl(path), {
    ...options,
    headers: { ...headers(Boolean(options.body)), ...(options.headers || {}) },
    cache: "no-store",
  });
  const payload = await parseResponse(response);

  if (!response.ok) {
    throw new Error(messageFrom(payload, `Request failed with status ${response.status}.`));
  }

  return payload;
}

export const aboutCrud = {
  list: (path) => aboutRequest(path),
  get: (path, id) => aboutRequest(`${path}/${id}`),
  create: (path, values) => aboutRequest(path, { method: "POST", body: JSON.stringify(values) }),
  update: (path, id, values) => aboutRequest(`${path}/${id}`, { method: "PUT", body: JSON.stringify(values) }),
  remove: (path, id) => aboutRequest(`${path}/${id}`, { method: "DELETE" }),
};
