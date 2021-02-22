import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import LogoWithNavLink from "../atoms/logo";
import MenuLink from "../atoms/menuLink";
import SearchInputWithIcon from "../molecules/searchInputWithIcon"

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "space-between",
    },
}));

export const HeaderTemplate = (props) => {
    const classes = useStyles();
    const menuLinks = props.menuLinks.map((link) =>
        <MenuLink linkTo={link.linkAddress} linkText={link.linkText} key={link.id}/>
    );
    return(
        <AppBar position="static">
            <Container position="fixed">
                <Toolbar className={classes.root}>
                    <LogoWithNavLink logoText="Edlay.net"/>
                    <Box>
                        {menuLinks}
                    </Box>
                    <SearchInputWithIcon/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default HeaderTemplate;