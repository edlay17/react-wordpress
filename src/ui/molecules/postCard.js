import {makeStyles} from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 480,
    },
    image: {
        filter: "grayscale(90%)",
        "&:hover": {
            filter: "grayscale(0%)"
        }
    },
    avatar: {
        backgroundColor: "darkblue"
    },
    tags: {
        marginTop: "20px",
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}));

export const PostCard = (props) => {
    const classes = useStyles();
    const tags = props.tags.map((tag) =>
        <Chip size="small" label={tag} />
    );

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            E
                        </Avatar>
                    }
                    title={props.author}
                    subheader={props.date}
                />
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://s3.amazonaws.com/www-inside-design/uploads/2019/05/portfoliofeature.png"
                    title="Contemplative Reptile"
                    className={classes.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.excerpt}
                    </Typography>
                    <div className={classes.tags}>
                        {tags}
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default PostCard;