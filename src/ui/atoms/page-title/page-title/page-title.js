import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(0),
        color: theme.palette.primary.text,
    }
}));

export const PageTitle = (props) => {
    const classes = useStyles();

    return (
        <Typography variant="h5" component="h2" className={classes.title}>
            {props.title}
        </Typography>

    )}

export default PageTitle;