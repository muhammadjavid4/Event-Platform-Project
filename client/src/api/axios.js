import axios from "axios";

const api = axios.create({
  baseURL: "https://event-platform-backend-jw7y.onrender.com/api"
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default api;
