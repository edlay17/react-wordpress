import './App.css';
import {routes} from "./pages/index";
import Header from "./features/header/header";
import {MapRoutes} from "./lib/routes";
import React from "react";
import FooterTemplate from "./ui/organisms/footer/footer";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));

function App(props) {
    const classes = useStyles();

  return (
      <div className={classes.root}>
        <Header/>
        <MapRoutes routes={routes} state={props.store.getState()}/>
        <FooterTemplate/>
      </div>
  );
}

export default App;
