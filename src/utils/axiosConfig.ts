import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://secondbrain-oz8s.onrender.com/api/v1/",
  timeout: 2500,
});
