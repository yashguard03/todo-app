import axios from "axios";
import { baseUrl } from "./config";

const token = sessionStorage.getItem("userDetails")?.token;

const api = axios.create({
  baseURL: baseUrl || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      setTimeout(() => (window.location.href = "/logout"), 1000);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

class ApiHandler {
  static get(url, queryParams) {
    // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const queryArray = [];

    if (queryParams) {
      for (let [key, value] of Object.entries(queryParams)) {
        if (value?.trim()) {
          queryArray.push(`${key}=${value}`);
        }
      }
    }

    return api.get(url + "?" + queryArray.join("&"));
  }

  static post({ url, data }) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.post(url, data);
  }

  static put({ url, data }) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.put(url, data);
  }

  static delete({ url }) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return api.delete(url);
  }
}

const getLoggedInUser = () => {
  const user = sessionStorage.getItem("userDetails");
  return user ? JSON.parse(user) : null;
};

export { ApiHandler, getLoggedInUser };
