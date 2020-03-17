import React, { Component } from "react";

import { listadoPrestamosPendientes } from "../../actions/prestamosActions";

import { connect } from "react-redux";
import TablaPrestamosPendientes from "./TablaPrestamosPendientes";

class AprobacionPrestamo extends Component {
  state = {
    capitalprest: "",
    intereses: "",
    cuotas: "",
    cantprest: "",
    capconint: ""
  };

  componentDidMount() {
    this.props.listadoPrestamosPendientes();
  }

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  resumenArray = listado => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      intereses += listado[i].ptm_valcuota;
      cuotas += listado[i].ptm_cuotas;
      capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
    }

    this.setState({
      capitalprest: capitalprest,
      intereses: intereses,
      cuotas: cuotas,
      cantprest: cantprest,
      capconint: capconint
    });
  };

  render() {
    const { listado } = this.props;

    const {
      capitalprest,
      intereses,
      cuotas,
      cantprest,
      capconint
    } = this.state;

    return (
      <div className="form-style-8">
        <h2 className="mb-4">Listado de Prestamos Pendientes</h2>

        <TablaPrestamosPendientes
          data={listado}
          capitalprest={capitalprest}
          cuotas={cuotas}
          intereses={intereses}
          cantprest={cantprest}
          capconint={capconint}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listado: state.prestamos.listado
});

export default connect(mapStateToProps, {
  listadoPrestamosPendientes
})(AprobacionPrestamo);
