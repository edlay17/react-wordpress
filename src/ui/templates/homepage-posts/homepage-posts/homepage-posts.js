import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import PostCards from "../../../organisms/post-cards/post-cards/post-cards";
import PageTitle from "../../../atoms/page-title/page-title/page-title";

export const HomepagePostsTemplate = (props) => {

    return (
        <Grid container>
            { console.log("TEMPLATE --- " + props.currentPage) }
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <PageTitle title={props.pageName}/>
                    <PostCards postsData={props.postsData} pagesCount={props.pagesCount} currentPage={props.currentPage} changePage={props.changePage}/>
                </Container>
            </Grid>
        </Grid>
    )}

export default HomepagePostsTemplate;