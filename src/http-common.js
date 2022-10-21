import axios from "axios";
import { baseURL } from "./config";

axios.defaults.withCredentials = true
export default axios.create({
  withCredentials: true,
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});