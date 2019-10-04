import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import EstadoSocio from "./campañas/EstadoSocio";
import CampanaCaso from "./campañas/CampanaCaso";
import GestionAt from "./campañas/GestionAt";
import Home from "./Home";
import Login from "./auth/Login";
import { USER_LOGEDED } from "../actions/types";

import store from "../store";
import { Provider } from "react-redux";

const token = sessionStorage.getItem("token");

if (token) {
  store.dispatch({ type: USER_LOGEDED });
}

export default class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          {token ? (
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/estadosocio"} component={EstadoSocio} />
              <Route exact path={"/campanacaso"} component={CampanaCaso} />
              <Route
                exact
                path={"/gestioncaso/Atrasados"}
                component={GestionAt}
              />
            </Switch>
          ) : (
            <Switch>
              {/* AUTH */}
              <Route exact path={"/login"} component={Login} />
              <Redirect to={"/login"} />
            </Switch>
          )}
        </BrowserRouter>
      </Provider>
    );
  }
}
