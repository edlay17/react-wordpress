// material ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

// other features
import {ToggleThemeButton} from "./toggle-theme/toggle-theme";
import {DesktopMenu, MobileHamburgerIcon, MobileMenu} from "./header-menu/header-menu";
import SearchForm from "./search-form/search-form";
import {HideOnScroll} from "./hide-on-scroll/hide-on-scroll";

// ui
import LogoWithNavLink from "../../ui/atoms/logo/logo";
import Box from "@material-ui/core/Box";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    toolBar: {
        justifyContent: "space-between",
    },
    appBar: {
        backgroundColor: theme.palette.primary.dark,
        minHeight: theme.spacing(7.5),
    },
    box: {
        display: "flex",
    }
}));

export const Header = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileMenuActive = useSelector(state => state.global.is_mobile_menu_active)
    const classes = useStyles();

    return(
        <>
            <HideOnScroll {...props} isDisable={isMobileMenuActive}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Container position="fixed">
                        <Toolbar className={classes.toolBar}>
                            <LogoWithNavLink logoText="Edlay.net"/>
                            {!matches
                                ?
                                    <>
                                        <DesktopMenu/>
                                        <Box className={classes.box}>
                                            <ToggleThemeButton/>
                                            <SearchForm/>
                                        </Box>
                                    </>
                                : <MobileHamburgerIcon/>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            {matches && <MobileMenu position="fixed"/>}
        </>
    )
}