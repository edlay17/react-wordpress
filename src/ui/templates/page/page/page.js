import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs";

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: theme.spacing(3)
    },
    pageWrapper: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(4),
        fontSize: theme.spacing(2.7),
        lineHeight: theme.spacing(0.21),
        '& img': {
            maxWidth: "100%",
            height: "auto",
        },
        '& .is-style-rounded img': {
            borderRadius: "20%",
        },
        '& .is-style-twentytwentyone-image-frame img': {
            padding: "15px",
            border: "3px solid black",
        },
    }
}));

export const PageTemplate = (props) => {

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.pageWrapper}>
                <BreadcrumbsNavigation breadLinks={props.breadcrumbsLinks} currentPageName={props.pageTitle}/>
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