import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import AnoSelect from "react-select";

import { meses, anos } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaSsj,
  eConvenios,
  ePolicia,
  eBanco
} from "../../../actions/efectividadActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../Ecobradores";
import Ebanco from "../Ebanco";
import Epolicia from "../Epolicia";

import {
  total,
  total1indexacob,
  total1indexcobrado,
  total1indexfichas,
  totalSsjCob,
  efectividad3,
  totalSsjaCob,
  totalfichas,
  totalcobrado,
  totalfichascob,
  totalacob,
  efecparcial,
  efectividad2,
  efectividad,
  total1indexfichascob,
  efectividad2a,
  totaladelantadounindex,
  totalfichasacobssj,
  totalSsjAdelantado
} from "../funciones";

class CobranzaSSJ extends Component {
  state = {
    eoficina: "",
    ecobradores: "",
    etarjetaw: "",
    econvenio: "",
    epolicia: "",
    ebanco: "",
    month: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  buscar = () => {
    const { mes, ano } = this.state;
    let month = mes;

    this.props.eCobradores(mes, ano);
    this.props.eOficina(mes, ano);
    this.props.eTarjetaSsj(mes, ano);
    this.props.eConvenios(mes, ano);
    this.props.eBanco(mes, ano);
    this.props.ePolicia(mes, ano);

    setTimeout(() => {
      const {
        eoficina,
        ecobradores,
        etarjetaw,
        econvenio,
        epolicia,
        ebanco
      } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetaw: etarjetaw,
        epolicia: epolicia,
        ebanco: ebanco,
        econvenio: econvenio,
        month: month
      });

      console.log(this.state);
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
      econvenio,
      ebanco,
      mes,
      ano
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
      total1indexacob(eoficina, 0) +
      total1indexacob(epolicia, 3) +
      total1indexacob(econvenio, 3) +
      totalSsjAdelantado(ecobradores, [
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
      totaladelantadounindex(eoficina, 0);
    let cobrado =
      totalSsjCob(ecobradores, [3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 17, 18, 19]) +
      totalcobrado(etarjetaw) +
      total1indexcobrado(eoficina, 0) +
      total1indexcobrado(epolicia, 3) +
      total1indexcobrado(econvenio, 3);

    let efectividadt = (cobrado * 100) / acobrar;

    let flag = 1;
    return (
      <div className="container ">
        <hr className="mt-4 mb-4" />
        <h1 className="mb-4 ">
          Efectividad San Salvador Seleccione el Periodo
        </h1>

        <div className="mb-4 d-flex justify-content-beetwen">
          <div className="col-md-4">
            <MesSelect
              options={meses}
              placeholder={"Eliga un Mes"}
              onChange={value => this.handleChange(value, "mes")}
            />
          </div>
          <div className="col-md-4">
            <AnoSelect
              options={anos}
              placeholder={"Eliga el Año"}
              onChange={value => this.handleChange(value, "ano")}
            />
          </div>
          <div className="col-md-4">
            <Link
              className="btn btn-block btn-primary"
              onClick={this.buscar}
              to="#"
            >
              Buscar
            </Link>
          </div>
        </div>
        <hr className="mt-4 mb-4" />

        {ecobradores ? (
          <div>
            <div id="ssj" className="ssj">
              <h1 className="mb-4 text-center">
                Efectividad de Cobranza San Salvador Periodo: {mes}/{ano}
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
                ebanco={ebanco}
                etarjeta={etarjetaw}
                total={total}
                totalfichas={totalfichas}
                totalcobrado={totalcobrado}
                totalfichascob={totalfichascob}
                efecparcial={efecparcial}
                efectividad2={efectividad2}
                total1indexfichascob={total1indexfichascob}
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
                      {totalfichasacobssj(ecobradores, [
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
                        total1indexfichas(eoficina, 0) +
                        total1indexfichascob(econvenio, 3) +
                        total1indexfichascob(epolicia, 3)}
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
                        totalcobrado(etarjetaw) +
                        total1indexcobrado(eoficina, 0) +
                        total1indexcobrado(econvenio, 3) +
                        total1indexcobrado(epolicia, 3)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichasacobssj(ecobradores, [
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
                        total1indexfichascob(eoficina, 0) +
                        total1indexfichascob(econvenio, 3) +
                        total1indexfichascob(epolicia, 3)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      ${" "}
                      {totalSsjAdelantado(ecobradores, [
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
                      ]) + totaladelantadounindex(eoficina, 0)}
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
        ) :  null}
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
  ebanco: state.efectividad.ebanco,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaSsj,
  eConvenios,
  ePolicia,
  eBanco
})(CobranzaSSJ);
