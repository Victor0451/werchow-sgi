import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoSsj,
  eTarjetaTotalSsj
} from "../../../actions/efectividadActions";

import Eoficina from "../Eoficina";
import Ecobradores from "../Ecobradores";
import Ebanco from "../Ebanco";

class CobranzaSSJ extends Component {
  state = {
    eoficina: "",
    eoficinacob: "",
    ecobradores: "",
    ecobradorescob: "",
    etarjetaw: "",
    etarjetacobw: ""
  };
  componentDidMount() {
    this.props.eCobradoresCobrado();
    this.props.eCobradoresTotal();
    this.props.eOficinaCobrado();
    this.props.eOficinaTotal();
    this.props.eTarjetaCobradoSsj();
    this.props.eTarjetaTotalSsj();

    setTimeout(() => {
      const {
        eoficina,
        eoficinacob,
        ecobradores,
        ecobradorescob,
        etarjetaw,
        etarjetacobw
      } = this.props;

      this.setState({
        eoficina: eoficina,
        eoficinacob: eoficinacob,
        ecobradores: ecobradores,
        ecobradorescob: ecobradorescob,
        etarjetaw: etarjetaw,
        etarjetacobw: etarjetacobw
      });
    }, 300);
  }

  totalcobssj = (array1, index) => {
    let total = 0;

    for (let i = 0; i < array1.length; i++) {
      total =
        array1[index[0]].cobranza +
        array1[index[1]].cobranza +
        array1[index[2]].cobranza +
        array1[index[3]].cobranza +
        array1[index[4]].cobranza +
        array1[index[5]].cobranza +
        array1[index[6]].cobranza +
        array1[index[7]].cobranza +
        array1[index[8]].cobranza +
        array1[index[9]].cobranza +
        array1[index[10]].cobranza +
        array1[index[11]].cobranza +
        array1[index[12]].cobranza;
    }
    return total;
  };

  efectividad3 = (array1, array2, index) => {
    let total = 0;
    let cobrado = 0;

    for (let i = 0; i < array1.length; i++) {
      total += array1[index[0]].cobranza;
      total += array1[index[1]].cobranza;
      total += array1[index[2]].cobranza;
      total += array1[index[3]].cobranza;
      total += array1[index[4]].cobranza;
      total += array1[index[5]].cobranza;
      total += array1[index[6]].cobranza;
      total += array1[index[7]].cobranza;
      total += array1[index[8]].cobranza;
      total += array1[index[9]].cobranza;
      total += array1[index[10]].cobranza;
      total += array1[index[11]].cobranza;
      total += array1[index[12]].cobranza;
    }

    for (let i = 0; i < array2.length; i++) {
      cobrado += array2[index[0]].cobranza;
      cobrado += array2[index[1]].cobranza;
      cobrado += array2[index[2]].cobranza;
      cobrado += array2[index[3]].cobranza;
      cobrado += array2[index[4]].cobranza;
      cobrado += array2[index[5]].cobranza;
      cobrado += array2[index[6]].cobranza;
      cobrado += array2[index[7]].cobranza;
      cobrado += array2[index[8]].cobranza;
      cobrado += array2[index[9]].cobranza;
      cobrado += array2[index[10]].cobranza;
      cobrado += array2[index[11]].cobranza;
      cobrado += array2[index[12]].cobranza;
    }

    let efectividad = (cobrado * 100) / total;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  totalfichasssj = (array1, index) => {
    let total = 0;

    for (let i = 0; i < array1.length; i++) {
      total =
        array1[index[0]].fichas +
        array1[index[1]].fichas +
        array1[index[2]].fichas +
        array1[index[3]].fichas +
        array1[index[4]].fichas +
        array1[index[5]].fichas +
        array1[index[6]].fichas +
        array1[index[7]].fichas +
        array1[index[8]].fichas +
        array1[index[9]].fichas +
        array1[index[10]].fichas +
        array1[index[11]].fichas +
        array1[index[12]].fichas;
    }

    return total;
  };

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
    let contenido = document.getElementById("ssj").innerHTML;
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
      etarjetaw,
      etarjetacobw
    } = this.state;

    let acobrar =
      this.totalcobssj(ecobradores, [
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
      this.total(etarjetaw) +
      this.total1index(eoficina, 0);

    let cobrado =
      this.totalcobssj(ecobradorescob, [
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
      this.total(etarjetacobw) +
      this.total1index(eoficinacob, 0);

    let efectividad = (cobrado * 100) / acobrar;

    let flag = 1;
    return (
      <div className="containes ">
        <div id="ssj">
          <h1 className="mb-4 text-center">
            Efectividad de Cobranza San Salvador
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
            efectividad3={this.efectividad3}
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
            flag={flag}
            etarjeta={etarjetaw}
            etarjetacob={etarjetacobw}
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
                  {this.totalcobssj(ecobradores, [
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
                    this.total(etarjetaw) +
                    this.total1index(eoficina, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {this.totalfichasssj(ecobradores, [
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
                    this.totalfichas(etarjetaw) +
                    this.total1indexfichas(eoficina, 0)}
                </strong>
              </div>
              <div className="col-2">
                <strong>
                  ${" "}
                  {this.totalcobssj(ecobradorescob, [
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
                    this.total(etarjetacobw) +
                    this.total1index(eoficinacob, 0)}{" "}
                </strong>
              </div>
              <div className="col-1">
                <strong>
                  {" "}
                  {this.totalfichasssj(ecobradorescob, [
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
                    this.totalfichas(etarjetacobw) +
                    this.total1indexfichas(eoficinacob, 0)}
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
  etarjetaw: state.efectividad.etarjetaw,
  etarjetacobw: state.efectividad.etarjetacobw,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  eCobradoresCobrado,
  eCobradoresTotal,
  eOficinaCobrado,
  eOficinaTotal,
  eTarjetaCobradoSsj,
  eTarjetaTotalSsj
})(CobranzaSSJ);
