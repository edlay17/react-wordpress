import {PageAPI} from "../../../api/posts";

const SET_PAGE = "setPage";
const SET_EMPTY_PAGE = "setEmptyPage";
const PAGE_TOGGLE_IS_FETCHING = "pageToggleIsFetching";

const setPage = (page) => ({
    type: SET_PAGE,
    page
})
const setEmptyPage = () => ({
    type: SET_EMPTY_PAGE
})
const pageToggleIsFetching = (isFetching) => ({
    type: PAGE_TOGGLE_IS_FETCHING,
    isFetching
})

export const getPage = (slug) => async (dispatch) => {
    dispatch(pageToggleIsFetching(true));
    const data = await PageAPI.getPage(slug);
    if(data.length === 0) {
        dispatch(setEmptyPage());
    }
    else{
        dispatch(setPage(data));
    }
    dispatch(pageToggleIsFetching(false));
}

let InitialState = {
    pageIsFetching: false,
    currentPageData: {
        isEmpty: false,
        id: 1,
        title: "",
        content: "",
        comments: []
    }
};

const pageReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_PAGE:
            stateCopy = {...state, currentPageData: {
                    isEmpty: false,
                    id: action.page[0].id,
                    title: action.page[0].title.rendered,
                    content: action.page[0].content.rendered,
                }
            };
            return stateCopy;
            break;
        case SET_EMPTY_PAGE:
            stateCopy = {...state, currentPageData: {
                    isEmpty: true,
                    id: "",
                    title: "",
                    content: "",
                }
            };
            return stateCopy;
            break;
        case PAGE_TOGGLE_IS_FETCHING:
            stateCopy = {...state, pageIsFetching: action.isFetching};
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default pageReducer;