import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import {
  llamadasIncoclusas,
  compromisoPago,
  noPaga,
  cuotaAlDia,
  notificacion,
  carteraRoja,
  socioFallecido,
  casosAbiertos,
  casosCerrados,
  casosConAccion,
  casosSinAccion
} from "../../../actions/estadisticaActions";
import BarrasAcostadas from "./graficos/werchow/BarrasAcostadas";
import Torta from "./graficos/werchow/Torta";
import Barras from "./graficos/werchow/Barras";

class Estadistica extends Component {
  state = {
    llamin: {},
    compago: {},
    nopaga: {},
    cuotadia: {},
    notif: {},
    carteraroja: {},
    sociofallecido: {},
    casosabiertos: {},
    casoscerrados: {},
    casosconaccion: {},
    casossinaccion: {}
  };

  componentDidMount() {
    const { user } = this.props.auth;

    let id = user.usuario;

    this.props.llamadasIncoclusas(id);
    this.props.compromisoPago(id);
    this.props.noPaga(id);
    this.props.cuotaAlDia(id);
    this.props.notificacion(id);
    this.props.carteraRoja(id);
    this.props.socioFallecido(id);
    this.props.casosAbiertos(id);
    this.props.casosCerrados(id);
    this.props.casosConAccion(id);
    this.props.casosSinAccion(id);

    setTimeout(() => {
      const {
        llamin,
        compago,
        nopaga,
        cuotadia,
        notif,
        carteraroja,
        sociofallecido,
        casosabiertos,
        casoscerrados,
        casosconaccion,
        casossinaccion
      } = this.props;

      this.setState({
        llamin: llamin[0][0].casos,
        compago: compago[0][0].casos,
        nopaga: nopaga[0][0].casos,
        cuotadia: cuotadia[0][0].casos,
        notif: notif[0][0].casos,
        carteraroja: carteraroja[0][0].casos,
        sociofallecido: sociofallecido[0][0].casos,
        casosabiertos: casosabiertos[0][0].casos,
        casoscerrados: casoscerrados[0][0].casos,
        casosconaccion: casosconaccion[0][0].casos,
        casossinaccion: casossinaccion[0][0].casos
      });
    }, 500);
  }

  render() {
    const {
      llamin,
      compago,
      nopaga,
      cuotadia,
      notif,
      carteraroja,
      sociofallecido,
      casosabiertos,
      casoscerrados,
      casosconaccion,
      casossinaccion
    } = this.state;

    return (
      <div className="container  mt-4">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-werchow-tab"
              data-toggle="tab"
              href="#nav-werchow"
              role="tab"
              aria-controls="nav-werchow"
              aria-selected="true"
            >
              Werchow
            </a>
            <a
              className="nav-item nav-link"
              id="nav-mutual-tab"
              data-toggle="tab"
              href="#nav-mutual"
              role="tab"
              aria-controls="nav-mutual"
              aria-selected="false"
            >
              Mutual
            </a>
            {/* <a
              className="nav-item nav-link"
              id="nav-algo-tab"
              data-toggle="tab"
              href="#nav-algo"
              role="tab"
              aria-controls="nav-algo"
              aria-selected="false"
            >
              Algo Mas
            </a> */}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-werchow"
            role="tabpanel"
            aria-labelledby="nav-werchow-tab"
          >
            <div className="row mt-4">
              <div className="col-md-6 border mt-2">
                <h2 className="mb-4">Cantidad de Casos segun acciones</h2>
                <BarrasAcostadas
                  llamin={llamin}
                  compago={compago}
                  nopaga={nopaga}
                  cuotadia={cuotadia}
                  notif={notif}
                  carteraroja={carteraroja}
                  sociofallecido={sociofallecido}
                />
              </div>

              <div className="col-md-6 border mt-2">
                <h2 className="mb-4">Casos Abiertos vs Cerrados</h2>
                <Torta
                  casosabiertos={casosabiertos}
                  casoscerrados={casoscerrados}
                />
              </div>

              <div className="col-md-6 border mt-2">
                <h2 className="mb-4">Casos Trabajados vs Sin Trabajar</h2>
                <Barras
                  casosconaccion={casosconaccion}
                  casossinaccion={casossinaccion}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-mutual"
            role="tabpanel"
            aria-labelledby="nav-mutual-tab"
          >
            En Proceso...
          </div>
          {/* <div
            className="tab-pane fade"
            id="nav-algo"
            role="tabpanel"
            aria-labelledby="nav-algo-tab"
          >
            ...
          </div> */}
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  llamin: state.estadistica.llamin,
  compago: state.estadistica.compago,
  nopaga: state.estadistica.nopaga,
  cuotadia: state.estadistica.cuotadia,
  notif: state.estadistica.notif,
  carteraroja: state.estadistica.carteraroja,
  sociofallecido: state.estadistica.sociofallecido,
  casosabiertos: state.estadistica.casosabiertos,
  casoscerrados: state.estadistica.casoscerrados,
  casosconaccion: state.estadistica.casosconaccion,
  casossinaccion: state.estadistica.casossinaccion,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  {
    llamadasIncoclusas,
    compromisoPago,
    noPaga,
    cuotaAlDia,
    notificacion,
    carteraRoja,
    socioFallecido,
    casosAbiertos,
    casosCerrados,
    casosConAccion,
    casosSinAccion
  }
)(Estadistica);
