import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BreadcrumbsNavigation from "../../../molecules/breadcrumbs/breadcrumbs";
import LoadingPostCard from "../../../molecules/loading-post-card/loading-post-card";
import HeaderImage from "../../../atoms/header-image/header-image";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    headerGrid: {
        marginBottom: theme.spacing(3)
    },
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    }
}));

const breadcrumbsLinks = [
];

let skeletonItems = [];
for (let i = 0; i < 6; i++){
    skeletonItems.push(
        <Grid item md={4} sm={12}>
            <LoadingPostCard/>
        </Grid>
    )
}

export const LoadingCategoryPostsTemplate = (props) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} className={classes.headerGrid}>
                <HeaderImage imageSrc={props.headerImage}/>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <div className={classes.root2}>
                        <BreadcrumbsNavigation breadLinks={breadcrumbsLinks} currentPageName={props.pageName}/>
                    </div>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {props.pageName}
                    </Typography>
                    <Grid container spacing={3}>
                        {skeletonItems}
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )}

export default LoadingCategoryPostsTemplate;