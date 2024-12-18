import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use((e) => {
    return e;
})