import {Link as NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: theme.palette.common.white,
        display: "inline-block",
        paddingBlock: theme.spacing(2),
    },
}));

export const MenuLink = (props) => {
    const classes = useStyles();
    return(
        <Link to={props.linkTo} className={classes.menuItem} component={NavLink}>
            {props.linkText}
        </Link>
    )
}

export default MenuLink;