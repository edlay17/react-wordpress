// libs
import {List} from '@material-ui/core';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import {Link as NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// ui
import MenuLink from "../../../ui/atoms/menu-link/menu-link";

// models, features
import {toggleIsMobileMenuActive} from "../../globalSettings/model/global-reducer";
import {ToggleThemeButtonMobile} from "../toggle-theme/toggle-theme";
import SearchForm from "../search-form/search-form";

// pages
import {links} from "../../../pages";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.elements.main,
        color: theme.palette.elements.text,
        zIndex: 9999,
    },
    posFixed: {
        position: "fixed",
    }
}));

const ListItemLink = (props) => {
    return <ListItem button component={NavLink} {...props} />;
}

export const MobileMenu = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isMobileMenuActive = useSelector(state => state.global.is_mobile_menu_active)
    const onLinkClick = () => {
        dispatch(toggleIsMobileMenuActive(false));
    };
    const menuLinks = links.map((link) => (
                <ListItemLink key={link.id} to={link.linkAddress} onClick={onLinkClick}>
                    <ListItemText primary={link.linkText} />
                </ListItemLink>
        )
    );

    return (
        <div className={`${classes.root} ${props.position==="fixed" && classes.posFixed}`}>
            {isMobileMenuActive &&
                <>
                    <List>
                        {menuLinks}
                    </List>
                    <Divider/>
                    <List>
                        <ToggleThemeButtonMobile/>
                    </List>
                    <Divider/>
                    <List>
                        <SearchForm/>
                    </List>
                </>
            }
        </div>
    )
}

export const DesktopMenu = () => {
    const menuLinks = links.map((link) =>
        <MenuLink linkTo={link.linkAddress} linkText={link.linkText} key={link.id}/>
    );
    return (
        <Box>
            {menuLinks}
        </Box>
    )
}

export const MobileHamburgerIcon = () => {
    const dispatch = useDispatch();
    const isMobileMenuActive = useSelector(state => state.global.is_mobile_menu_active);
    const styles = {
        color: grey[100],
    }
    const toggleMobileMenu = () => {
            if(isMobileMenuActive){
                dispatch(toggleIsMobileMenuActive(false));
            }
            else{
                dispatch(toggleIsMobileMenuActive(true));
            }
    }

    return (
        <IconButton onClick={toggleMobileMenu}>
            <MenuIcon fontSize="large" style={styles}/>
        </IconButton>
    )
}