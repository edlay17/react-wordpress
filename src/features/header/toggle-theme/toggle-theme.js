import {toggleThemeType} from "../../globalSettings/model/global-reducer";
import {Brightness3, BrightnessLow} from "@material-ui/icons";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {useDispatch, useSelector} from "react-redux";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

export const ToggleThemeButton = () => {
    const dispatch = useDispatch();
    const theme_type = useSelector(state => state.global.theme_type)

    return (
        <IconButton
            onClick={() => {theme_type === "dark" ? dispatch(toggleThemeType("light")) : dispatch(toggleThemeType("dark"))}}
            aria-label="delete"
        >
            {theme_type === "dark"
                ? <Brightness3 style={{ color: grey[100] }}/>
                : <BrightnessLow style={{ color: grey[100] }}/>
            }
        </IconButton>
    )
}

export const ToggleThemeButtonMobile = () => {
    const dispatch = useDispatch();
    const theme_type = useSelector(state => state.global.theme_type)
    const onChangeThemeType = () => {
        if(theme_type === "dark")dispatch(toggleThemeType("light"));
        else dispatch(toggleThemeType("dark"));
    }

    return (
        <ListItem button onClick={onChangeThemeType}>
            <ListItemText primary={theme_type === "dark" ? "light theme" : "dark theme"} />
        </ListItem>
    )
}