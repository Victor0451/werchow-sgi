import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoperico,
  eTarjetaTotalperico
} from "../../../actions/efectividadMActions";

import Eoficina from "../EoficinaM";
import Ecobradores from "../EcobradoresM";
import Ebanco from "../EbancoM";

import {
  total,
  total1index,
  total1indexfichas,
  totalfichas,
  totalcobrado,
  totalfichascob,
  efecparcial,
  efectividad2,
  imprimir,
  efectividad
} from "../funciones";

class CobranzaPericoM extends Component {
  state = {
    eoficina: "",
    eoficinacob: "",
    ecobradores: "",
    ecobradorescob: "",
    etarjetar: "",
    etarjetacobr: ""
  };
  componentDidMount() {
    this.props.eCobradoresCobrado();
    this.props.eCobradoresTotal();
    this.props.eOficinaCobrado();
    this.props.eOficinaTotal();
    this.props.eTarjetaCobradoperico();
    this.props.eTarjetaTotalperico();

    setTimeout(() => {
      const {
        eoficinam,
        eoficinacobm,
        ecobradoresm,
        ecobradorescobm,
        etarjetarm,
        etarjetacobrm
      } = this.props;

      this.setState({
        eoficina: eoficinam,
        eoficinacob: eoficinacobm,
        ecobradores: ecobradoresm,
        ecobradorescob: ecobradorescobm,
        etarjetar: etarjetarm,
        etarjetacobr: etarjetacobrm
      });
    }, 400);
  }

  render() {
    const {
      eoficina,
      eoficinacob,
      ecobradores,
      ecobradorescob,
      etarjetar,
      etarjetacobr
    } = this.state;

    let acobrar =
      total1index(ecobradores, 0) + total(etarjetar) + total1index(eoficina, 2);

    let cobrado =
      total1index(ecobradorescob, 0) +
      total(etarjetacobr) +
      total1index(eoficinacob, 2);

    let efectividadt = (cobrado * 100) / acobrar;
    let flag = 5;

    return (
      <div className="containes ">
        <div id="r">
          <h1 className="mb-4 text-center">Efectividad de Cobranza Perico</h1>

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
            etarjeta={etarjetar}
            etarjetacob={etarjetacobr}
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
                  {total1index(ecobradores, 0) +
                    total(etarjetar) +
                    total1index(eoficina, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {total1index(ecobradores, 0) +
                    totalfichas(etarjetar) +
                    total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {total1index(ecobradorescob, 0) +
                    total(etarjetacobr) +
                    total1index(eoficinacob, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {total1index(ecobradorescob, 0) +
                    totalfichas(etarjetacobr) +
                    total1indexfichas(eoficinacob, 2)}
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
  eoficinam: state.efectividad.eoficina,
  eoficinacobm: state.efectividad.eoficinacob,
  ecobradoresm: state.efectividad.ecobradores,
  ecobradorescobm: state.efectividad.ecobradorescob,
  etarjetarm: state.efectividad.etarjetar,
  etarjetacobrm: state.efectividad.etarjetacobr,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoperico,
  eTarjetaTotalperico
})(CobranzaPericoM);
