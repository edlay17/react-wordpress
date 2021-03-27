import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    contentSkeleton: {
        height: theme.spacing(70),
        backgroundColor: theme.palette.elements.secondary
    },
    content: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(10)
    },
}));

export const LoadingContent = (props) => {

    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className={classes.content}>
                <Skeleton animation="wave" variant="rect" className={classes.contentSkeleton}/>
            </div>
        </Container>
    )}

export default LoadingContent;