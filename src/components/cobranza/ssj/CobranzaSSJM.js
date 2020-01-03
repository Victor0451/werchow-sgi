import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import AnoSelect from "react-select";

import { meses, anos } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaSsj
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
  totalSsjCobM,
  efectividad3,
  totalSsjaCobM,
  totalfichas,
  totalcobrado,
  totalfichascob,
  totalacob,
  efecparcial,
  efectividad2,
  efectividad,
  total1indexfichascob,
  totaladelantadounindex,
  totalfichasacobssjM,
  totalSsjAdelantadoM,
  efectividadSsjM,
  efectividadTjt
} from "../funciones";

class CobranzaSSJM extends Component {
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

    this.props.eCobradores(mes, ano);
    this.props.eOficina(mes, ano);
    this.props.eTarjetaSsj(mes, ano);

    setTimeout(() => {
      const { eoficina, ecobradores, etarjetaw } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetaw: etarjetaw
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
    const { eoficina, ecobradores, etarjetaw, mes, ano } = this.state;

    let acobrar =
      totalSsjaCobM(ecobradores, [2, 3, 5, 6, 8, 9, 11]) +
      totalacob(etarjetaw) +
      total1indexacob(eoficina, 0) +
      totalSsjAdelantadoM(ecobradores, [2, 3, 5, 6, 8, 9, 11]) +
      totaladelantadounindex(eoficina, 0);
    let cobrado =
      totalSsjCobM(ecobradores, [2, 3, 5, 6, 8, 9, 11]) +
      totalcobrado(etarjetaw) +
      total1indexcobrado(eoficina, 0);

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
                efecparcial={efecparcial}
                efectividad={efectividad}
                efectividad3={efectividad3}
                efectividadSsjM={efectividadSsjM}
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
                efectividadTjt={efectividadTjt}
                total1indexfichascob={total1indexfichascob}
              />
              <hr />

              {/* <Epolicia
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
                      {totalSsjaCobM(ecobradores, [2, 3, 5, 6, 8, 9, 11]) +
                        total(etarjetaw) +
                        total1indexacob(eoficina, 0)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {totalfichasacobssjM(ecobradores, [
                        2,
                        3,
                        5,
                        6,
                        8,
                        9,
                        11
                      ]) +
                        totalfichascob(etarjetaw) +
                        total1indexfichas(eoficina, 0)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {totalSsjCobM(ecobradores, [2, 3, 5, 6, 8, 9, 11]) +
                        totalcobrado(etarjetaw) +
                        total1indexcobrado(eoficina, 0)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichasacobssjM(ecobradores, [
                        2,
                        3,
                        5,
                        6,
                        8,
                        9,
                        11
                      ]) +
                        totalfichascob(etarjetaw) +
                        total1indexfichascob(eoficina, 0)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      ${" "}
                      {totalSsjAdelantadoM(ecobradores, [
                        2,
                        3,
                        5,
                        6,
                        8,
                        9,
                        11
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
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eoficina: state.efectividad.eoficina,
  ecobradores: state.efectividad.ecobradores,
  etarjetaw: state.efectividad.etarjetaw,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaSsj
})(CobranzaSSJM);
