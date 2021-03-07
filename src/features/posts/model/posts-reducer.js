import {PostAPI} from "../../../api/posts";

const SET_POSTS = "setPosts";
const POSTS_TOGGLE_IS_FETCHING = "postsToggleIsFetching";

const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})
const postsToggleIsFetching = (isFetching) => ({
    type: POSTS_TOGGLE_IS_FETCHING,
    isFetching
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
export const getFoundPosts = () => (dispatch) => {
    dispatch(postsToggleIsFetching(true));
    PostAPI.getFoundPosts().then(data=>{
        dispatch(setPosts(data));
        dispatch(postsToggleIsFetching(false));
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
            //stateCopy = {...state, postsData: action.posts.map( (elem) => Object.assign({}, elem, {tags: [...elem.tags]}))};
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
                            elem.featured_media !== 0 ?
                            elem._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url :
                            null,
                    }
                ))};
            return stateCopy;
            break;
        case POSTS_TOGGLE_IS_FETCHING:
            stateCopy = {...state, postsIsFetching: action.isFetching};
            return stateCopy;
            break;
        default:
            return state
            break;
    }
}

export default postsReducer;