import axios from "axios";

export const wikiAPI = axios.create({
    baseURL: "http://localhost:8000/api",
});

export default {
    wikiAPI,
}