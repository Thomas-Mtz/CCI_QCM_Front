// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: false,
  headers: {
    Accept: "application/ld+json",
    "Content-Type": "application/ld+json",
  },
});

export default {
  getUsers() {
    return apiClient.get("/users"); // Remplacez '/users' par le bon endpoint de votre API
  },

  addUser(userData) {
    return apiClient.post("/users", userData);
  },
};
