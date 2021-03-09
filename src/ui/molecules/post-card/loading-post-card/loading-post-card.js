import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: theme.spacing(60),
    },
    avatar: {
        height: theme.spacing(6.2),
        width: theme.spacing(6.2),
    },
    tags: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chipsSkeleton: {
        borderRadius: theme.spacing(2),
        width: theme.spacing(7),
        height: theme.spacing(3)
    },
    button1: {
        width: theme.spacing(7),
        height: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    button2: {
        width: theme.spacing(9),
        height: theme.spacing(3),
        marginBottom: theme.spacing(1)
    },
    image: {
        height: theme.spacing(25)
    },
    description: {
        height: theme.spacing(5)
    }
}));

export const LoadingPostCard = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Skeleton variant="circle" className={classes.avatar}/>
                    }
                    title={
                        <Skeleton/>
                    }
                    subheader={
                        <Skeleton/>
                    }
                />
                <Skeleton
                    variant="rect"
                    animation="wave"
                    className={classes.image}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        <Skeleton/>
                    </Typography>
                    <Skeleton variant="rect" className={classes.description}/>
                    <div className={classes.tags}>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Skeleton variant="rect" className={classes.button2}/>
            </CardActions>
        </Card>
    )
}
export default LoadingPostCard;