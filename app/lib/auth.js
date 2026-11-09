import { apiUrl } from "./api";

const ACCESS_TOKEN_KEY = "accessToken";

function extractToken(payload) {
  if (!payload || typeof payload !== "object") return null;

  return (
    payload.accessToken ||
    payload.access_token ||
    payload.token ||
    payload.data?.accessToken ||
    payload.data?.access_token ||
    payload.data?.token ||
    payload.data?.data?.accessToken ||
    null
  );
}

async function readResponse(response) {
  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function getErrorMessage(payload, fallback) {
  if (typeof payload === "string" && payload.trim()) return payload;
  if (Array.isArray(payload?.message)) return payload.message.join(" ");
  if (payload?.message) return payload.message;
  if (payload?.error) return payload.error;
  return fallback;
}

export async function loginRequest(credentials) {
  const response = await fetch(apiUrl("/auth/login"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const payload = await readResponse(response);

  if (!response.ok) {
    throw new Error(getErrorMessage(payload, "Invalid email or password."));
  }

  const token = extractToken(payload);
  if (!token) {
    throw new Error("Login succeeded, but no access token was returned.");
  }

  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
  return { payload, token };
}

export async function getCurrentUser() {
  const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!token) return null;

  const response = await fetch(apiUrl("/auth/current-user"), {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const payload = await readResponse(response);

  if (response.status === 401 || response.status === 403) {
    clearAccessToken();
    return null;
  }

  if (!response.ok) {
    throw new Error(getErrorMessage(payload, "Unable to load your profile."));
  }

  return payload;
}

export function getAccessToken() {
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function clearAccessToken() {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
}
