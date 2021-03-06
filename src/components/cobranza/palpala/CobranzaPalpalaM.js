import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import AnoSelect from "react-select";

import { meses, anos } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaPalpala
} from "../../../actions/efectividadMActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../EcobradoresM";
import Ebanco from "../EbancoM";
// import Epolicia from "../EpoliciaM";

import {
  total,
  total1indexacob,
  total1indexcobrado,
  total1indexfichas,
  total2indexfichas,
  totalfichas,
  totalcobrado,
  totalfichascob,
  totalacob,
  efecparcial,
  total2indexacob,
  total2indexcobrado,
  efectividad2,
  efectividad,
  total1indexfichascob,
  total2indexfichascob,
  totaladelantadodosindex,
  totaladelantadounindex,
  efectividadTjt
} from "../funciones";

class CobranzaPalpalaM extends Component {
  state = {
    eoficina: "",
    ecobradores: "",
    etarjetal: "",
    ebanco: "",
    econvenio: "",
    epolicia: "",
    month: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  buscar = () => {
    const { mes, ano } = this.state;
    

    this.props.eCobradores(mes, ano);
    this.props.eOficina(mes, ano);
    this.props.eTarjetaPalpala(mes, ano);

    setTimeout(() => {
      const { eoficina, ecobradores, etarjetal } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetal: etarjetal
      });

      console.log(this.state);
    }, 300);
  };

  imprimir = () => {
    let contenido = document.getElementById("l").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const { eoficina, ecobradores, etarjetal, mes, ano } = this.state;

    let acobrar =
      total2indexacob(ecobradores, 1, 2) +
      totalacob(etarjetal) +
      total1indexacob(eoficina, 1) +
      totaladelantadodosindex(ecobradores, 1, 2) +
      totaladelantadounindex(eoficina, 1);
    let cobrado =
      total2indexcobrado(ecobradores, 1, 2) +
      totalcobrado(etarjetal) +
      total1indexcobrado(eoficina, 1);

    let efectividadt = (cobrado * 100) / acobrar;

    let flag = 3;
    let mutual = 1;
    return (
      <div className="containes ">
        <hr className="mt-4 mb-4" />

        <h1 className="mb-4 ">Efectividad Palpala Seleccione el Periodo</h1>
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
            <div id="l">
              <h1 className="mb-4 text-center">
                Efectividad de Cobranza Palpala Periodo: {mes}/{ano}
              </h1>

              <hr />
              <Ecobradores
                flag={flag}
                mutual={mutual}
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
                etarjeta={etarjetal}
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
            epolicia={epolicia}
            econvenio={econvenio}
            flag={flag}
            efecparcial={efecparcial}
            efectividad2a={efectividad2a}
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
                      {total2indexacob(ecobradores, 1, 2) +
                        totalacob(etarjetal) +
                        total1indexacob(eoficina, 1)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {total2indexfichas(ecobradores, 1, 2) +
                        totalfichas(etarjetal) +
                        total1indexfichas(eoficina, 1)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {total2indexcobrado(ecobradores, 1, 2) +
                        totalcobrado(etarjetal) +
                        total1indexcobrado(eoficina, 1)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {total2indexfichascob(ecobradores, 1, 2) +
                        totalfichascob(etarjetal) +
                        total1indexfichascob(eoficina, 1)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      ${" "}
                      {ecobradores.length === 0
                        ? null
                        : ecobradores[1].adelantado +
                          ecobradores[2].adelantado +
                          eoficina[1].adelantado}
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
  etarjetal: state.efectividad.etarjetal,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaPalpala
})(CobranzaPalpalaM);
