import HomeIcon from "@material-ui/icons/Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {emphasize, makeStyles, withStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link as NavLink} from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
            cursor: "pointer"
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

const useStyles = makeStyles((theme) => ({
    breadCrumbs: {
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
                icon={<HomeIcon fontSize="small" />}
            />
            {breadLinks}
            <StyledBreadcrumb label={props.currentPageName} onClick={handleClick}/>
        </Breadcrumbs>
    )
}

export default BreadcrumbsNavigation;