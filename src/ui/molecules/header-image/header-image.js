import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import HeaderImage from "../../atoms/header-image/header-image";

const useStyles = makeStyles((theme) => ({
    headerGrid: {
        marginBottom: theme.spacing(3)
    },
}));

export const HeaderImageBlock = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.headerGrid}>
            <HeaderImage imageSrc={props.image}/>
        </Grid>
    )}

export default HeaderImageBlock;