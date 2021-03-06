import React, { Component } from "react";

import ListadoGestionCaso from "../../layouts/Table/Table";
import ListadoGestionCasoNoti from "../../layouts/Table/Table2";
import ListadoCasosTrabajados from "../../layouts/Table/Table4";
// import ArchCamp from "../../layouts/Table/Table5";

import { connect } from "react-redux";
import {
  campanaOperador,
  campanaOperadorNotiAt,
  campanaArchivo,
  gestionCaso,
  updateAccion,
  campanaOperadorTrab,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
} from "../../../actions/campanasActions";

class GestionAt extends Component {
  state = {
    campop: [],
    campoptrab: [],
    campopnoti: [],
    campophist: {},
    caso: {},
    accion: "",
    gestion: {},
    getrec: {},
    getdeuda: {},
    nuevaaccion: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  componentDidMount() {
    const { user } = this.props.auth;

    let id = user.usuario;

    this.props.campanaOperador(id);
    this.props.campanaOperadorTrab(id);
    this.props.campanaArchivo(id);
    this.props.getRecuperacion(id);
    this.props.getDeuda(id);
    this.props.campanaOperadorNotiAt(id);

    setTimeout(() => {
      const {
        campop,
        campoptrab,
        getrec,
        getdeuda,
        campopnoti,
        campophist
      } = this.props;

      this.setState({
        campop: campop[0],
        campoptrab: campoptrab[0],
        campopnoti: campopnoti[0],
        campophist: campophist[0],
        getrec: getrec[0][0],
        getdeuda: getdeuda[0][0]
      });
    }, 300);
  }

  deuda = array => {
    let importe = array.reduce(
      (sum, value) =>
        typeof value.cuota == "number" ? sum + value.cuota : sum,
      0
    );
    return importe;
  };

  render() {
    const { campop, campoptrab, gestion, campopnoti } = this.state;

    let mes;
    return (
      <div className="container">
        <h1 className="mt-4 mb-4"> Gestion Campaña de Atrasados {mes}</h1>

        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Listado de Casos
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Casos Trabajados
            </a>
            <a
              className="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Casos Notificados
            </a>
            {/* <a
              className="nav-item nav-link"
              id="nav-archivo-tab"
              data-toggle="tab"
              href="#nav-archivo"
              role="tab"
              aria-controls="nav-archivo"
              aria-selected="false"
            >
              Archivo de Campaña
            </a> */}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {campop.length === 0 ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Asignados
              </div>
            ) : (
              <div className="mt-4">
                <ListadoGestionCaso
                  data={campop}
                  obtenerDatos={this.obtenerDatos}
                  handleChange={this.handleChange}
                  accion={this.state.accion}
                />
              </div>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {campoptrab.length === 0 ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Trabajados
              </div>
            ) : (
              <ListadoCasosTrabajados
                data={campoptrab}
                selcaso={this.selcaso}
                gestion={gestion}
                handleChange={this.handleChange}
                accion={this.state.accion}
                obtenerDatos={this.obtenerDatos}
                fechaaccionRef={this.fechaaccionRef}
                fechaaccionnuevaRef={this.fechaaccionnuevaRef}
                obsRef={this.obsRef}
                nuevaaccionRef={this.nuevaaccionRef}
                contratoRef={this.contratoRef}
                idcasoRef={this.idcasoRef}
              />
            )}
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            {campopnoti.length === 0 ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Notificados
              </div>
            ) : (
              <ListadoGestionCasoNoti
                data={campopnoti}
                selcaso={this.selcaso}
                gestion={gestion}
              />
            )}
          </div>
          {/* <div
            className="tab-pane fade"
            id="nav-archivo"
            role="tabpanel"
            aria-labelledby="nav-archivo-tab"
          >
            {!campophist ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Notificados
              </div>
            ) : (

             <ArchCamp data={campophist} />
             
            )}
          </div> */}
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  campop: state.campanas.campop,
  campoptrab: state.campanas.campoptrab,
  campopnoti: state.campanas.campopnoti,
  campophist: state.campanas.campophist,
  getcaso: state.campanas.getcaso,
  getrec: state.campanas.getrec,
  getdeuda: state.campanas.getdeuda,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    campanaOperador,
    campanaOperadorNotiAt,
    campanaArchivo,
    gestionCaso,
    updateAccion,
    campanaOperadorTrab,
    cerrarCaso,
    getGestionCaso,
    getRecuperacion,
    getDeuda
  }
)(GestionAt);
