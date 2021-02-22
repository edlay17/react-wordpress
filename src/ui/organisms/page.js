import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import BreadcrumbsNavigation from "../../ui/molecules/breadcrumbs";
import Skeleton from '@material-ui/lab/Skeleton'


const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: theme.spacing(3)
    },
    breadcrumbs: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    pageWrapper: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(4)
    }
}));

export const PageTemplate = (props) => {

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.pageWrapper}>
                <div className={classes.breadcrumbs}>
                    <BreadcrumbsNavigation breadLinks={props.breadcrumbsLinks} currentPageName={props.pageTitle}/>
                </div>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                    <Typography align="center" variant="h3" component="h1">
                        {props.pageTitle}
                    </Typography>
                    <Container maxWidth="md">
                        <div className={classes.content}>
                            <div className="question-text" dangerouslySetInnerHTML={{__html: props.pageContent}}/>
                        </div>
                    </Container>
                </Container>
            </Container>
        </div>
    )}

export default PageTemplate;