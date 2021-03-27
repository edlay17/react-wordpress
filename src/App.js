import './App.css';
import {routes} from "./pages/index";
import Header from "./features/header/header";
import {MapRoutes} from "./lib/routes";
import FooterTemplate from "./ui/organisms/footer/footer";

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import withTheme from "./features/theme-options/with-theme-hok";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
