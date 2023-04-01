import axios from "axios";

export const api = async() => {
    try {
        const response = await axios.get('https://new.tvpublica.com.ar/api/get_recent_posts/');
        console.log (response)
    } catch (e) {
        console.log(e)
    }
}
