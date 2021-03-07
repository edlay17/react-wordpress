import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs";
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: theme.spacing(3)
    },
    pageWrapper: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(4)
    },
    contentSkeleton: {
        height: theme.spacing(100),
    }
}));

export const LoadingPageTemplate = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.pageWrapper}>
                <BreadcrumbsNavigation breadLinks={props.breadcrumbsLinks} currentPageName={""}/>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                    <Typography align="center" variant="h3" component="h1">
                        <Skeleton/>
                    </Typography>
                    <Container maxWidth="md">
                        <div className={classes.content}>
                            <Skeleton animation="wave" variant="rect" className={classes.contentSkeleton}/>
                        </div>
                    </Container>
                </Container>
            </Container>
        </div>
    )}

export default LoadingPageTemplate;