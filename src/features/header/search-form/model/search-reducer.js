const SET_SEARCH_TEXT = "setSearchText";

export const setSearchText = (text) => ({
    type: SET_SEARCH_TEXT,
    text
})
let InitialState = {
    searchText: ""
};

const searchReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case SET_SEARCH_TEXT:
            stateCopy = {...state, searchText: action.text};
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default searchReducer;