import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(0),
    },
    titleSkeleton: {
        backgroundColor: theme.palette.elements.secondary
    }
}));

export const LoadingSinglePageTitle = (props) => {
    const classes = useStyles();

    return (
        <Typography align="center" variant="h3" component="h1" className={classes.title}>
            <Skeleton className={classes.titleSkeleton}/>
        </Typography>
    )}

export default LoadingSinglePageTitle;