import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
  responseType: "json",
});

export const apiUrl = http;
