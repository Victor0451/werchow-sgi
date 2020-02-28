import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import EstadoSocio from "./campañas/estadoSocio/EstadoSocio";
import CampanaCaso from "./campañas/CampanaCaso";
import GestionAt from "./campañas/atrasados/GestionAt";
import Home from "./home/Home";
import Login from "./auth/Login";
import Edit from "./auth/Edit";
import Register from "./auth/Register";
import { USER_LOGEDED } from "../actions/types";
import GestionRec from "./campañas/recuperaciones/GestionRec";
import GestionRein from "./campañas/reincidencia/GestionRein";
import GestionBlan from "./campañas/blanqueo/GestionBlan";
import GestionRecordatorio from "./campañas/recordatorio/GestionRecordatorio";
import EstadoSocioM from "./campañas/estadoSocio/EstadoSocioM";
import GestionAtM from "./campañas/atrasados/GestionAtM";
import GestionRecM from "./campañas/recuperaciones/GestionRecM";
import GestionReinM from "./campañas/reincidencia/GestionReinM";
import GestionBlanM from "./campañas/blanqueo/GestionBlanM";
import NuevaNoticia from "./noticias/NuevaNoticia";
import Mora from "./mora/werchow/Mora";
import Moram from "./mora/mutual/Mora";
import Werchow from "./cobranza/Werchow";
import Mutual from "./cobranza/Mutual";
import GestionPoli from "./campañas/policia/GestionPoli";
import CajaSepelio from "./sepelio/caja/NuevaCajaSepelio";
import CajaGastos from "./sepelio/caja/CajaGastos";
import CajaIngresos from "./sepelio/caja/CajaIngresos";
import EditarGasto from "./sepelio/caja/EditarGasto";
import ListadoCajasSepelio from "./sepelio/caja/ListadoCajasSepelio";
import VerGasto from "./sepelio/caja/VerGasto";
import NotFound from "./NotFound";

import store from "../store";
import { Provider } from "react-redux";
import ImprimirCaja from "./sepelio/caja/ImprimirCaja";
import ConsultaVentas from "./ventas/ConsultaVentas";
import CerrarCampañas from "./campañas/CerrarCampañas";
import Resultados from "./campañas/Resultados";
import CerrarCampañasM from "./campañas/CerrarCampañasM";
import VolverALlamar from "./campañas/padron/VolverALlamar";
import Credixa from "./campañas/padron/Credixa";
import CompromisoPago from "./campañas/padron/CompromisoPago";

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
              {/* ARMADO DE CAMPAÑAS */}
              <Route exact path={"/estadosocioW"} component={EstadoSocio} />
              <Route exact path={"/estadosocioM"} component={EstadoSocioM} />
              {/* CAMPAÑAS */}
              <Route exact path={"/campanacaso"} component={CampanaCaso} />
              <Route
                exact
                path={"/gestioncaso/Atrasados"}
                component={GestionAt}
              />
              <Route
                exact
                path={"/gestioncaso/AtrasadosM"}
                component={GestionAtM}
              />
              <Route
                exact
                path={"/gestioncaso/Recuperacion"}
                component={GestionRec}
              />
              <Route
                exact
                path={"/gestioncaso/RecuperacionM"}
                component={GestionRecM}
              />
              <Route
                exact
                path={"/gestioncaso/Reincidencia"}
                component={GestionRein}
              />{" "}
              <Route
                exact
                path={"/gestioncaso/ReincidenciaM"}
                component={GestionReinM}
              />
              <Route
                exact
                path={"/gestioncaso/Blanqueo"}
                component={GestionBlan}
              />
              <Route
                exact
                path={"/gestioncaso/BlanqueoM"}
                component={GestionBlanM}
              />
              <Route
                exact
                path={"/gestioncaso/Policia"}
                component={GestionPoli}
              />
              <Route
                exact
                path={"/gestioncaso/Recordatorio"}
                component={GestionRecordatorio}
              />
              <Route
                exact
                path={"/campanas/cerrar"}
                component={CerrarCampañas}
              />
              <Route
                exact
                path={"/campanas/cerrarm"}
                component={CerrarCampañasM}
              />
              <Route
                exact
                path={"/campanas/resultados"}
                component={Resultados}
              />
              <Route
                exact
                path={"/campanas/volverallamar"}
                component={VolverALlamar}
              />
              <Route exact path={"/campanas/credixa"} component={Credixa} />
              <Route
                exact
                path={"/campanas/compromisopago"}
                component={CompromisoPago}
              />
              {/* NOTICIAS */}
              <Route exact path={"/noticia"} component={NuevaNoticia} />
              {/* MORA */}
              <Route exact path={"/mora/werchow"} component={Mora} />
              <Route exact path={"/mora/mutual"} component={Moram} />
              {/* COBRANZA */}
              <Route exact path={"/cobranza/werchow/"} component={Werchow} />
              <Route exact path={"/cobranza/mutual/"} component={Mutual} />
              {/* SEPELIO */}
              <Route
                exact
                path={"/sepelio/nuevacaja/"}
                component={CajaSepelio}
              />
              <Route
                exact
                path={"/sepelio/gastoscaja/:id"}
                component={CajaGastos}
              />
              <Route
                exact
                path={"/sepelio/ingresoscaja/:id"}
                component={CajaIngresos}
              />
              <Route
                exact
                path={"/sepelio/editargasto/:id"}
                component={EditarGasto}
              />
              <Route
                exact
                path={"/sepelio/listadocajas"}
                component={ListadoCajasSepelio}
              />
              <Route
                exact
                path={"/sepelio/vergasto/:id"}
                component={VerGasto}
              />{" "}
              <Route
                exact
                path={"/sepelio/imprimircaja/:id"}
                component={ImprimirCaja}
              />
              {/* VENTAS */}
              <Route
                exact
                path={"/ventas/consultaventas"}
                component={ConsultaVentas}
              />
              {/* PAGE NOT FOUND*/}
              <Route component={NotFound} />
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
