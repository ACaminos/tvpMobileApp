import axios from "axios";

const api = axios.create({
    // baseURL: 'https://new.tvpublica.com.ar/api'
    baseURL:'https://new/tvpublica.com.ar/api/get_vivo_url/'
})
export default api