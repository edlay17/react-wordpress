import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useCopyrightStyles = makeStyles((theme) => ({
    copyright: {
        color: "white",
    }
}));

function Copyright() {
    const classes = useCopyrightStyles();

    return (
        <Typography variant="body2" className={classes.copyright}>
            {'Copyright © '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useFooterStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.main
    },
    link: {
        color: "white",
    }
}));
//color: theme.palette.footer.linkcolor: theme.palette.footer.main
export const FooterTemplate = (props) => {
    const classes = useFooterStyles();

    return(
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Link className={classes.link} target="_blank" color="inherit" href="https://github.com/edlay17/react-wordpress">
                        github.com/edlay17
                    </Link>
                    <Copyright />
                </Container>
            </footer>
    )
}

export default FooterTemplate;