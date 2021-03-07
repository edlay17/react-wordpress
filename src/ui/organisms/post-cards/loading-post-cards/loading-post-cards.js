import Grid from '@material-ui/core/Grid';
import LoadingPostCard from "../../../molecules/post-card/loading-post-card/loading-post-card";

let skeletonItems = [];
for (let i = 0; i < 6; i++){
    skeletonItems.push(
        <Grid item md={4} sm={12}>
            <LoadingPostCard/>
        </Grid>
    )
}

export const LoadingPostCards = (props) => {
    return (
        <Grid container spacing={3}>
            {skeletonItems}
        </Grid>
    )}

export default LoadingPostCards;