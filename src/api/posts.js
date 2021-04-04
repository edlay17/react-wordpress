import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://wp.edlay.net/wp-json/wp/v2/'
});

export const PostAPI = {
    getPosts: (category, perPage = 10, pageNum = 1) =>{
        return instance.get(`posts/?per_page=${perPage}&page=${pageNum}&category_name=${category}&_embed&_fields=author,id,slug,excerpt,title,date,tags,featured_media,_links,_embedded`)
            .then(response => response)
            .catch(error => ({data: error}));
    },
    getAllPosts: (perPage = 10, pageNum = 1) => {
        return instance.get(`posts/?per_page=${perPage}&page=${pageNum}&_embed&_fields=author,id,slug,excerpt,title,date,tags,featured_media,_links,_embedded`)
            .then(response => response)
            .catch(error => ({data: error}));
    },
    getFoundPosts: (searchText, perPage = 10, pageNum = 1) => {
        return instance.get(`search/?per_page=${perPage}&page=${pageNum}&search=${searchText}&type=post&_embed&_fields=author,id,slug,excerpt,title,date,tags,featured_media,_links,_embedded`)
            .then(response => response)
            .catch(error => ({data: error}));
    },
    getCategoryName: (categorySlug) => {
        return instance.get(`categories/?slug=${categorySlug}`)
            .then(response => response.data);
    },
    getPost: (slug) =>{
        return instance.get(`posts/?slug=${slug}&_embed&_fields=id,content,title,_links,_embedded`)
            .then(response => response.data);
    },
    getComments: (postId) => {
        return instance.get(`comments/?post=${postId}`)
            .then(response => response.data);
    },
    getByQuery: (query) =>{
        return axios.get(query)
            .then(response => response.data);
    },
    putComment: (data) => {
        return instance.post(`comments`, data)
            .then(response => response.data)
            .catch(error => ({error}));
    }
};

export const PageAPI = {
    getPage: (slug) =>{
        return instance.get(`pages/?slug=${slug}&_fields=id,content,title`)
            .then(response => response.data);
    },
}