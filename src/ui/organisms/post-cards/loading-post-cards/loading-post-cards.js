import Grid from '@material-ui/core/Grid';
import LoadingPostCard from "../../../molecules/post-card/loading-post-card/loading-post-card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(4),
    },
}));

export const LoadingPostCards = (props) => {
    const classes = useStyles();
    let skeletonItems = [];
    let count = 6;
    if(props.count)count=props.count;
    for (let i = 0; i < count; i++){
        skeletonItems.push(
            <Grid item md={4} sm={6} xs={12}>
                <LoadingPostCard/>
            </Grid>
        )
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            {skeletonItems}
        </Grid>
    )}

export default LoadingPostCards;