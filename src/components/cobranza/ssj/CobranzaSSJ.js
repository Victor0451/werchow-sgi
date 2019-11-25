import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoSsj,
  eTarjetaTotalSsj
} from "../../../actions/efectividadActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../Ecobradores";
import Ebanco from "../Ebanco";

import {
  total,
  total1index,
  total1indexfichas,
  totalcobssj,
  totalfichas,
  totalcobrado,
  totalfichascob,
  efecparcial,
  efectividad3,
  efectividad2,
  totalfichasssj,
  efectividad,
  imprimir
} from "../funciones";

class CobranzaSSJ extends Component {
  state = {
    eoficina: "",
    eoficinacob: "",
    ecobradores: "",
    ecobradorescob: "",
    etarjetaw: "",
    etarjetacobw: ""
  };
  componentDidMount() {
    this.props.eCobradoresCobrado();
    this.props.eCobradoresTotal();
    this.props.eOficinaCobrado();
    this.props.eOficinaTotal();
    this.props.eTarjetaCobradoSsj();
    this.props.eTarjetaTotalSsj();

    setTimeout(() => {
      const {
        eoficina,
        eoficinacob,
        ecobradores,
        ecobradorescob,
        etarjetaw,
        etarjetacobw
      } = this.props;

      this.setState({
        eoficina: eoficina,
        eoficinacob: eoficinacob,
        ecobradores: ecobradores,
        ecobradorescob: ecobradorescob,
        etarjetaw: etarjetaw,
        etarjetacobw: etarjetacobw
      });
    }, 300);
  }

  render() {
    const {
      eoficina,
      eoficinacob,
      ecobradores,
      ecobradorescob,
      etarjetaw,
      etarjetacobw
    } = this.state;

    let acobrar =
      totalcobssj(ecobradores, [3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 17, 18, 19]) +
      total(etarjetaw) +
      total1index(eoficina, 0);

    let cobrado =
      totalcobssj(ecobradorescob, [
        3,
        4,
        5,
        7,
        8,
        9,
        10,
        11,
        12,
        14,
        17,
        18,
        19
      ]) +
      total(etarjetacobw) +
      total1index(eoficinacob, 0);

    let efectividadt = (cobrado * 100) / acobrar;

    let flag = 1;
    return (
      <div className="containes ">
        <div id="ssj">
          <h1 className="mb-4 text-center">
            Efectividad de Cobranza San Salvador
          </h1>

          <hr />
          <Ecobradores
            flag={flag}
            ecobradores={ecobradores}
            ecobradorescob={ecobradorescob}
            total={total}
            totalfichas={totalfichas}
            totalcobrado={totalcobrado}
            totalfichascob={totalfichascob}
            efecparcial={efecparcial}
            efectividad={efectividad}
            efectividad3={efectividad3}
          />

          <hr />

          <Eoficina
            flag={flag}
            eoficina={eoficina}
            eoficinacob={eoficinacob}
            total={total}
            totalfichas={totalfichas}
            totalcobrado={totalcobrado}
            totalfichascob={totalfichascob}
            efecparcial={efecparcial}
            efectividad={efectividad}
          />

          <hr />

          <Ebanco
            flag={flag}
            etarjeta={etarjetaw}
            etarjetacob={etarjetacobw}
            total={total}
            totalfichas={totalfichas}
            totalcobrado={totalcobrado}
            totalfichascob={totalfichascob}
            efecparcial={efecparcial}
            efectividad2={efectividad2}
          />

          <div className="container mb-4">
            <div className="d-flex justify-content-between text-center border  border-dark mt-4 mb-4 ">
              <div className="col-4">
                {" "}
                <strong>TOTAL GENERAL</strong>
              </div>

              <div className="col-2">
                <strong>
                  ${" "}
                  {totalcobssj(ecobradores, [
                    3,
                    4,
                    5,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    14,
                    17,
                    18,
                    19
                  ]) +
                    total(etarjetaw) +
                    total1index(eoficina, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {totalfichasssj(ecobradores, [
                    3,
                    4,
                    5,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    14,
                    17,
                    18,
                    19
                  ]) +
                    totalfichas(etarjetaw) +
                    total1indexfichas(eoficina, 0)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {totalcobssj(ecobradorescob, [
                    3,
                    4,
                    5,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    14,
                    17,
                    18,
                    19
                  ]) +
                    total(etarjetacobw) +
                    total1index(eoficinacob, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {totalfichasssj(ecobradorescob, [
                    3,
                    4,
                    5,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    14,
                    17,
                    18,
                    19
                  ]) +
                    totalfichas(etarjetacobw) +
                    total1indexfichas(eoficinacob, 0)}
                </strong>
              </div>
              <div className="col-2">
                <strong>{efectividadt.toFixed(2)}%</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-info col-md-3 mr-1"
                onClick={imprimir}
              >
                Imprimir Solicitud
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eoficina: state.efectividad.eoficina,
  eoficinacob: state.efectividad.eoficinacob,
  ecobradores: state.efectividad.ecobradores,
  ecobradorescob: state.efectividad.ecobradorescob,
  etarjetaw: state.efectividad.etarjetaw,
  etarjetacobw: state.efectividad.etarjetacobw,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoSsj,
  eTarjetaTotalSsj
})(CobranzaSSJ);
