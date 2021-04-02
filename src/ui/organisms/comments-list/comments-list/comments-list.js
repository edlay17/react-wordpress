import Comment from "../../../molecules/comment/comment/comment";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.primary.text,
        marginBottom: theme.spacing(2),
    }
}));

export const CommentsList = (props) => {
    const classes = useStyles();
    const comments = props.comments.map((comment) =>
            <Comment
                key={comment.id}
                author={comment.author}
                author_image={comment.author_image_url}
                date={comment.date}
                comment={comment.comment}
            />
    );
    return (
        <Container maxWidth="sm">
            <Typography align="left" variant="h5" component="p" className={classes.title}>
                Comments:
            </Typography>
            {comments}
        </Container>
    )}

export default CommentsList;