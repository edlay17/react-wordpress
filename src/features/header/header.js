import {links} from "../../pages";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import LogoWithNavLink from "../../ui/atoms/logo/logo";
import MenuLink from "../../ui/atoms/menu-link/menu-link";
import SearchForm from "./search-form/search-form";
import {useDispatch, useSelector} from "react-redux";
import {toggleThemeType} from "../globalSettings/model/global-reducer";
import IconButton from "@material-ui/core/IconButton";
import {Brightness3, BrightnessLow} from "@material-ui/icons";
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    toolBar: {
        justifyContent: "space-between",
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const HeaderTemplate = (props) => {
    const dispatch = useDispatch();
    const theme_type = useSelector(state => state.global.theme_type)
    const classes = useStyles();
    const menuLinks = links.map((link) =>
        <MenuLink linkTo={link.linkAddress} linkText={link.linkText} key={link.id}/>
    );
    return(
        <AppBar position="static" className={classes.appBar}>
            <Container position="fixed">
                <Toolbar className={classes.toolBar}>
                    <LogoWithNavLink logoText="Edlay.net"/>
                    <Box>
                        {menuLinks}
                    </Box>
                    <IconButton
                        onClick={() => {theme_type === "dark" ? dispatch(toggleThemeType("light")) : dispatch(toggleThemeType("dark"))}}
                        aria-label="delete"
                    >
                        {theme_type === "dark"
                            ? <Brightness3 style={{ color: grey[100] }}/>
                            : <BrightnessLow style={{ color: grey[100] }}/>
                        }
                    </IconButton>
                    <SearchForm/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default HeaderTemplate;