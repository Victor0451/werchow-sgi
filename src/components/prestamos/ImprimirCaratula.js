import React, { Component } from "react";
import { connect } from "react-redux";

import {
  prestamosPorCodigo,
  consultarFicha
} from "../../actions/prestamosActions";
import TablaPrestamosCaratula from "./TablaPrestamosCaratula";

export class ImprimirCaratula extends Component {
  state = {
    estado: "",
    capitalprest: "",
    intereses: "",
    cuotas: "",
    cantprest: "",
    capconint: ""
  };

  componentDidMount() {
    const codigo = this.props.auth.user.codigo;

    this.props.prestamosPorCodigo(codigo);

    setTimeout(() => {
      const { prestporop } = this.props;

      let capitalprest = 0;

      let intereses = 0;

      let cuotas = 0;

      let cantprest = prestporop.length;

      let capconint = 0;

      for (let i = 0; i < prestporop.length; i++) {
        capitalprest += prestporop[i].ptm_prestamo;
        intereses += prestporop[i].ptm_valcuota;
        cuotas += prestporop[i].ptm_cuotas;
        capconint += prestporop[i].ptm_valcuota * prestporop[i].ptm_cuotas;
      }

      this.setState({
        capitalprest: capitalprest,
        intereses: intereses,
        cuotas: cuotas,
        cantprest: cantprest,
        capconint: capconint
      });
    }, 100);
  }
  render() {
    const { prestporop } = this.props;
    const {
      capitalprest,
      intereses,
      cuotas,
      cantprest,
      capconint
    } = this.state;
    return (
      <div className="form-style-8">
        <h2>Prestamos Realizados</h2>

        <TablaPrestamosCaratula
          data={prestporop}
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
  prestporop: state.prestamos.prestporop,
  ficha: state.prestamos.ficha
});

const mapDispatchToProps = {
  prestamosPorCodigo,
  consultarFicha
};

export default connect(mapStateToProps, mapDispatchToProps)(ImprimirCaratula);
