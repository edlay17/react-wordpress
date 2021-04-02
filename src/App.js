// libs
import {MapRoutes} from "./lib/routes";
import { makeStyles } from '@material-ui/core/styles';

// ui
import './App.css';
import FooterTemplate from "./ui/organisms/footer/footer";

// models, features, pages
import withTheme from "./features/theme-options/with-theme-hok";
import {Header} from "./features/header/header";
import {routes} from "./pages/index";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(7.5),
        display: 'flex',
        flexDirection: 'column',
        minHeight: `100vh`,
        backgroundColor: theme.palette.primary.background,
    },
}));

function App(props) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Header/>
          <MapRoutes routes={routes} state={props.state}/>
          <FooterTemplate/>
      </div>
  );
}

export default withTheme(App);
