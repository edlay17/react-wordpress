import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import PageTitle from "../../../atoms/page-title/page-title/page-title";
import LoadingPostCards from "../../../organisms/post-cards/loading-post-cards/loading-post-cards";
import LoadingPageTitle from "../../../atoms/page-title/loading-page-title/loading-page-title";

export const LoadingHomepagePostsTemplate = (props) => {

    return (
        <Grid container>
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <LoadingPageTitle/>
                    <LoadingPostCards/>
                </Container>
            </Grid>
        </Grid>
    )}

export default LoadingHomepagePostsTemplate;