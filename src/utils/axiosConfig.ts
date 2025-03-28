import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "http://localhost:3001/api/v1/",
  timeout: 2500,
});
