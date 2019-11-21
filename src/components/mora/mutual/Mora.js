import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { mOficina, mCobradores, mTarjeta } from "../../../actions/moraMActions";

import Moficina from "./Moficina";
import Mcobradores from "./Mcobradores";
import Mbanco from "./Mbanco";

class Mora extends Component {
  state = {
    mcobradores: "",
    moficina: "",
    mtarjeta: ""
  };
  componentDidMount() {
    this.props.mCobradores();
    this.props.mOficina();
    this.props.mTarjeta();

    setTimeout(() => {
      const { mcobradores, moficina, mtarjeta } = this.props;

      this.setState({
        mcobradores: mcobradores,
        moficina: moficina,
        mtarjeta: mtarjeta
      });
    }, 300);
  }

  totalmora = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].mora;
    }

    return total;
  };

  totalmorarec = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].morarec;
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

  totalfichasrec = array => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += array[i].fichasrec;
    }

    return total;
  };

  efectividad = array => {
    let mora = 0;
    let morarec = 0;

    for (let i = 0; i < array.length; i++) {
      mora += array[i].mora;
      morarec += array[i].morarec;
    }

    let efectividad = (morarec * 100) / mora;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  efecparcial = (array, index) => {
    let mora = 0;
    let morarec = 0;

    for (let i = 0; i < array.length; i++) {
      mora += array[index].mora;
      morarec += array[index].morarec;
    }

    let efectividad = (morarec * 100) / mora;
    let resultado = efectividad.toFixed(2);

    return resultado;
  };

  imprimir = () => {
    let contenido = document.getElementById("moraw").innerHTML;
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
    const { mcobradores, moficina, mtarjeta } = this.state;

    let coof = mcobradores.concat(moficina);
    let totalgral = coof.concat(mtarjeta);

    return (
      <div className="containes ">
        <h1 className="mb-4 text-center">Mora Mutual</h1>
        <div id="moraw">
          <hr />
          <Mcobradores
            mcobradores={mcobradores}
            totalmora={this.totalmora}
            totalfichas={this.totalfichas}
            totalmorarec={this.totalmorarec}
            totalfichasrec={this.totalfichasrec}
            efectividad={this.efectividad}
            efecparcial={this.efecparcial}
          />

          <hr />

          <Moficina
            moficina={moficina}
            totalmora={this.totalmora}
            totalfichas={this.totalfichas}
            totalmorarec={this.totalmorarec}
            totalfichasrec={this.totalfichasrec}
            efectividad={this.efectividad}
            efecparcial={this.efecparcial}
          />

          <hr />

          <Mbanco
            mtarjeta={mtarjeta}
            totalmora={this.totalmora}
            totalfichas={this.totalfichas}
            totalmorarec={this.totalmorarec}
            totalfichasrec={this.totalfichasrec}
            efectividad={this.efectividad}
            efecparcial={this.efecparcial}
          />

          <div className="container mb-4">
            <div className="d-flex justify-content-between text-center border  border-dark mt-4 mb-4 ">
              <div className="col-4">
                {" "}
                <strong>TOTAL GENERAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {this.totalmora(totalgral)}</strong>
              </div>
              <div className="col-1">
                <strong>{this.totalfichas(totalgral)}</strong>
              </div>
              <div className="col-2">
                <strong>$ {this.totalmorarec(totalgral)}</strong>
              </div>
              <div className="col-1">
                <strong>{this.totalfichasrec(totalgral)}</strong>
              </div>
              <div className="col-2">
                <strong>{this.efectividad(totalgral)}%</strong>
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
  moficina: state.mora.moficina,
  mcobradores: state.mora.mcobradores,
  mtarjeta: state.mora.mtarjeta,
  mpolicia: state.mora.mpolicia,
  mbanconv: state.mora.mbanconv,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    mOficina,
    mCobradores,
    mTarjeta
  }
)(Mora);
