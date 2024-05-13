
import axios from "axios";

export const Axios = axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
});
Axios.interceptors.request.use((config) => {
  const jwtToken = localStorage.getItem("token");
  if (jwtToken!=="" || jwtToken !== null) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

