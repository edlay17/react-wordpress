// libs
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import CircularProgress from "@material-ui/core/CircularProgress";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

// models
import {addComment} from "../model/post-reducer";

const useStyles = makeStyles((theme) => ({
    title: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    formCard: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        backgroundColor: theme.palette.elements.main,
        color: theme.palette.elements.text
    },
    form: {
        '& .MuiTextField-root': {
            '& .MuiInputLabel-root': {
                color: theme.palette.elements.text
            },
            '& .MuiInputBase-formControl': {
                color: theme.palette.elements.text,
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.elements.secondaryText,
            },
            '& .Mui-error .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.error.dark,
            }
        },
    },
    input1: {
        marginRight: theme.spacing(1),
    },
    input2: {
        marginRight: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.buttons.main,
        color: theme.palette.buttons.text,
        '&:hover': {
            backgroundColor: theme.palette.buttons.hover,
            color: theme.palette.buttons.hoverText,
        }
    },
    progress: {
        color: theme.palette.secondary.main,
    }
}));

export const AddCommentForm = (props) => {
    const [message, changeMessage] = useState({isShow: false, message: ""});
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.post.commentsIsFetching);
    const classes = useStyles();
    const {register, handleSubmit, setError, errors, setValue } = useForm({
        mode: "onBlur"
    });
    const done = () => {
        setValue('author_email', '');
        setValue('author_name', '');
        setValue('content', '');
        changeMessage({
            isShow: true,
            message: "Done!"
        })
    }
    const onSubmit = (data) => {
        dispatch(addComment(data, setError, done));
    }

    return (
        <Container maxWidth="sm">
            <Card className={classes.formCard}>
                <Typography variant="h5" className={classes.title}>
                    add comment
                </Typography>
                {isFetching && <CircularProgress className={classes.progress}/>}
                <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        error={errors.author_email}
                        inputRef={register({required: true, pattern: /\S+@\S+\.\S+/})}
                        name="author_email"
                        className={classes.input1}
                        margin="normal"
                        id="outlined-textarea"
                        label="E-mail"
                        placeholder="vasya@mail.ru"
                        variant="outlined"
                    />
                    <TextField
                        error={errors.author_name}
                        inputRef={register({required: true, maxLength: 15})}
                        name="author_name"
                        className={classes.input2}
                        margin="normal"
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Vasily"
                        variant="outlined"
                    />
                    <TextField
                        error={errors.content}
                        inputRef={register({required: true, maxLength: 250})}
                        name="content"
                        fullWidth={true}
                        id="outlined-multiline-static"
                        label="Comment (max 250sym)"
                        placeholder="Hello world! Great post"
                        multiline
                        rows={5}
                        variant="outlined"
                    />
                    {errors.content && <p>{errors.content.message}</p>}
                    {message.isShow && <p>{message.message}</p>}
                    <Button
                        name="submit"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<RecordVoiceOverIcon />}
                        onClick={() => { changeMessage({isShow: false, message: ""}) }}
                    >
                        add comment
                    </Button>
                </form>
            </Card>
        </Container>
    )}

export default AddCommentForm;