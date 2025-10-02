import axios from "axios";

// Use env var for baseURL (good for production)
const API = axios.create({
  baseURL: "https://fest-score-board-backend.onrender.com/api/", // fallback to proxy
  withCredentials: true, // if your API uses cookies / auth
});

export default API;
