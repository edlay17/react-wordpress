import {useSelector} from "react-redux";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme, lightTheme} from "../../ui/theme-options";

export const withTheme = Component => ({...props}) => {
    const theme_type = useSelector(state => state.global.theme_type);
    return (
        <ThemeProvider theme={theme_type === "dark" ? darkTheme : lightTheme}>
            <Component {...props} />
        </ThemeProvider>
    )
};

export default withTheme;

