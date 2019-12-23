import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import { meses } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaPerico
} from "../../../actions/efectividadMActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../EcobradoresM";
import Ebanco from "../EbancoM";
// import Epolicia from "../Epolicia";

import {
  total,
  total1indexacob,
  total1indexcobrado,
  total1indexfichas,
  totalfichas,
  totalcobrado,
  totalfichascob,
  totalacob,
  efecparcial,
  efectividad2,
  efectividad,
  total1indexfichascob,
  totaladelantadounindex,
  efectividadTjt
} from "../funciones";

class CobranzaPericoM extends Component {
  state = {
    eoficina: "",
    ecobradores: "",
    etarjetar: "",
    epolicia: "",
    econvenio: "",
    ebanco: "",
    month: ""
  };

  handleChange = (value, state) => {
    let mes = value.value;
    let month = value.label;
    this.props.eCobradores(mes);
    this.props.eOficina(mes);
    this.props.eTarjetaPerico(mes);

    setTimeout(() => {
      const { eoficina, ecobradores, etarjetar } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetar: etarjetar,
        month: month
      });
    }, 300);
  };

  imprimir = () => {
    let contenido = document.getElementById("r").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const { eoficina, ecobradores, etarjetar, ebanco } = this.state;

    let acobrar =
      total1indexacob(ecobradores, 0) +
      totalacob(etarjetar) +
      total1indexacob(eoficina, 2) +
      totaladelantadounindex(ecobradores, 0) +
      totaladelantadounindex(eoficina, 1);

    let cobrado =
      total1indexcobrado(ecobradores, 0) +
      totalcobrado(etarjetar) +
      total1indexcobrado(eoficina, 2);

    let efectividadt = (cobrado * 100) / acobrar;
    let flag = 5;
    return (
      <div className="containes ">
        <hr className="mt-4 mb-4" />
        <div className="mb-4">
          <MesSelect
            options={meses}
            placeholder={"Eliga un Mes"}
            onChange={value => this.handleChange(value, "mes")}
          />
        </div>
        <hr className="mt-4 mb-4" />
        <div id="r">
          <h1 className="mb-4 text-center">Efectividad de Cobranza Perico</h1>
          <Ecobradores
            flag={flag}
            ecobradores={ecobradores}
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
            ebanco={ebanco}
            etarjeta={etarjetar}
            total={total}
            totalfichas={totalfichas}
            totalcobrado={totalcobrado}
            totalfichascob={totalfichascob}
            efecparcial={efecparcial}
            efectividad2={efectividad2}
            total1indexfichascob={total1indexfichascob}
            efectividadTjt={efectividadTjt}
          />
          <hr />
          {/* <Epolicia
            flag={flag}
            epolicia={epolicia}
            econvenio={econvenio}
            flag={flag}
            efectividad2a={efectividad2a}
            efecparcial={efecparcial}
          /> */}
          <div className="container mb-4">
            <div className="d-flex justify-content-between text-center border  border-dark mt-4 mb-4 ">
              <div className="col-4">
                {" "}
                <strong>TOTAL GENERAL</strong>
              </div>

              <div className="col-2">
                <strong>
                  ${" "}
                  {total1indexacob(ecobradores, 0) +
                    totalacob(etarjetar) +
                    total1indexacob(eoficina, 2)}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {total1indexfichas(ecobradores, 0) +
                    totalfichas(etarjetar) +
                    total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {total1indexcobrado(ecobradores, 0) +
                    totalcobrado(etarjetar) +
                    total1indexcobrado(eoficina, 2)}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {total1indexfichascob(ecobradores, 0) +
                    totalfichascob(etarjetar) +
                    total1indexfichascob(eoficina, 2)}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  ${" "}
                  {ecobradores.length === 0
                    ? null
                    : ecobradores[0].adelantado + eoficina[2].adelantado}
                </strong>
              </div>
              <div className="col-1">
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
                onClick={this.imprimir}
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
  ecobradores: state.efectividad.ecobradores,
  etarjetar: state.efectividad.etarjetar,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaPerico
})(CobranzaPericoM);
