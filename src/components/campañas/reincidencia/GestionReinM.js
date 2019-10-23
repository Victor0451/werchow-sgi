import React, { Component } from "react";

import ListadoGestionCaso from "../../layouts/Table/Table";
import ListadoGestionCasoNoti from "../../layouts/Table/Table2";
import ListadoCasosTrabajados from "../../layouts/Table/Table4";

import { connect } from "react-redux";
import {
  gestionCaso,
  updateAccion,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
} from "../../../actions/campanasActions";

import {
  campanaOperadorRein,
  campanaOperadorTrabRein,
  campanaOperadorNotiRein
} from "../../../actions/campanasMActions";

class GestionRein extends Component {
  fechaaccionRef = React.createRef();
  fechaaccionnuevaRef = React.createRef();
  obsRef = React.createRef();
  nuevaaccionRef = React.createRef();
  contratoRef = React.createRef();
  idcasoRef = React.createRef();

  state = {
    campop: [],
    campoptrab: [],
    campopnoti: [],
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

    this.props.campanaOperadorRein(id);
    this.props.campanaOperadorTrabRein(id);
    this.props.getRecuperacion(id);
    this.props.getDeuda(id);
    this.props.campanaOperadorNotiRein(id);

    setTimeout(() => {
      const { campop, campoptrab, getrec, getdeuda, campopnoti } = this.props;

      this.setState({
        campop: campop[0],
        campoptrab: campoptrab[0],
        campopnoti: campopnoti[0],
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
        <h1 className="mt-4 mb-4"> Gestion Campaña de Reincidentes {mes}</h1>

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
                  fechaaccionRef={this.fechaaccionRef}
                  fechaaccionnuevaRef={this.fechaaccionnuevaRef}
                  obsRef={this.obsRef}
                  nuevaaccionRef={this.nuevaaccionRef}
                  contratoRef={this.contratoRef}
                  handleChange={this.handleChange}
                  accion={this.state.accion}
                  idcasoRef={this.idcasoRef}
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
  getcaso: state.campanas.getcaso,
  getrec: state.campanas.getrec,
  getdeuda: state.campanas.getdeuda,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    campanaOperadorRein,
    gestionCaso,
    updateAccion,
    campanaOperadorTrabRein,
    campanaOperadorNotiRein,
    cerrarCaso,
    getGestionCaso,
    getRecuperacion,
    getDeuda
  }
)(GestionRein);
