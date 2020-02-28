import React, { Component } from "react";

import ListadoCasosTrabajados from "../../layouts/Table/Table4";
// import ArchCamp from "../../layouts/Table/Table5";

import { connect } from "react-redux";
import {
  volverALlamar,
  gestionCaso,
  updateAccion,
  campanaOperadorTrab,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
} from "../../../actions/campanasActions";

class VolverALlamar extends Component {
  state = {
    campop: [],
    campoptrab: [],
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

    this.props.volverALlamar(id);
    this.props.getRecuperacion(id);
    this.props.getDeuda(id);

    setTimeout(() => {
      const { campop, getrec, getdeuda } = this.props;

      this.setState({
        campop: campop[0],
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
    const { campop, gestion } = this.state;

    return (
      <div className="form-style-8">
        <h2 className="mb-4"> Padron Programado para Volver a Llamar</h2>

        {campop.length === 0 ? (
          <div className="alert alert-primary mt-4">
            No Tienes Casos Trabajados
          </div>
        ) : (
          <div className="mt-4">
            <ListadoCasosTrabajados
              data={campop}
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
          </div>
        )}
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

export default connect(mapStateToProps, {
  volverALlamar,
  gestionCaso,
  updateAccion,
  campanaOperadorTrab,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
})(VolverALlamar);
