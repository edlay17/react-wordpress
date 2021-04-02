// libs
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

// ui
import BreadcrumbsNavigation from "../../../ui/molecules/breadcrumbs/breadcrumbs/breadcrumbs";
import SinglePageTitle from "../../../ui/atoms/single-page-title/single-page-title/single-page-title";
import Content from "../../../ui/atoms/content/content/content";
import CommentsList from "../../../ui/organisms/comments-list/comments-list/comments-list";

// models, features
import AddCommentForm from "./add-comment-form";


const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(7)
    },
    pageWrapper: {
        marginTop: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(10),
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

export const PostTemplate = (props) => {

    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.pageWrapper}>
                <BreadcrumbsNavigation breadLinks={props.breadcrumbsLinks} currentPageName={props.pageTitle}/>
                <Container maxWidth="lg" className={classes.contentWrapper}>
                    <SinglePageTitle title={props.pageTitle}/>
                    <Content content={props.pageContent}/>
                    <CommentsList comments={props.comments}/>
                    <AddCommentForm/>
                </Container>
            </Container>
        </div>
    )}

export default PostTemplate;