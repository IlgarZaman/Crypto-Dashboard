import axios from "axios";

export const API = axios.create({ baseURL: "https://api.coincap.io/v2" });

export const getCryptoData = () => API.get("/assets");
