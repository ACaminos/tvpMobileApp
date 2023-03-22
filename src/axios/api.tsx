import axios from "axios";

const api = axios.create({
    baseURL: 'https://new.tvpublica.com.ar/api'
})
export default api