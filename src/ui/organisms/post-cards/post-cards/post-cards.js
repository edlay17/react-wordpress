import Grid from '@material-ui/core/Grid';
import PostCard from "../../../molecules/post-card/post-card/post-card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },
}));

export const PostCards = (props) => {

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
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            {postsItems}
        </Grid>
    )}

export default PostCards;