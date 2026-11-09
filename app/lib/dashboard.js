import { apiUrl } from "./api";
import { getAccessToken } from "./auth";

/**
 * @typedef {Object} DashboardOverview
 * @property {number} totalArticles
 * @property {number} totalComments
 * @property {number} totalContacts
 * @property {number} totalJobs
 * @property {number} totalJobApplications
 * @property {number} totalProducts
 * @property {number} totalServesRequests
 * @property {Array<Object>} latestRequests
 * @property {Array<Object>} latestContacts
 */

function getOverviewPayload(payload) {
  if (payload?.data && typeof payload.data === "object" && !Array.isArray(payload.data)) return payload.data;
  return payload || {};
}

export async function getDashboardOverview(signal) {
  const token = getAccessToken();
  const response = await fetch(apiUrl("/dashboard/overview"), {
    method: "GET",
    signal,
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    cache: "no-store",
  });

  const text = await response.text();
  let payload = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message = Array.isArray(payload?.message) ? payload.message.join(" ") : payload?.message || payload?.error;
    throw new Error(message || `Unable to load dashboard overview (${response.status}).`);
  }

  return getOverviewPayload(payload);
}
