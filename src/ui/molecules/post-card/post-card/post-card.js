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
import Chip from "@material-ui/core/Chip";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 480,
    },
    image: {
        filter: "grayscale(30%)",
        "&:hover": {
            //filter: "grayscale(0%)"
        }
    },
    avatar: {
        backgroundColor: "darkblue"
    },
    tags: {
        marginTop: theme.spacing(2.5),
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
                        <Avatar aria-label="recipe" src={props.author_image} className={classes.avatar}>
                            E
                        </Avatar>
                    }
                    title={props.author}
                    subheader={props.date}
                />
                <CardMedia
                    component="img"
                    alt={`${props.title} image`}
                    height="200"
                    image={(props.image_url === null) ? "https://ichip.ru/images/cache/2019/7/29/fit_930_519_false_crop_960_600_0_0_q90_4172_6112aacf39.jpeg" : props.image_url}
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
                <Button component={NavLink} to={`/posts/${props.slug}`} size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default PostCard;