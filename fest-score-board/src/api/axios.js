import axios from "axios";

// Use env var for baseURL (good for production)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api", // fallback to proxy
  withCredentials: true, // if your API uses cookies / auth
});

export default API;
