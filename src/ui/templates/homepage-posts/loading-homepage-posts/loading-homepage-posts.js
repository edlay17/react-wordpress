import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import HeaderImageBlock from "../../../molecules/header-image/header-image";
import PageTitle from "../../../atoms/page-title/page-title";
import LoadingPostCards from "../../../organisms/post-cards/loading-post-cards/loading-post-cards";

export const LoadingHomepagePostsTemplate = (props) => {

    return (
        <Grid container>
            <HeaderImageBlock image={props.headerImage}/>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <PageTitle title={props.pageName}/>
                    <LoadingPostCards/>
                </Container>
            </Grid>
        </Grid>
    )}

export default LoadingHomepagePostsTemplate;