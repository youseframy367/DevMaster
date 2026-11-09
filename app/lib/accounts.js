import { apiUrl } from "./api";
import { clearAccessToken, getAccessToken } from "./auth";

function getMessage(payload, fallback) {
  if (typeof payload === "string" && payload.trim()) return payload;
  if (Array.isArray(payload?.message)) return payload.message.filter(Boolean).join(" ");
  if (payload?.message) return String(payload.message);
  if (payload?.error) return String(payload.error);
  return fallback;
}

async function parseResponse(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function request(path, options = {}, requiresAuth = true) {
  const token = getAccessToken();
  const response = await fetch(apiUrl(path), {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(requiresAuth && token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    cache: "no-store",
  });
  const payload = await parseResponse(response);

  if (!response.ok) {
    if (response.status === 401) {
      clearAccessToken();
      const error = new Error("Your session has expired. Please sign in again.");
      error.status = 401;
      throw error;
    }

    const fallbackByStatus = {
      403: "ليس لديك صلاحية",
      503: "تعذر إرسال رسالة الموافقة، حاول لاحقاً",
    };
    const error = new Error(getMessage(payload, fallbackByStatus[response.status] || `Request failed with status ${response.status}.`));
    error.status = response.status;
    throw error;
  }

  return payload;
}

export async function getAccounts() {
  const payload = await request("/auth/emails");
  return {
    users: Array.isArray(payload?.users) ? payload.users : [],
    pendingRequests: Array.isArray(payload?.pendingRequests) ? payload.pendingRequests : [],
  };
}

export async function addAccount(values) {
  return request("/auth/register", { method: "POST", body: JSON.stringify(values) }, false);
}

export async function updateAccount(id, values) {
  return request(`/auth/account/${id}`, { method: "PATCH", body: JSON.stringify(values) });
}

export async function deleteAccount(id) {
  return request(`/auth/account/${id}`, { method: "DELETE" });
}
