import Typography from "@material-ui/core/Typography";
import {Link as NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logoLink: {
        color: theme.palette.common.white,
        textDecoration: "none"
    },
}));

export const LogoWithNavLink = (props) => {
    const classes = useStyles();
    return(
        <Typography variant="h5">
            <NavLink className={classes.logoLink} to="/">{props.logoText}</NavLink>
        </Typography>
     )
}

export default LogoWithNavLink;