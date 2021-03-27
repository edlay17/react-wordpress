import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        color: theme.palette.elements.text,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(10),
        fontSize: theme.spacing(2.7),
        lineHeight: theme.spacing(0.21),
        '& img': {
            maxWidth: "100%",
            height: "auto",
            filter: theme.type === "dark" && "brightness(20%)",
        },
        '& a': {
            color: theme.palette.links.main,
        },
        '& a:hover': {
            color: theme.palette.links.hover,
        },
        '& a:visited': {
            color: theme.palette.links.visited,
        },
        '& .is-style-rounded img': {
            borderRadius: "20%",
        },
        '& .is-style-twentytwentyone-image-frame img': {
            padding: "15px",
            border: "3px solid black",
            borderColor: theme.palette.secondary.main,
        },
    }
}));

export const Content = (props) => {

    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <div className={classes.content}>
                <div className="question-text" dangerouslySetInnerHTML={{__html: props.content}}/>
            </div>
        </Container>
    )}

export default Content;