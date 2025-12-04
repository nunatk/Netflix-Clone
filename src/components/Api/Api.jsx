import axios from "axios";

const key = import.meta.env.VITE_API_KEY;
// const baseUrl = import.meta.env.VITE_TMDB_URL;

const Api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  params: { api_key: import.meta.env.VITE_TMDB_KEY }
});


export default Api;
