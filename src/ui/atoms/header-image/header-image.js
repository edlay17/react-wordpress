import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export const HeaderImage = (props) => {
    const useStyles = makeStyles((theme) => ({
        paper2: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundImage: `url(${props.imageSrc})`,
            backgroundSize: "cover",
            backgroundRepeat: "none",
            backgroundPosition: "center center",
            minHeight: "300px",
            borderRadius: "0",
            filter: "brightness(0.8)"
        },
    }));
    const classes = useStyles();

    return (
        <Paper className={classes.paper2}></Paper>
    )}

export default HeaderImage;