import HomeIcon from "@material-ui/icons/Home";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {emphasize, withStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link as NavLink} from "react-router-dom";
import MenuLink from "../../atoms/menu-link/menu-link";

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

function handleClick(event) {
    event.preventDefault();
}

export const BreadcrumbsNavigation = (props) => {
    const breadLinks = props.breadLinks.map((link) =>
        <StyledBreadcrumb component={NavLink} to={link.linkAddress} label={link.linkText} key={link.key}/>
    );
    return(
        <Breadcrumbs aria-label="breadcrumb">
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