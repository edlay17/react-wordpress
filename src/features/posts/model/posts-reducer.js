import {PostAPI} from "../../../api/posts";

const SET_POSTS = "setPosts";
const RESET_POSTS = "resetPosts";
const SET_POSTS_FROM_SEARCH = "setPostsFromSearch";
const POSTS_TOGGLE_IS_FETCHING = "postsToggleIsFetching";
const SET_FOUND_POSTS_ADDITIONAL_DATA = "setFoundPostsAdditionalData";
const SET_CATEGORY = "setCategory";
const POSTS_TOGGLE_IS_FOUND = "postsToggleIsFound";
const SET_POSTS_PAGES_COUNT = "setPostsPagesCount";

const setPostsPagesCount = (pagesCount) => ({
    type: SET_POSTS_PAGES_COUNT,
    pagesCount
})
const postsToggleIsFound = (isFound) => ({
    type: POSTS_TOGGLE_IS_FOUND,
    isFound
})
export const resetPosts = () => ({
    type: RESET_POSTS
})
const setPostsFromSearch = (posts) => ({
    type: SET_POSTS_FROM_SEARCH,
    posts
})
const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
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

export const getPosts = (category_slug, page) => async (dispatch, getState) => {
    dispatch(postsToggleIsFetching(true));
    const categories = await PostAPI.getCategoryName(category_slug);
    if (categories.length > 0){
        dispatch(postsToggleIsFound(true));
        const category = categories[0].name;
        dispatch(setCategory(category));
        const response = await PostAPI.getPosts(category, getState().posts.postsPerPage, page);
        if(Array.isArray(response.data)){
            dispatch(setPostsPagesCount(Math.ceil(response.headers["x-wp-total"] / getState().posts.postsPerPage)));
            dispatch(setPosts(response.data));
        }
        else {
            dispatch(postsToggleIsFound(false));
        }
    }
    else dispatch(postsToggleIsFound(false));
    dispatch(postsToggleIsFetching(false));
}
export const getAllPosts = (page) => async (dispatch, getState) => {
    dispatch(postsToggleIsFetching(true));
    const response = await PostAPI.getAllPosts(getState().posts.postsPerPage, page);
    if(Array.isArray(response.data)){
        dispatch(setPostsPagesCount(Math.ceil(response.headers["x-wp-total"] / getState().posts.postsPerPage)));
        dispatch(setPosts(response.data));
        dispatch(postsToggleIsFetching(false));
    }
    else{
        dispatch(postsToggleIsFound(false));
    }
}
export const getFoundPosts = (searchRequest, page) => async (dispatch, getState) => {
    dispatch(postsToggleIsFetching(true));
    const foundPostsResponse = await PostAPI.getFoundPosts(searchRequest, getState().posts.postsPerPage, page);
    if(Array.isArray(foundPostsResponse.data)){
        dispatch(setPostsPagesCount(Math.ceil(foundPostsResponse.headers["x-wp-total"] / getState().posts.postsPerPage)));
        dispatch(setPostsFromSearch(foundPostsResponse.data));
        const dataLength = getState().posts.postsData.length;
        if(dataLength > 0) {
            getState().posts.postsData.map( async (elem, index) => { // МОЖНО ЗАМЕНИТЬ НА FOR
                const authorData = await PostAPI.getByQuery(elem.author_request); // get author info
                let authorName = authorData.name;
                let authorAvatar = authorData.avatar_urls["48"];
                const tagsData = await PostAPI.getByQuery(elem.tags_request); // get tags
                let tags = tagsData.map(elem => elem.name);
                let imageSrc;
                if(elem.image_request !== "") { // if image not empty
                    let imageData = await PostAPI.getByQuery(elem.image_request); // get image
                    imageSrc = imageData.media_details["sizes"].medium_large.source_url;
                }
                else{
                    imageSrc = null;
                }
                dispatch(setFoundPostsAdditionalData({
                    author: {authorName, authorAvatar},
                    imageSrc,
                    tags
                }, index))
                if(index+1 === dataLength){
                    dispatch(postsToggleIsFetching(false));
                }
            })
        }
        else{
            dispatch(postsToggleIsFetching(false));
        }
    }
    else {
        dispatch(postsToggleIsFetching(false));
    }
}

const InitialState = {
    postsPerPage: 9,
    postsPagesCount: 1,
    postsIsFetching: true,
    postsData: [],
    isCategoryFound: true,
};

const postsReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_POSTS_PAGES_COUNT:
            stateCopy = {
                ...state,
                postsPagesCount: action.pagesCount
            }
            return stateCopy;
            break;
        case POSTS_TOGGLE_IS_FOUND:
            stateCopy = {
                ...state,
                isCategoryFound: action.isFound
            }
            return stateCopy;
            break;
        case RESET_POSTS:
            stateCopy = {
                ...state,
                postsPagesCount: 1,
                postsIsFetching: true,
                postsData: [],
                isCategoryFound: true,
            }
            return stateCopy;
            break;
        case SET_CATEGORY:
            stateCopy = {
                ...state,
                categoryName: action.category
            }
            return stateCopy;
            break;
        case SET_POSTS:
            if(action.posts != []){
                stateCopy = {
                    ...state,
                    postsData: action.posts.map(elem => (
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
                stateCopy = {
                    ...state, postsData: []
                };
            }
            return stateCopy;
            break;
        case SET_POSTS_FROM_SEARCH:
            if(action.posts != []){
                stateCopy = {
                    ...state,
                    postsData: action.posts.map(elem => {
                        if (elem._embedded.self[0].type === "post") {
                            let imgReq;
                            if(elem._embedded.self[0].featured_media > 0) imgReq = elem._embedded.self[0]._links["wp:featuredmedia"][0].href;
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
                                image_url: null,
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
                stateCopy = {
                    ...state,
                    postsData: []
                };
            }
            return stateCopy;
            break;
        case SET_FOUND_POSTS_ADDITIONAL_DATA:
            stateCopy = {
                ...state,
                postsData: state.postsData.map((elem,index)=>{
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
            stateCopy = {
                ...state,
                postsIsFetching: action.isFetching
            };
            return stateCopy;
            break;
        default:
            return state;
            break;
    }
}

export default postsReducer;