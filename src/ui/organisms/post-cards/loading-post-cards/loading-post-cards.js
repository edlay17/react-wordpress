import Grid from '@material-ui/core/Grid';
import LoadingPostCard from "../../../molecules/post-card/loading-post-card/loading-post-card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },
}));

let skeletonItems = [];
for (let i = 0; i < 6; i++){
    skeletonItems.push(
        <Grid item md={4} sm={12}>
            <LoadingPostCard/>
        </Grid>
    )
}

export const LoadingPostCards = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            {skeletonItems}
        </Grid>
    )}

export default LoadingPostCards;