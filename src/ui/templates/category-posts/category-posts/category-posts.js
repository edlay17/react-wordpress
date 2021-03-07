import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import PostCard from "../../../molecules/post-card/post-card";
import Typography from "@material-ui/core/Typography";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs";
import HeaderImage from "../../../atoms/header-image/header-image";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerGrid: {
        marginBottom: theme.spacing(3)
    },
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    }
}));

const breadcrumbsLinks = [
];

export const CategoryPostsTemplate = (props) => {
    const classes = useStyles();

    const postsItems = props.postsData.map((post) =>
        <Grid item md={4} sm={12}>
            <PostCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                author={post.author}
                author_image={post.author_image_url}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
                image_url={post.image_url}
            />
        </Grid>
    );
    return (
        <Grid container>
            <Grid item xs={12} className={classes.headerGrid}>
                <HeaderImage imageSrc={props.headerImage}/>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <div>
                        <BreadcrumbsNavigation breadLinks={breadcrumbsLinks} currentPageName={props.pageName}/>
                    </div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {props.pageName}
                    </Typography>
                    <Grid container spacing={3}>
                        {postsItems}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )}

export default CategoryPostsTemplate;