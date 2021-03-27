import HomeIcon from "@material-ui/icons/Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {emphasize, makeStyles, withStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link as NavLink} from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        color: theme.palette.elements.text,
        backgroundColor: theme.palette.elements.secondary,
        height: theme.spacing(3),
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(theme.palette.elements.secondary, 0.12),
            cursor: "pointer"
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.elements.secondary, 0.20),
        },
    },
    icon: {
        color: theme.palette.elements.text
    }
}))(Chip);

const useStyles = makeStyles((theme) => ({
    breadCrumbs: {
        color: theme.palette.elements.text,
        marginBottom: theme.spacing(3)
    },
}));

function handleClick(event) {
    event.preventDefault();
}

export const BreadcrumbsNavigation = (props) => {
    const classes = useStyles();
    const breadLinks = props.breadLinks.map((link) =>
        <StyledBreadcrumb component={NavLink} to={link.linkAddress} label={link.linkText} key={link.key}/>
    );

    return(
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
            <StyledBreadcrumb
                component={NavLink}
                to="/"
                label="Home"
                icon={<HomeIcon className={classes.icon} fontSize="small" />}
            />
            {breadLinks}
            <StyledBreadcrumb label={props.currentPageName} onClick={handleClick}/>
        </Breadcrumbs>
    )
}

export default BreadcrumbsNavigation;