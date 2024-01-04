import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_TOKEN}`,
  },
});

export default axiosInstance;
