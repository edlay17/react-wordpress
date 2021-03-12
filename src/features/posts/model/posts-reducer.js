import {PostAPI} from "../../../api/posts";

const SET_POSTS = "setPosts";
const SET_POSTS_FROM_SEARCH = "setPostsFromSearch";
const POSTS_TOGGLE_IS_FETCHING = "postsToggleIsFetching";
const SET_FOUND_POSTS_ADDITIONAL_DATA = "setFoundPostsAdditionalData";

const setPostsFromSearch = (posts) => ({
    type: SET_POSTS_FROM_SEARCH,
    posts
})
const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})
const postsToggleIsFetching = (isFetching) => ({
    type: POSTS_TOGGLE_IS_FETCHING,
    isFetching
})
const setFoundPostsAdditionalData = (data, elemIndex) => ({
    type: SET_FOUND_POSTS_ADDITIONAL_DATA,
    data,
    elemIndex
})

export const getPosts = (category) => (dispatch) => {
    dispatch(postsToggleIsFetching(true));
    PostAPI.getPosts(category).then(data=>{
        dispatch(setPosts(data));
        dispatch(postsToggleIsFetching(false));
    })
}
export const getAllPosts = () => (dispatch) => {
    dispatch(postsToggleIsFetching(true));
    PostAPI.getAllPosts().then(data=>{
        dispatch(setPosts(data));
        dispatch(postsToggleIsFetching(false));
    })
}
export const getFoundPosts = (searchRequest) => (dispatch, getState) => {
    dispatch(postsToggleIsFetching(true));
    PostAPI.getFoundPosts(searchRequest).then(data=>{
        dispatch(setPostsFromSearch(data));
        console.log(data);
        if(data.length > 0){
            getState().posts.postsData.map((elem, index) => {
                PostAPI.getByQuery(elem.author_request).then(data=>{
                    let authorName = data.name;
                    let authorAvatar = data.avatar_urls["48"];
                    PostAPI.getByQuery(elem.tags_request).then(data2=>{
                        let tags = data2.map(elem => elem.name);
                        if(elem.image_request !== ""){
                            PostAPI.getByQuery(elem.image_request).then(data3=> {
                                let imageSrc = data3[0].media_details["sizes"].medium_large.source_url;
                                dispatch(setFoundPostsAdditionalData({
                                    author: {authorName, authorAvatar},
                                    imageSrc,
                                    tags
                                }, index))
                                dispatch(postsToggleIsFetching(false));
                            })
                        }
                        else{
                            dispatch(setFoundPostsAdditionalData({
                                author: {authorName, authorAvatar},
                                imageSrc: "",
                                tags
                            }, index))
                            dispatch(postsToggleIsFetching(false));
                        }
                    })
                })
            })
        }
        else dispatch(postsToggleIsFetching(false));
    })
}

let InitialState = {
    postsIsFetching: false,
    postsData: [
    ],
};

const postsReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_POSTS:
            if(action.posts != []){
                stateCopy = {...state, postsData: action.posts.map(elem => (
                        {
                            id: elem.id,
                            slug: elem.slug,
                            date: elem.date.replace("T", " "),
                            title: elem.title.rendered,
                            excerpt: elem.excerpt.rendered,
                            author: elem._embedded.author[0].name,
                            author_image_url: elem._embedded.author[0].avatar_urls["48"],
                            tags: elem._embedded["wp:term"][1].map(elem2 => (elem2.name)),
                            image_url:
                                elem.featured_media !== 0
                                    ? elem._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url
                                    : null,
                        }
                    ))};
            }
            else{
                stateCopy = {...state, postsData: []};
            }
            return stateCopy;
            break;
        case SET_POSTS_FROM_SEARCH:
            if(action.posts != []){
                stateCopy = {...state, postsData: action.posts.map(elem => {
                        if (elem._embedded.self[0].type === "post") {
                            let imgReq;
                            if(elem._embedded.self[0].featured_media != "0") imgReq = elem._embedded.self[0]._links["wp:attachment"][0].href;
                            else imgReq = "";
                            return {
                                id: elem._embedded.self[0].id,
                                slug: elem._embedded.self[0].slug,
                                date: elem._embedded.self[0].date.replace("T", " "),
                                title: elem._embedded.self[0].title.rendered,
                                excerpt: elem._embedded.self[0].excerpt.rendered,
                                author: "",
                                author_image_url: "",
                                tags: [],
                                image_url: "",
                                author_request: elem._embedded.self[0]._links.author[0].href, // get a api link to get data
                                image_request: imgReq, // get a api link to get data
                                tags_request: elem._embedded.self[0]._links["wp:term"][1].href, // get a api link to get data
                            }
                        }
                    }).filter(elem => {
                        return elem !== undefined && elem !== null;
                    })};
            }
            else{
                stateCopy = {...state, postsData: []};
            }
            return stateCopy;
            break;
        case SET_FOUND_POSTS_ADDITIONAL_DATA:
            stateCopy = {...state, postsData: state.postsData.map((elem,index)=>{
                    if(index===action.elemIndex){
                        elem.author = action.data.author.authorName;
                        elem.author_image_url = action.data.author.authorAvatar;
                        elem.image_url = action.data.imageSrc;
                        elem.tags = action.data.tags;
                        return elem;
                    }
                    return elem;
                })}
            return stateCopy;
            break;
        case POSTS_TOGGLE_IS_FETCHING:
            stateCopy = {...state, postsIsFetching: action.isFetching};
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default postsReducer;