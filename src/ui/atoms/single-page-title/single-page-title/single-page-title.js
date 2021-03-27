import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.primary.text,
    }
}));


export const SinglePageTitle = (props) => {
    const classes = useStyles();

    return (
        <Typography align="center" variant="h3" component="h1" className={classes.title}>
            {props.title}
        </Typography>
    )}

export default SinglePageTitle;