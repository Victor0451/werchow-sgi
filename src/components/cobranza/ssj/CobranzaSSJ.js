import React, { Component } from "react";
import { Link } from "react-router-dom";
import MesSelect from "react-select";
import { meses } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaSsj,
  eConvenios,
  ePolicia
} from "../../../actions/efectividadActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../Ecobradores";
import Ebanco from "../Ebanco";
import Epolicia from "../Epolicia";

import {
  total,
  total1indexacob,
  total1indexfichas,
  totalfichas,
  totalSsjCob,
  totalSsjaCob,
  totalfichascob,
  totalcobrado,
  efecparcial,
  efectividad3,
  efectividad2,
  totalfichasssj,
  efectividad,
  total1indexcobrado,
  totalSsj,
  totalacob,
  efectividad2a
} from "../funciones";

class CobranzaSSJ extends Component {
  state = {
    eoficina: "",
    ecobradores: "",
    etarjetaw: "",
    econvenio: "",
    epolicia: "",
    month: ""
  };

  handleChange = (value, state) => {
    let mes = value.value;
    let month = value.label;
    this.props.eCobradores(mes);
    this.props.eOficina(mes);
    this.props.eTarjetaSsj(mes);
    this.props.eConvenios(mes);
    this.props.ePolicia(mes);

    setTimeout(() => {
      const {
        eoficina,
        ecobradores,
        etarjetaw,
        epolicia,
        econvenio
      } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetaw: etarjetaw,
        econvenio: econvenio,
        epolicia: epolicia,
        month: month
      });
    }, 300);
  };

  imprimir = () => {
    let contenido = document.getElementById("ssj").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const {
      eoficina,
      ecobradores,
      etarjetaw,
      epolicia,
      econvenio
    } = this.state;

    let acobrar =
      totalSsjaCob(ecobradores, [
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
      totalacob(etarjetaw) +
      total1indexacob(eoficina, 0);

    let cobrado =
      totalSsjCob(ecobradores, [3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 17, 18, 19]) +
      totalcobrado(etarjetaw) +
      total1indexcobrado(eoficina, 0);

    let efectividadt = (cobrado * 100) / acobrar;

    let flag = 1;
    return (
      <div className="container ">
        <hr className="mt-4 mb-4" />
        <div className="mb-4">
          <MesSelect
            options={meses}
            placeholder={"Eliga un Mes"}
            onChange={value => this.handleChange(value, "mes")}
          />
        </div>
        <hr className="mt-4 mb-4" />
        <div id="ssj">
          <h1 className="mb-4 text-center">
            Efectividad de Cobranza San Salvador
          </h1>

          <hr />
          <Ecobradores
            flag={flag}
            ecobradores={ecobradores}
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
            total={total}
            totalfichas={totalfichas}
            totalcobrado={totalcobrado}
            totalfichascob={totalfichascob}
            efecparcial={efecparcial}
            efectividad2={efectividad2}
          />
          <hr />

          <Epolicia
            epolicia={epolicia}
            econvenio={econvenio}
            flag={flag}
            efectividad2a={efectividad2a}
            efecparcial={efecparcial}
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
                  {totalSsjaCob(ecobradores, [
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
                    total1indexacob(eoficina, 0)}{" "}
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
                  {totalSsjCob(ecobradores, [
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
                    totalSsj(etarjetaw) +
                    total1indexcobrado(eoficina, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {totalfichascob(ecobradores, [
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
                    totalfichascob(etarjetaw) +
                    total1indexfichas(eoficina, 0)}
                </strong>
              </div>
              <div className="col-1">
                $ {/* <strong>{efectividadt.toFixed(2)}%</strong> */}
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
  etarjetaw: state.efectividad.etarjetaw,
  epolicia: state.efectividad.epolicia,
  econvenio: state.efectividad.econvenio,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaSsj,
  eConvenios,
  ePolicia
})(CobranzaSSJ);
