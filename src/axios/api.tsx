// import axios from "axios";

// export const api = async() => {
//     try {
//         const response = await axios.get('https://new.tvpublica.com.ar/api/get_recent_posts/');
//         console.log (response)
//     } catch (e) {
//         console.log(e)
//     }
// }


export const getApi = async () => {
    try {
      const response = await fetch ('https://new.tvpublica.com.ar/api/get_recent_posts/');
      const json = await response.json();
      const post = await JSON.stringify(json.posts.slug)
    }
    catch(e){
      console.error(e)
    }
  }