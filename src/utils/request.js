import axios from "axios";
let service = axios.create({
  baseURL: "http://192.168.1.146:3000",
  timeout: 3000,
});

export default service;
