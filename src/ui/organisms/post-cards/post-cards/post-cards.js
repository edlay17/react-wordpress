import Grid from '@material-ui/core/Grid';
import PostCard from "../../../molecules/post-card/post-card/post-card";
import {makeStyles} from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },
    pagination: {
        "& .MuiPaginationItem-root": {
            backgroundColor: theme.palette.elements.main,
            color: theme.palette.elements.text,
            border: "none",
            "&:hover": {
                backgroundColor: theme.palette.elements.secondary,
            },
        },
        "& .Mui-selected": {
            backgroundColor: theme.palette.elements.secondary,
        }
    }
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
    const handleChange = (event, value) => {
        props.changePage(value);
    };
    return (
            <Grid container spacing={3} className={classes.root}>
                {postsItems}
                {props.pagesCount > 1 &&
                    <Grid item md={12}>
                        <Pagination className={classes.pagination} count={props.pagesCount} page={props.currentPage} variant="outlined" onChange={handleChange} showFirstButton showLastButton/>
                    </Grid>
                }
            </Grid>
    )}
export default PostCards;