import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import LoadingBreadcrumbsNavigation from "../../../molecules/breadcrumbs/loading-breadcrumbs/loading-breadcrumbs";
import LoadingSinglePageTitle
    from "../../../atoms/single-page-title/loading-single-page-title/loading-single-page-title";
import LoadingContent from "../../../atoms/content/loading-content/loading-content";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: theme.spacing(3)
    },
    pageWrapper: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(4)
    },
    contentSkeleton: {
        height: theme.spacing(70),
    }
}));
console.log("da");

export const LoadingPageTemplate = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.pageWrapper}>
                <LoadingBreadcrumbsNavigation/>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                    <LoadingSinglePageTitle/>
                    <LoadingContent/>
                </Container>
            </Container>
        </div>
    )}

export default LoadingPageTemplate;