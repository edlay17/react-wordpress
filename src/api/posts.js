import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://wp.edlay.net/wp-json/wp/v2/',
    withCredentials: true,
});

export const PostAPI = {
    getPosts: (category) =>{
        return instance.get(`posts?category_name=${category}&_embed&_fields=author,id,slug,excerpt,title,date,tags,featured_media,_links,_embedded`).then(response => response.data);
    },
    getPost: (slug) =>{
        return instance.get(`posts/?slug=${slug}&_fields=id,content,title`).then(response => response.data);
    },
};

export const PageAPI = {

}