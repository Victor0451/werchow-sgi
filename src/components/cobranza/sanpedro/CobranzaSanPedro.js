import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradosanpedro,
  eTarjetaTotalsanpedro
} from "../../../actions/efectividadActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../Ecobradores";
import Ebanco from "../Ebanco";

import {
  total,
  total1index,
  total1indexfichas,
  total2indexfichas,
  totalfichas,
  totalcobrado,
  totalfichascob,
  efecparcial,
  total2index,
  efectividad2,
  efectividadSP,
  efectividad
} from "../funciones";

class CobranzaSanPedro extends Component {
  state = {
    eoficina: "",
    eoficinacob: "",
    ecobradores: "",
    ecobradorescob: "",
    etarjetap: "",
    etarjetacobp: ""
  };
  componentDidMount() {
    this.props.eCobradoresCobrado();
    this.props.eCobradoresTotal();
    this.props.eOficinaCobrado();
    this.props.eOficinaTotal();
    this.props.eTarjetaCobradosanpedro();
    this.props.eTarjetaTotalsanpedro();

    setTimeout(() => {
      const {
        eoficina,
        eoficinacob,
        ecobradores,
        ecobradorescob,
        etarjetap,
        etarjetacobp
      } = this.props;

      this.setState({
        eoficina: eoficina,
        eoficinacob: eoficinacob,
        ecobradores: ecobradores,
        ecobradorescob: ecobradorescob,
        etarjetap: etarjetap,
        etarjetacobp: etarjetacobp
      });
    }, 300);
  }

  imprimir = () => {
    let contenido = document.getElementById("p").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const {
      eoficina,
      eoficinacob,
      ecobradores,
      ecobradorescob,
      etarjetap,
      etarjetacobp
    } = this.state;

    let acobrar =
      total2index(ecobradores, 0, 13) +
      total(etarjetap) +
      total1index(eoficina, 2);

    let cobrado =
      total2index(ecobradorescob, 0, 13) +
      total(etarjetacobp) +
      total1index(eoficinacob, 2);

    let efectividadt = (cobrado * 100) / acobrar;
    let flag = 60;
    return (
      <div className="containes ">
        <div id="p">
          <h1 className="mb-4 text-center">
            Efectividad de Cobranza San Pedro
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
            efectividadSP={efectividadSP}
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
            etarjeta={etarjetap}
            etarjetacob={etarjetacobp}
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
                  {total2index(ecobradores, 0, 13) +
                    total(etarjetap) +
                    total1index(eoficina, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {total2indexfichas(ecobradores, 0, 13) +
                    totalfichas(etarjetap) +
                    total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {total2index(ecobradorescob, 0, 13) +
                    total(etarjetacobp) +
                    total1index(eoficinacob, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {total2indexfichas(ecobradorescob, 0, 13) +
                    totalfichas(etarjetacobp) +
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
  eoficinacob: state.efectividad.eoficinacob,
  ecobradores: state.efectividad.ecobradores,
  ecobradorescob: state.efectividad.ecobradorescob,
  etarjetap: state.efectividad.etarjetap,
  etarjetacobp: state.efectividad.etarjetacobp,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradosanpedro,
  eTarjetaTotalsanpedro
})(CobranzaSanPedro);
