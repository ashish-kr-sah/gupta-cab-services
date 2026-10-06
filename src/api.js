import axios from "axios";

// Local backend by default. It automatically uses the same host as the Vite app,
// which also makes API requests work when testing the site from a phone on Wi-Fi.
const localApi = `${window.location.protocol}//${window.location.hostname}:5000`;

export const API =
  import.meta.env.VITE_API_URL || localApi;

export const api = axios.create({
  baseURL: `${API}/api`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
