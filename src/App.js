import './App.css';
import {routes} from "./pages/index";
import Header from "./features/header/index";
import {MapRoutes} from "./lib/routes";
import React from "react";

function App(props) {

  return (
      <>
        <Header/>
        <MapRoutes routes={routes} state={props.store.getState()}/>
      </>
  );
}

export default App;
