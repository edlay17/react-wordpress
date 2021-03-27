import Comment from "../../../molecules/comment/comment/comment";
import Container from "@material-ui/core/Container";

export const CommentsList = (props) => {

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
            {comments}
        </Container>
    )}

export default CommentsList;