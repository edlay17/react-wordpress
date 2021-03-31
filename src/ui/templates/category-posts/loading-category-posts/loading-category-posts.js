import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import LoadingBreadcrumbsNavigation from "../../../molecules/breadcrumbs/loading-breadcrumbs/loading-breadcrumbs";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import LoadingPostCards from "../../../organisms/post-cards/loading-post-cards/loading-post-cards";
import LoadingPageTitle from "../../../atoms/page-title/loading-page-title/loading-page-title";

export const LoadingCategoryPostsTemplate = (props) => {
    return (
        <Grid container>
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <LoadingBreadcrumbsNavigation/>
                    <LoadingPageTitle/>
                    <LoadingPostCards count={props.postsPerPage}/>
                </Container>
            </Grid>
        </Grid>
    )}

export default LoadingCategoryPostsTemplate;