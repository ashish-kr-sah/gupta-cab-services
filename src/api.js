import axios from "axios";

// Production API
const API_URL =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:5000`;

export const API = API_URL.replace(/\/$/, "");

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