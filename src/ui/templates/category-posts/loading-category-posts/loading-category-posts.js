import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import PageTitle from "../../../atoms/page-title/page-title";
import LoadingPostCards from "../../../organisms/post-cards/loading-post-cards/loading-post-cards";

const breadcrumbsLinks = [
];

export const LoadingCategoryPostsTemplate = (props) => {
    return (
        <Grid container>
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <BreadcrumbsNavigation breadLinks={breadcrumbsLinks} currentPageName={props.pageName}/>
                    <PageTitle title={props.pageName}/>
                    <LoadingPostCards/>
                </Container>
            </Grid>
        </Grid>
    )}

export default LoadingCategoryPostsTemplate;