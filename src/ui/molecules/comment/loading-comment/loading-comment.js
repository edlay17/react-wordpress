import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.elements.main
    },
    avatar: {
        height: theme.spacing(6.2),
        width: theme.spacing(6.2),
        backgroundColor: theme.palette.elements.secondary,
    },
    content: {
        paddingTop: theme.spacing(0),
    },
    description: {
        height: theme.spacing(5),
        backgroundColor: theme.palette.elements.secondary,
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

export const LoadingComment = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
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
            <CardContent className={classes.content}>
                <Skeleton variant="rect" className={classes.description}/>
            </CardContent>
        </Card>
    )
}

export default LoadingComment;