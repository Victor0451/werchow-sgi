import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import EstadoSocio from "./campañas/estadoSocio/EstadoSocio";
import CampanaCaso from "./campañas/CampanaCaso";
import GestionAt from "./campañas/atrasados/GestionAt";
import Home from "./Home";
import Login from "./auth/Login";
import Edit from "./auth/Edit";
import Register from "./auth/Register";
import { USER_LOGEDED } from "../actions/types";
import GestionRec from "./campañas/recuperaciones/GestionRec";
import GestionRein from "./campañas/reincidencia/GestionRein";
import GestionBlan from "./campañas/blanqueo/GestionBlan";
import Notificacion from "./campañas/Notificacion";

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
              
              
              {/* AUTH */}
              <Route exact path={"/register"} component={Register} />
              <Route exact path={"/edit"} component={Edit} />
              
              
              {/* CAMPAÑAS */}
              <Route exact path={"/estadosocio"} component={EstadoSocio} />
              <Route exact path={"/campanacaso"} component={CampanaCaso} />
              <Route
                exact
                path={"/gestioncaso/Atrasados"}
                component={GestionAt}
              />
              <Route
                exact
                path={"/gestioncaso/Recuperacion"}
                component={GestionRec}
              />
              <Route
                exact
                path={"/gestioncaso/Reincidencia"}
                component={GestionRein}
              />
              <Route
                exact
                path={"/gestioncaso/Blanqueo"}
                component={GestionBlan}
              />{" "}
              <Route exact path={"/notificacion"} component={Notificacion} />
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
