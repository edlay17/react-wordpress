import HomeIcon from "@material-ui/icons/Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {emphasize, makeStyles, withStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link as NavLink} from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        color: theme.palette.elements.text,
        backgroundColor: theme.palette.elements.secondary,
        height: theme.spacing(3),
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
    icon: {
        color: theme.palette.elements.text
    }
}))(Chip);

const useStyles = makeStyles((theme) => ({
    breadCrumbs: {
        marginBottom: theme.spacing(3),
        color: theme.palette.elements.text,
    },
    chipsSkeleton: {
        borderRadius: theme.spacing(2),
        width: theme.spacing(9),
        height: theme.spacing(3),
        backgroundColor: theme.palette.elements.secondary,
    },
}));

export const LoadingBreadcrumbsNavigation = (props) => {
    const classes = useStyles();

    return(
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumbs}>
            <StyledBreadcrumb
                component={NavLink}
                to="/"
                label="Home"
                icon={<HomeIcon className={classes.icon} fontSize="small" />}
            />
            <Skeleton variant="rect" className={classes.chipsSkeleton}/>
            <Skeleton variant="rect" className={classes.chipsSkeleton}/>
        </Breadcrumbs>
    )
}

export default LoadingBreadcrumbsNavigation;