import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import PostCard from "../../ui/molecules/postCard";
import Typography from "@material-ui/core/Typography";
import BreadcrumbsNavigation from "../../ui/molecules/breadcrumbs";
import LoadingPostCard from "../molecules/loadingPostCard";
import MenuLink from "../atoms/menuLink";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: "url(https://wallpaperaccess.com/full/798908.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        backgroundPosition: "center center",
        minHeight: "300px",
        borderRadius: "0",
        filter: "grayscale(20%)",
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
                title={post.title}
                author={post.author}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
            />
        </Grid>
    );

    return (
        <Grid container>
            <Grid item xs={12} className={classes.headerGrid}>
                <Paper className={classes.paper2}></Paper>
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