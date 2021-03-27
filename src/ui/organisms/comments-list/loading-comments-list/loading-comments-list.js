import LoadingComment from "../../../molecules/comment/loading-comment/loading-comment";
import Container from "@material-ui/core/Container";

export const LoadingCommentsList = (props) => {

    let skeletonItems = [];
    for (let i = 0; i < 3; i++){
        skeletonItems.push(
            <LoadingComment/>
        )
    }

    return (
        <Container maxWidth="sm">
            {skeletonItems}
        </Container>
    )}

export default LoadingCommentsList;