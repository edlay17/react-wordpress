import {PostAPI} from "../../../api/posts";

const SET_POST = "setPost";
const SET_EMPTY_POST = "setEmptyPost";
const RESET_POST = "resetPost";
const SET_COMMENTS = "setComments";
const POST_TOGGLE_IS_FETCHING = "postToggleIsFetching";
const COMMENTS_TOGGLE_IS_FETCHING = "commentsToggleIsFetching";

const setPost = (post) => ({
    type: SET_POST,
    post
})
const setEmptyPost = () => ({
    type: SET_EMPTY_POST
})
export const resetPost = () => ({
    type: RESET_POST
})
const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
})
const postToggleIsFetching = (isFetching) => ({
    type: POST_TOGGLE_IS_FETCHING,
    isFetching
})
const commentsToggleIsFetching = (isFetching) => ({
    type: COMMENTS_TOGGLE_IS_FETCHING,
    isFetching
})


export const getPost = (slug) => async (dispatch, getState) => {
    dispatch(postToggleIsFetching(true));
    const data = await PostAPI.getPost(slug);
    if(data.length === 0) {
        dispatch(setEmptyPost());
    }
    else{
        dispatch(setPost(data));
        let postId = getState().post.currentPostData.id;
        const commentsData = await PostAPI.getComments(postId);
        dispatch(setComments(commentsData));
    }
    dispatch(postToggleIsFetching(false));
}

export const addComment = (commentData, setError, done) => async (dispatch, getState) => {
    dispatch(commentsToggleIsFetching(true));
    const comment = {...commentData, post: getState().post.currentPostData.id}
    const response = await PostAPI.putComment(comment);
    if(response.error){
        setError("content", {
            type: "manual",
            message: "Duplicate comment found. You seem to have said that already!"
        });
    }
    else{
        done();
        let postId = getState().post.currentPostData.id;
        const commentsData = await PostAPI.getComments(postId);
        dispatch(setComments(commentsData));
    }
    dispatch(commentsToggleIsFetching(false));
}


let InitialState = {
    postIsFetching: true,
    commentsIsFetching: false,
    currentPostData: {
        isEmpty: false,
        id: 1,
        title: "",
        content: "",
        categoryName: "",
        categorySlug: "",
        comments: [],
    }
};

const postReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_POST:
            stateCopy = {
                ...state,
                currentPostData: {
                    ...state.currentPostData,
                    isEmpty: false,
                    id: action.post[0].id,
                    title: action.post[0].title.rendered,
                    content: action.post[0].content.rendered,
                    categoryName: action.post[0]._embedded["wp:term"][0][0].name,
                    categorySlug: action.post[0]._embedded["wp:term"][0][0].slug,
                }
            };
            return stateCopy;
            break;
        case SET_EMPTY_POST:
            stateCopy = {
                ...state,
                currentPostData: {
                    ...state.currentPostData,
                    isEmpty: true,
                }
            };
            return stateCopy;
            break;
        case RESET_POST:
            stateCopy = {
                ...state,
                postIsFetching: true
            };
            return stateCopy;
            break;
        case SET_COMMENTS:
            stateCopy = {
                ...state,
                currentPostData: {
                    ...state.currentPostData,
                    comments: action.comments.map(elem => (
                        {
                            author: elem.author_name,
                            author_image_url: elem.author_avatar_urls["96"],
                            comment: elem.content.rendered,
                            date: elem.date.replace("T", " "),
                            id: elem.id
                        }
                    ))
                }
            };
            return stateCopy;
            break;
        case POST_TOGGLE_IS_FETCHING:
            stateCopy = {
                ...state,
                postIsFetching: action.isFetching
            };
            return stateCopy;
            break;
        case COMMENTS_TOGGLE_IS_FETCHING:
            stateCopy = {
                ...state,
                commentsIsFetching: action.isFetching
            };
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default postReducer;