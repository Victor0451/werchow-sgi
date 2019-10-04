import React, { Component } from "react";
import Table from "./layouts/Table/Table";

import { connect } from "react-redux";
import {
  campanaOperador,
  gestionCaso,
  updateAccion,
  campanaOperadorTrab,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
} from "../actions/campanasActions";

class Home extends Component {
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

  componentDidMount() {
    const { user } = this.props.auth;

    let id = user.usuario;

    this.props.campanaOperador(id);
    this.props.campanaOperadorTrab(id);
    this.props.getRecuperacion(id);
    this.props.getDeuda(id);

    setTimeout(() => {
      const { campop, campoptrab, getrec, getdeuda } = this.props;

      this.setState({
        campop: campop[0],
        campoptrab: campoptrab[0],
        getrec: getrec[0][0],
        getdeuda: getdeuda[0][0]
      });
    }, 300);
  }

  render() {
    const { campop } = this.state;
    return (
      <div>
        <h1>HOME</h1>

        <Table data={campop} />
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  campop: state.campanas.campop,
  campoptrab: state.campanas.campoptrab,
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
    gestionCaso,
    updateAccion,
    campanaOperadorTrab,
    cerrarCaso,
    getGestionCaso,
    getRecuperacion,
    getDeuda
  }
)(Home);
