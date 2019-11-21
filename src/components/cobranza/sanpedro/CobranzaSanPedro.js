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

  total = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].cobranza;
    }

    return total;
  };

  total2index = (array, index1, index2) => {
    let total1 = 0;
    let total2 = 0;

    for (let i = 0; i < array.length; i++) {
      total1 = array[index1].cobranza;
    }

    for (let i = 0; i < array.length; i++) {
      total2 = array[index2].cobranza;
    }

    let total = total1 + total2;

    return total;
  };

  total2indexfichas = (array, index1, index2) => {
    let total1 = 0;
    let total2 = 0;

    for (let i = 0; i < array.length; i++) {
      total1 = array[index1].fichas;
    }

    for (let i = 0; i < array.length; i++) {
      total2 = array[index2].fichas;
    }

    let total = total1 + total2;

    return total;
  };

  total1index = (array, index) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total = array[index].cobranza;
    }

    return total;
  };

  total1indexfichas = (array, index) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total = array[index].fichas;
    }

    return total;
  };

  totalcobrado = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].cobranza;
    }

    return total;
  };

  totalfichas = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].fichas;
    }

    return total;
  };

  totalfichascob = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].fichas;
    }

    return total;
  };

  efectividad2 = (array1, array2) => {
    let total = 0;
    let cobrado = 0;

    for (let i = 0; i < array1.length; i++) {
      total += array1[i].cobranza;
    }

    for (let i = 0; i < array2.length; i++) {
      cobrado += array2[i].cobranza;
    }

    let efectividad = (cobrado * 100) / total;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  efectividad = (array1, array2, index1, index2) => {
    let total1 = 0;
    let total2 = 0;

    let cobrado1 = 0;
    let cobrado2 = 0;

    for (let i = 0; i < array1.length; i++) {
      total1 += array1[index1].cobranza;
      total2 += array1[index2].cobranza;
    }

    for (let i = 0; i < array2.length; i++) {
      cobrado1 += array2[index1].cobranza;
      cobrado2 += array2[index2].cobranza;
    }

    let total = total1 + total2;
    let cobrado = cobrado1 + cobrado2;

    let efectividad = (cobrado * 100) / total;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  efecparcial = (array1, array2, index) => {
    let total = 0;
    let cobrado = 0;

    for (let i = 0; i < array1.length; i++) {
      total += array1[index].cobranza;
    }

    for (let i = 0; i < array2.length; i++) {
      cobrado += array2[index].cobranza;
    }

    let efectividad = (cobrado * 100) / total;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  imprimir = () => {
    let contenido = document.getElementById("sp").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  reload = () => {
    document.location.reload();
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
      this.total2index(ecobradores, 0, 13) +
      this.total(etarjetap) +
      this.total1index(eoficina, 2);

    let cobrado =
      this.total2index(ecobradorescob, 0, 13) +
      this.total(etarjetacobp) +
      this.total1index(eoficinacob, 2);

    let efectividad = (cobrado * 100) / acobrar;
    let flag = 60;
    return (
      <div className="containes ">
        <div id="sp">
          <h1 className="mb-4 text-center">
            Efectividad de Cobranza San Pedro
          </h1>

          <hr />
          <Ecobradores
            flag={flag}
            ecobradores={ecobradores}
            ecobradorescob={ecobradorescob}
            total={this.total}
            totalfichas={this.totalfichas}
            totalcobrado={this.totalcobrado}
            totalfichascob={this.totalfichascob}
            efecparcial={this.efecparcial}
            efectividad={this.efectividad}
          />

          <hr />

          <Eoficina
            flag={flag}
            eoficina={eoficina}
            eoficinacob={eoficinacob}
            total={this.total}
            totalfichas={this.totalfichas}
            totalcobrado={this.totalcobrado}
            totalfichascob={this.totalfichascob}
            efecparcial={this.efecparcial}
            efectividad={this.efectividad}
          />

          <hr />

          <Ebanco
            etarjeta={etarjetap}
            etarjetacob={etarjetacobp}
            total={this.total}
            totalfichas={this.totalfichas}
            totalcobrado={this.totalcobrado}
            totalfichascob={this.totalfichascob}
            efecparcial={this.efecparcial}
            efectividad2={this.efectividad2}
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
                  {this.total2index(ecobradores, 0, 13) +
                    this.total(etarjetap) +
                    this.total1index(eoficina, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {this.total2indexfichas(ecobradores, 0, 13) +
                    this.totalfichas(etarjetap) +
                    this.total1indexfichas(eoficina, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {this.total2index(ecobradorescob, 0, 13) +
                    this.total(etarjetacobp) +
                    this.total1index(eoficinacob, 2)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {this.total2indexfichas(ecobradorescob, 0, 13) +
                    this.totalfichas(etarjetacobp) +
                    this.total1indexfichas(eoficinacob, 2)}
                </strong>
              </div>
              <div className="col-2">
                <strong>{efectividad.toFixed(2)}%</strong>
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
