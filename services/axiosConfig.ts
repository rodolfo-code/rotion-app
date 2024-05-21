import axios from "axios";

const base_url = "http://localhost:3333";

const api = axios.create({
  baseURL: base_url,
});

export default api;
