import {links} from "../../pages";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import LogoWithNavLink from "../../ui/atoms/logo/logo";
import MenuLink from "../../ui/atoms/menu-link/menu-link";
import SearchForm from "./search-form/сomponents/search-form";

const useStyles = makeStyles((theme) => ({
    toolBar: {
        justifyContent: "space-between",
    },
    appBar: {
        backgroundColor: "#2b2d31",
    }
}));

export const HeaderTemplate = (props) => {
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
                    <SearchForm/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default HeaderTemplate;