import {PostAPI} from "../../../api/posts";

const SET_POST = "setPost";
const SET_EMPTY_POST = "setEmptyPost";
const POST_TOGGLE_IS_FETCHING = "postToggleIsFetching";

const setPost = (post) => ({
    type: SET_POST,
    post
})
const setEmptyPost = () => ({
    type: SET_EMPTY_POST
})
const postToggleIsFetching = (isFetching) => ({
    type: POST_TOGGLE_IS_FETCHING,
    isFetching
})

export const getPost = (slug) => async (dispatch) => {
    dispatch(postToggleIsFetching(true));
    const data = await PostAPI.getPost(slug);
    if(data.length === 0) {
        dispatch(setEmptyPost());
    }
    else{
        dispatch(setPost(data));
    }
    dispatch(postToggleIsFetching(false));
}

let InitialState = {
    postIsFetching: false,
    currentPostData: {
        isEmpty: false,
        id: 1,
        title: "",
        content: "",
        categoryName: "about projects",
        categorySlug: "about-projects",
        comments: [],
    }
};

const postReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_POST:
            stateCopy = {...state, currentPostData: {
                    ...state.currentPostData,
                    isEmpty: false,
                    id: action.post[0].id,
                    title: action.post[0].title.rendered,
                    content: action.post[0].content.rendered,
                }
            };
            return stateCopy;
            break;
        case SET_EMPTY_POST:
            stateCopy = {...state, currentPostData: {
                    ...state.currentPostData,
                    isEmpty: true,
                    id: "",
                    title: "",
                    content: "",
                }
            };
            return stateCopy;
            break;
        case POST_TOGGLE_IS_FETCHING:
            stateCopy = {...state, postIsFetching: action.isFetching};
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default postReducer;