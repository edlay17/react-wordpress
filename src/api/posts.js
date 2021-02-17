import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://darvin.su/wp-json/wp/v2/posts/',
    withCredentials: true,
});

export const PostAPI = {
    getPosts: () =>{
        return instance.get().then(response => response.data);
    }
}