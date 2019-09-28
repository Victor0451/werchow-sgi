import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import EstadoSocio from "./campañas/EstadoSocio";

import store from "../store";
import { Provider } from "react-redux";
import CampanaCaso from "./campañas/CampanaCaso";
import GestionAt from "./campañas/GestionAt";

import Home from "./Home";

export default class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/estadosocio"} component={EstadoSocio} />
            <Route exact path={"/campanacaso"} component={CampanaCaso} />
            <Route
              exact
              path={"/gestioncaso/Atrasados/:id"}
              component={GestionAt}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
