import {List} from '@material-ui/core';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {links} from "../../../pages";
import MenuLink from "../../../ui/atoms/menu-link/menu-link";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import {grey} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {toggleIsMobileMenuActive} from "../../globalSettings/model/global-reducer";
import Divider from '@material-ui/core/Divider';
import {Link as NavLink} from "react-router-dom";
import SearchForm from "../search-form/search-form";
import {ToggleThemeButtonMobile} from "../toggle-theme/toggle-theme";


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

function ListItemLink(props) {
    return <ListItem button component={NavLink} {...props} />;
}

export const MobileMenu = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isMobileMenuActive = useSelector(state => state.global.is_mobile_menu_active)
    const menuLinks = links.map((link) => (
                <ListItemLink key={link.id} to={link.linkAddress} onClick={() => {dispatch(toggleIsMobileMenuActive(false))}}>
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

    return (
        <IconButton onClick={() => {
            if(isMobileMenuActive)dispatch(toggleIsMobileMenuActive(false))
            else dispatch(toggleIsMobileMenuActive(true))
        }}>
            <MenuIcon fontSize="large" style={{ color: grey[100] }}/>
        </IconButton>
    )
}