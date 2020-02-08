import React, { Component } from "react";
import OperadorSelect from "react-select";
import OperadorMSelect from "react-select";
import toastr from "../../utils/toastr";

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
} from "../../actions/estadisticaActions";

import {
  llamadasIncoclusasM,
  compromisoPagoM,
  noPagaM,
  cuotaAlDiaM,
  notificacionM,
  carteraRojaM,
  socioFallecidoM,
  casosAbiertosM,
  casosCerradosM,
  casosConAccionM,
  casosSinAccionM
} from "../../actions/estadisticaMActions";

import BarrasAcostadas from "./estadistica/graficos/werchow/BarrasAcostadas";
import Torta from "./estadistica/graficos/werchow/Torta";
import Barras from "./estadistica/graficos/werchow/Barras";

import { operadorescamp } from "../layouts/Arrays/arrays";

class Reportes extends Component {
  state = {
    llamin: "",
    compago: "",
    nopaga: "",
    cuotadia: "",
    notif: "",
    carteraroja: "",
    sociofallecido: "",
    casosabiertos: "",
    casoscerrados: "",
    casosconaccion: "",
    casossinaccion: "",
    llaminM: "",
    compagoM: "",
    nopagaM: "",
    cuotadiaM: "",
    notifM: "",
    carterarojaM: "",
    sociofallecidoM: "",
    casosabiertosM: "",
    casoscerradosM: "",
    casosconaccionM: "",
    casossinaccionM: "",
    operador: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  generarEstadistica = () => {
    const { operador } = this.state;

    if (operador === "") {
      toastr.warning("Debes seleccionar un operador!!", "ATENCION");
    } else {
      this.props.llamadasIncoclusas(operador);
      this.props.compromisoPago(operador);
      this.props.noPaga(operador);
      this.props.cuotaAlDia(operador);
      this.props.notificacion(operador);
      this.props.carteraRoja(operador);
      this.props.socioFallecido(operador);
      this.props.casosAbiertos(operador);
      this.props.casosCerrados(operador);
      this.props.casosConAccion(operador);
      this.props.casosSinAccion(operador);

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

        console.log(this.state.llamin);
      }, 500);
    }
  };

  generarEstadisticaM = () => {
    const { operador } = this.state;

    if (operador === "") {
      toastr.warning("Debes seleccionar un operador!!", "ATENCION");
    } else {
      this.props.llamadasIncoclusasM(operador);
      this.props.compromisoPagoM(operador);
      this.props.noPagaM(operador);
      this.props.cuotaAlDiaM(operador);
      this.props.notificacionM(operador);
      this.props.carteraRojaM(operador);
      this.props.socioFallecidoM(operador);
      this.props.casosAbiertosM(operador);
      this.props.casosCerradosM(operador);
      this.props.casosConAccionM(operador);
      this.props.casosSinAccionM(operador);

      setTimeout(() => {
        const {
          llaminM,
          compagoM,
          nopagaM,
          cuotadiaM,
          notifM,
          carterarojaM,
          sociofallecidoM,
          casosabiertosM,
          casoscerradosM,
          casosconaccionM,
          casossinaccionM
        } = this.props;

        this.setState({
          llaminM: llaminM[0][0].casos,
          compagoM: compagoM[0][0].casos,
          nopagaM: nopagaM[0][0].casos,
          cuotadiaM: cuotadiaM[0][0].casos,
          notifM: notifM[0][0].casos,
          carterarojaM: carterarojaM[0][0].casos,
          sociofallecidoM: sociofallecidoM[0][0].casos,
          casosabiertosM: casosabiertosM[0][0].casos,
          casoscerradosM: casoscerradosM[0][0].casos,
          casosconaccionM: casosconaccionM[0][0].casos,
          casossinaccionM: casossinaccionM[0][0].casos
        });
      }, 500);
    }
  };

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
      casossinaccion,
      llaminM,
      compagoM,
      nopagaM,
      cuotadiaM,
      notifM,
      carterarojaM,
      sociofallecidoM,
      casosabiertosM,
      casoscerradosM,
      casosconaccionM,
      casossinaccionM
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
            <h2 className="mt-4 mb-4">
              <strong>
                <u>Estadisticas de campañas Werchow</u>
              </strong>
            </h2>
            <div className="row mt-4 mb-4">
              <div className="form-group col-md-6 mt-4">
                <OperadorSelect
                  options={operadorescamp}
                  placeholder={"Operador"}
                  onChange={value => this.handleChange(value, "operador")}
                />
              </div>
              <div className="form-group col-md-6 mt-4">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.generarEstadistica}
                >
                  Buscar
                </button>
              </div>
            </div>

            {llamin.length === 0 ? (
              <div className="mt-4 alert alert-info text-center">
                <strong>
                  SELECCIONA UN OPERADOR PARA VER SUS ESTADISTICAS
                </strong>
              </div>
            ) : (
              <div>
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

                  <div className="col-md-6 border mt-2">
                    <h2 className="mb-4">Resultados</h2>
                    <div className="row">
                      {llamin.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>LLamadas inconclusas</u>: {llamin}
                        </strong>
                      )}

                      {compago.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Compromiso de Pago</u>: {compago}
                        </strong>
                      )}

                      {nopaga.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>No Paga</u>: {nopaga}
                        </strong>
                      )}

                      {cuotadia.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Cuota al Dia</u>: {cuotadia}
                        </strong>
                      )}

                      {notif.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Notificaciones</u>: {notif}
                        </strong>
                      )}

                      {carteraroja.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Cartera Roja</u>: {carteraroja}
                        </strong>
                      )}

                      {sociofallecido.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Socio Fallecido</u>: {sociofallecido}
                        </strong>
                      )}

                      {casosabiertos.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Abiertos</u>: {casosabiertos}
                        </strong>
                      )}

                      {casoscerrados.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Cerrados</u>: {casoscerrados}
                        </strong>
                      )}

                      {casosconaccion.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Trabajados</u>: {casosconaccion}
                        </strong>
                      )}

                      {casossinaccion.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Sin Trabajar</u>: {casossinaccion}
                        </strong>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="nav-mutual"
            role="tabpanel"
            aria-labelledby="nav-mutual-tab"
          >
            <h2 className="mt-4 mb-4">
              <strong>
                <u>Estadisticas de campañas Mutual</u>
              </strong>
            </h2>
            <div className="row mt-4 mb-4">
              <div className="form-group col-md-6 mt-4">
                <OperadorMSelect
                  options={operadorescamp}
                  placeholder={"Operador"}
                  onChange={value => this.handleChange(value, "operador")}
                />
              </div>
              <div className="form-group col-md-6 mt-4">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.generarEstadisticaM}
                >
                  Buscar
                </button>
              </div>
            </div>

            {llaminM.length === 0 ? (
              <div className="mt-4 alert alert-info text-center">
                <strong>
                  SELECCIONA UN OPERADOR PARA VER SUS ESTADISTICAS
                </strong>
              </div>
            ) : (
              <div>
                <div className="row mt-4">
                  <div className="col-md-6 border mt-2">
                    <h2 className="mb-4">Cantidad de Casos segun acciones</h2>
                    <BarrasAcostadas
                      llamin={llaminM}
                      compago={compagoM}
                      nopaga={nopagaM}
                      cuotadia={cuotadiaM}
                      notif={notifM}
                      carteraroja={carterarojaM}
                      sociofallecido={sociofallecidoM}
                    />
                  </div>

                  <div className="col-md-6 border mt-2">
                    <h2 className="mb-4">Casos Abiertos vs Cerrados</h2>
                    <Torta
                      casosabiertos={casosabiertosM}
                      casoscerrados={casoscerradosM}
                    />
                  </div>

                  <div className="col-md-6 border mt-2">
                    <h2 className="mb-4">Casos Trabajados vs Sin Trabajar</h2>
                    <Barras
                      casosconaccion={casosconaccionM}
                      casossinaccion={casossinaccionM}
                    />
                  </div>

                  <div className="col-md-6 border mt-2">
                    <h2 className="mb-4">Resultados</h2>
                    <div className="row">
                      {llaminM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>LLamadas inconclusas</u>: {llaminM}
                        </strong>
                      )}

                      {compagoM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Compromiso de Pago</u>: {compagoM}
                        </strong>
                      )}

                      {nopagaM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>No Paga</u>: {nopagaM}
                        </strong>
                      )}

                      {cuotadiaM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Cuota al Dia</u>: {cuotadiaM}
                        </strong>
                      )}

                      {notifM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Notificaciones</u>: {notifM}
                        </strong>
                      )}

                      {carterarojaM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Cartera Roja</u>: {carterarojaM}
                        </strong>
                      )}

                      {sociofallecidoM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Socio Fallecido</u>: {sociofallecidoM}
                        </strong>
                      )}

                      {casosabiertosM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Abiertos</u>: {casosabiertosM}
                        </strong>
                      )}

                      {casoscerradosM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Cerrados</u>: {casoscerradosM}
                        </strong>
                      )}

                      {casosconaccionM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Trabajados</u>: {casosconaccionM}
                        </strong>
                      )}

                      {casossinaccionM.length === 0 ? null : (
                        <strong className="col-md-6 mt-2">
                          <u>Casos Sin Trabajar</u>: {casossinaccionM}
                        </strong>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
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
  llaminM: state.estadistica.llamin,
  compagoM: state.estadistica.compago,
  nopagaM: state.estadistica.nopaga,
  cuotadiaM: state.estadistica.cuotadia,
  notifM: state.estadistica.notif,
  carterarojaM: state.estadistica.carteraroja,
  sociofallecidoM: state.estadistica.sociofallecido,
  casosabiertosM: state.estadistica.casosabiertos,
  casoscerradosM: state.estadistica.casoscerrados,
  casosconaccionM: state.estadistica.casosconaccion,
  casossinaccionM: state.estadistica.casossinaccion,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {
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
  casosSinAccion,
  llamadasIncoclusasM,
  compromisoPagoM,
  noPagaM,
  cuotaAlDiaM,
  notificacionM,
  carteraRojaM,
  socioFallecidoM,
  casosAbiertosM,
  casosCerradosM,
  casosConAccionM,
  casosSinAccionM
})(Reportes);
