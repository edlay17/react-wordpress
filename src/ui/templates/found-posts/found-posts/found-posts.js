import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs/breadcrumbs";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import PostCards from "../../../organisms/post-cards/post-cards/post-cards";
import PageTitle from "../../../atoms/page-title/page-title/page-title";

const breadcrumbsLinks = [
];

export const FoundPostsTemplate = (props) => {
    return (
        <Grid container>
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <BreadcrumbsNavigation breadLinks={breadcrumbsLinks} currentPageName={props.pageName}/>
                    <PageTitle title={props.pageName}/>
                    <PostCards postsData={props.postsData} pagesCount={props.pagesCount} currentPage={props.currentPage} changePage={props.changePage}/>
                </Container>
            </Grid>
        </Grid>
    )}

export default FoundPostsTemplate;