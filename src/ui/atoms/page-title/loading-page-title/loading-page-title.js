import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(0),
    },
    titleSkeleton: {
        backgroundColor: theme.palette.elements.secondary
    }
}));

export const LoadingPageTitle = (props) => {
    const classes = useStyles();

    return (
        <Typography variant="h5" component="h2" className={classes.title}>
            <Skeleton className={classes.titleSkeleton}/>
        </Typography>

    )}

export default LoadingPageTitle;