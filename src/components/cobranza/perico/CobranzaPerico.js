import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import AnoSelect from "react-select";

import { meses, anos } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaPerico,
  ePolicia,
  eConvenios,
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
  efectividad2a,
  total2indexfichascob,
  totaladelantadodosindex,
  totaladelantadounindex
} from "../funciones";

class CobranzaPerico extends Component {
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
    this.setState({ [state]: value.value });
  };

  buscar = () => {
    const { mes, ano } = this.state;
    let month = mes;

    this.props.eCobradores(mes, ano);
    this.props.eOficina(mes, ano);
    this.props.eTarjetaPerico(mes, ano);
    this.props.eConvenios(mes, ano);
    this.props.eBanco(mes, ano);
    this.props.ePolicia(mes, ano);

    setTimeout(() => {
      const {
        eoficina,
        ecobradores,
        etarjetar,
        econvenio,
        epolicia,
        ebanco
      } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetar: etarjetar,
        epolicia: epolicia,
        ebanco: ebanco,
        econvenio: econvenio,
        month: month,
        mes: mes,
        ano: ano
      });

      console.log(this.state);
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
    const {
      eoficina,
      ecobradores,
      etarjetar,
      epolicia,
      econvenio,
      ebanco,
      mes,
      ano
    } = this.state;

    let acobrar =
      total2indexacob(ecobradores, 0, 13) +
      totalacob(etarjetar) +
      total1indexacob(eoficina, 2) +
      totaladelantadodosindex(ecobradores, 0, 13) +
      totaladelantadounindex(eoficina, 1) +
      total1indexacob(econvenio, 1) +
      total1indexacob(epolicia, 1);
    let cobrado =
      total2indexcobrado(ecobradores, 0, 13) +
      totalcobrado(etarjetar) +
      total1indexcobrado(eoficina, 2) +
      total1indexcobrado(econvenio, 1) +
      total1indexcobrado(epolicia, 1);

    let efectividadt = (cobrado * 100) / acobrar;
    let flag = 5;
    return (
      <div className="containes ">
        <hr className="mt-4 mb-4" />
        <h1 className="mb-4 ">Efectividad Perico Seleccione el Periodo</h1>
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
            <div id="r">
              <h1 className="mb-4 text-center">
                Efectividad de Cobranza Perico Periodo: {mes}/{ano}
              </h1>
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
              />
              <hr />
              <Epolicia
                flag={flag}
                epolicia={epolicia}
                econvenio={econvenio}
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
                      {total2indexacob(ecobradores, 0, 13) +
                        totalacob(etarjetar) +
                        total1indexacob(eoficina, 2) +
                        total1indexcobrado(econvenio, 1) +
                        total1indexcobrado(epolicia, 1)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {total2indexfichas(ecobradores, 0, 13) +
                        totalfichas(etarjetar) +
                        total1indexfichas(eoficina, 2) +
                        total1indexfichas(econvenio, 1) +
                        total1indexfichas(epolicia, 1)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {total2indexcobrado(ecobradores, 0, 13) +
                        totalcobrado(etarjetar) +
                        total1indexcobrado(eoficina, 2) +
                        total1indexcobrado(econvenio, 1) +
                        total1indexcobrado(epolicia, 1)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {total2indexfichascob(ecobradores, 0, 13) +
                        totalfichascob(etarjetar) +
                        total1indexfichascob(eoficina, 2) +
                        total1indexfichascob(econvenio, 1) +
                        total1indexfichascob(epolicia, 1)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      ${" "}
                      {ecobradores.length === 0
                        ? null
                        : ecobradores[0].adelantado +
                          ecobradores[13].adelantado +
                          eoficina[2].adelantado}
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
  etarjetar: state.efectividad.etarjetar,
  econvenio: state.efectividad.econvenio,
  epolicia: state.efectividad.epolicia,
  ebanco: state.efectividad.ebanco,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaPerico,
  ePolicia,
  eConvenios,
  eBanco
})(CobranzaPerico);
