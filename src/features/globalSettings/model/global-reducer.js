const TOGGLE_THEME_TYPE = "toggleThemeType";

export const toggleThemeType = (themeType) => ({
    type: TOGGLE_THEME_TYPE,
    themeType
})


let InitialState = {
    is_theme_type_fetching: true,
    theme_type: "light"
};

const globalReducer = (state = InitialState, action) => {
    let stateCopy;
    switch (action.type){
        case TOGGLE_THEME_TYPE:
            stateCopy = {
                ...state,
                theme_type: action.themeType,
            };
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default globalReducer;