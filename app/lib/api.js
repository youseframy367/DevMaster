export const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

export const apiUrl = (path) =>
  `${API_BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
