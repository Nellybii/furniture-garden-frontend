import axios from "axios";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000`
    : process.env.BASE_URL;


export const api = axios.create({
      baseURL: BASE_URL,
      responseType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
      },
    });    
    