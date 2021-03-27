import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.elements.main
    },
    avatar: {
        backgroundColor: theme.palette.primary.main
    },
    content: {
        paddingTop: theme.spacing(0),
    },
    header: {
        color: theme.palette.elements.text,
        '& .MuiCardHeader-subheader': {
            color: theme.palette.elements.secondaryText,
        }
    },
    comment: {
        color: theme.palette.elements.text,
    }
}));

export const Comment = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar aria-label="recipe" src={props.author_image} className={classes.avatar}>
                            E
                        </Avatar>
                    }
                    title={props.author}
                    subheader={props.date}
                />
                <CardContent className={classes.content}>
                    <Typography className={classes.comment} variant="body2" color="textSecondary" component="p">
                        {props.comment}
                    </Typography>
                </CardContent>
        </Card>
    )
}

export default Comment;