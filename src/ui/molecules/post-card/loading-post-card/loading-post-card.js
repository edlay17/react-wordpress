import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.elements.main,
    },
    avatar: {
        height: theme.spacing(6.2),
        width: theme.spacing(6.2),
        backgroundColor: theme.palette.elements.secondary
    },
    tags: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
            backgroundColor: theme.palette.elements.secondary,
            color: theme.palette.elements.text
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
        height: theme.spacing(25),
        backgroundColor: theme.palette.elements.secondary
    },
    description: {
        height: theme.spacing(5),
        backgroundColor: theme.palette.elements.secondary
    },
    title: {
        backgroundColor: theme.palette.elements.secondary
    },
    header: {
        '& .MuiCardHeader-subheader span': {
            backgroundColor: theme.palette.elements.secondary,
        },
        '& .MuiCardHeader-title span': {
            backgroundColor: theme.palette.elements.secondary,
        }
    },
}));

export const LoadingPostCard = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    className={classes.header}
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
                        <Skeleton className={classes.title}/>
                    </Typography>
                    <Skeleton variant="rect" className={classes.description}/>
                    <div className={classes.tags}>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                        <Skeleton variant="rect" className={classes.chipsSkeleton}/>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default LoadingPostCard;