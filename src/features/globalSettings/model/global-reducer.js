const TOGGLE_THEME_TYPE = "toggleThemeType";
const TOGGLE_IS_MOBILE_MENU_ACTIVE = "toggleIsMobileMenuActive";

export const toggleThemeType = (themeType) => ({
    type: TOGGLE_THEME_TYPE,
    themeType
})
export const toggleIsMobileMenuActive = (isActive) => ({
    type: TOGGLE_IS_MOBILE_MENU_ACTIVE,
    isActive
})


let InitialState = {
    is_theme_type_fetching: true,
    theme_type: "light",
    is_mobile_menu_active: false,
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
        case TOGGLE_IS_MOBILE_MENU_ACTIVE:
            stateCopy = {
                ...state,
                is_mobile_menu_active: action.isActive,
            };
            return stateCopy;
            break;
        default:
            return {...state}
            break;
    }
}

export default globalReducer;