import axios from "axios";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000`
    : `https://furniture-project-18.onrender.com/`


export const api = axios.create({
      baseURL: BASE_URL,
      responseType: "json",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
      },
    });    
    