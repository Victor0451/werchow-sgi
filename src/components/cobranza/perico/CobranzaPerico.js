import React, { Component } from "react";
import { Link } from "react-router-dom";

import MesSelect from "react-select";
import { meses } from "../../layouts/Arrays/arrays";

import { connect } from "react-redux";
import {
  eCobradores,
  eOficina,
  eTarjetaPerico,
  ePolicia,
  eConvenios
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
  efecparcial,
  total2indexacob,
  total2indexcobrado,
  efectividad2,
  efectividad,
  efectividad2a

} from "../funciones";

class CobranzaPerico extends Component {
  state = {
    eoficina: "",
    ecobradores: "",
    etarjetar: "",
    epolicia: "",
    econvenio: "",
    month: ""
  };

  handleChange = (value, state) => {
    let mes = value.value;
    let month = value.label;
    this.props.eCobradores(mes);
    this.props.eOficina(mes);
    this.props.eTarjetaPerico(mes);
    this.props.ePolicia(mes);
    this.props.eConvenios(mes);

    setTimeout(() => {
      const {
        eoficina,
        ecobradores,
        etarjetar,
        epolicia,
        econvenio
      } = this.props;

      this.setState({
        eoficina: eoficina,
        ecobradores: ecobradores,
        etarjetar: etarjetar,
        econvenio: econvenio,
        epolicia: epolicia,
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
    const {
      eoficina,
      ecobradores,
      etarjetar,
      epolicia,
      econvenio
    } = this.state;

    // let acobrar =
    //   total2index(ecobradores, 0, 13) +
    //   total(etarjetar) +
    //   total1index(eoficina, 2);

    // let cobrado =
    //   total2index(ecobradorescob, 0, 13) +
    //   total(etarjetacobr) +
    //   total1index(eoficinacob, 2);

    // let efectividadt = (cobrado * 100) / acobrar;
    let flag = 5;
    return (
      <div className="containes ">
        <div id="r">
          <hr className="mt-4 mb-4" />
          <div className="mb-4">
            <MesSelect
              options={meses}
              placeholder={"Eliga un Mes"}
              onChange={value => this.handleChange(value, "mes")}
            />
          </div>
          <hr className="mt-4 mb-4" />

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
            etarjeta={etarjetar}
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
                  {total2indexacob(ecobradores, 0, 13) +
                    total(etarjetar) +
                    total1indexacob(eoficina, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {total2indexfichas(ecobradores, 0, 13) +
                    totalfichas(etarjetar) +
                    total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {total2indexcobrado(ecobradores, 0, 13) +
                    total(etarjetar) +
                    total1indexcobrado(eoficina, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {total2indexfichas(ecobradores, 0, 13) +
                    totalfichas(etarjetar) +
                    total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-1">
                {/* <strong>{efectividadt.toFixed(2)}%</strong> */}
              </div>
              <div className="col-1">
                {/* <strong>{efectividadt.toFixed(2)}%</strong> */}
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
  econvenio: state.efectividad.econvenio,
  epolicia: state.efectividad.epolicia,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradores,
  eOficina,
  eTarjetaPerico,
  ePolicia,
  eConvenios
})(CobranzaPerico);
