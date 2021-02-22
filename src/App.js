import './App.css';
import {links, routes} from "./pages/index";
import HeaderTemplate from "./ui/organisms/header";
import store from "./redux/store";
import {MapRoutes} from "./lib/routes";
import React from "react";

function App(props) {

  return (
      <>
        <HeaderTemplate menuLinks={links}/>
        <MapRoutes routes={routes} state={store.getState()}/>
      </>
  );
}

export default App;
