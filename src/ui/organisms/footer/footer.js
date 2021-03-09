import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export const FooterTemplate = (props) => {
    const classes = useStyles();

    return(
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="body1">It's my react-wordpress blog!</Typography>
                    <Link target="_blank" color="inherit" href="https://github.com/edlay17/react-wordpress">
                        github.com/edlay17
                    </Link>
                    <Copyright />
                </Container>
            </footer>
    )
}

export default FooterTemplate;