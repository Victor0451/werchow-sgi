import React, { Component } from "react";
import { Link } from "react-router-dom";
import MesSelect from "react-select";
import { meses } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaPalpala,
  eConvenios,
  eBanco,
  ePolicia
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

class CobranzaPalpala extends Component {
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
    let mes = value.value;
    let month = value.label;
    this.props.eCobradores(mes);
    this.props.eOficina(mes);
    this.props.eTarjetaPalpala(mes);
    this.props.eConvenios(mes);
    this.props.eBanco(mes);
    this.props.ePolicia(mes);

    setTimeout(() => {
      const {
        eoficina,
        ecobradores,
        etarjetal,
        econvenio,
        epolicia,
        ebanco
      } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetal: etarjetal,
        epolicia: epolicia,
        ebanco: ebanco,
        econvenio: econvenio,
        month: month
      });
      this.setState({ [state]: value.value });
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
    const {
      eoficina,
      ecobradores,
      etarjetal,
      etarjetacobl,
      econvenio,
      epolicia,
      ebanco
    } = this.state;

    let acobrar =
      total2indexacob(ecobradores, 1, 2) +
      totalacob(etarjetal) +
      total1indexacob(eoficina, 1) +
      total1indexacob(epolicia, 0) +
      total1indexacob(econvenio, 0) +
      total1indexacob(ebanco, 0) +
      totaladelantadodosindex(ecobradores, 1, 2) +
      totaladelantadounindex(eoficina, 1);
    let cobrado =
      total2indexcobrado(ecobradores, 1, 2) +
      totalcobrado(etarjetal) +
      total1indexcobrado(eoficina, 1) +
      total1indexcobrado(epolicia, 0) +
      total1indexcobrado(econvenio, 0) +
      total1indexcobrado(ebanco, 0);

    let efectividadt = (cobrado * 100) / acobrar;

    let flag = 3;

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
        <div id="l">
          <h1 className="mb-4 text-center">Efectividad de Cobranza Palpala</h1>

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
            etarjeta={etarjetal}
            etarjetacob={etarjetacobl}
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
            efecparcial={efecparcial}
            efectividad2a={efectividad2a}
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
                  {total2indexacob(ecobradores, 1, 2) +
                    totalacob(etarjetal) +
                    total1indexacob(eoficina, 1) +
                    total1indexacob(econvenio, 0) +
                    total1indexacob(epolicia, 0) +
                    total1indexacob(ebanco, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {total2indexfichas(ecobradores, 1, 2) +
                    totalfichas(etarjetal) +
                    total1indexfichas(eoficina, 1) +
                    total1indexfichas(econvenio, 0) +
                    total1indexfichas(epolicia, 0) +
                    total1indexfichas(ebanco, 0)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {total2indexcobrado(ecobradores, 1, 2) +
                    totalcobrado(etarjetal) +
                    total1indexcobrado(eoficina, 1) +
                    total1indexcobrado(econvenio, 0) +
                    total1indexcobrado(epolicia, 0) +
                    total1indexcobrado(ebanco, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {total2indexfichascob(ecobradores, 1, 2) +
                    totalfichascob(etarjetal) +
                    total1indexfichascob(eoficina, 1) +
                    total1indexfichascob(econvenio, 0) +
                    total1indexfichascob(epolicia, 0) +
                    total1indexfichascob(ebanco, 0)}
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
    );
  }
}

const mapStateToProps = state => ({
  eoficina: state.efectividad.eoficina,
  ecobradores: state.efectividad.ecobradores,
  etarjetal: state.efectividad.etarjetal,
  econvenio: state.efectividad.econvenio,
  ebanco: state.efectividad.ebanco,
  epolicia: state.efectividad.epolicia,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaPalpala,
  eConvenios,
  eBanco,
  ePolicia
})(CobranzaPalpala);
