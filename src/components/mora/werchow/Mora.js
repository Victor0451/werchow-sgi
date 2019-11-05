import React, { Component } from "react";

import { connect } from "react-redux";
import {
  mOficina,
  mCobradores,
  mPolicia,
  mTarjeta
} from "../../../actions/moraActions";
import Spinner from "../../layouts/Spinner";

class Mora extends Component {
  state = {
    mcobradores: "",
    moficina: "",
    mtarjeta: "",
    mpolicia: ""
  };
  componentDidMount() {
    this.props.mCobradores();
    this.props.mOficina();
    this.props.mTarjeta();
    this.props.mPolicia();

    setTimeout(() => {
      const { mcobradores, moficina, mtarjeta, mpolicia } = this.props;

      this.setState({
        mcobradores: mcobradores[0],
        moficina: moficina[0],
        mtarjeta: mtarjeta[0],
        mpolicia: mpolicia[0]
      });
    }, 3500);
  }
  render() {
    const { mcobradores, moficina, mtarjeta, mpolicia } = this.state;
    return (
      <div className="containes ">
        <h1 className="mb-4 text-center">Mora Werchow</h1>

        {!mcobradores ? (
          <Spinner />
        ) : (
          <div className="jumbotron container">
            <h2>
              <strong> Mora de Cobradores</strong>
            </h2>
            <div className="d-flex justify-content-between text-center border list-group-item list-group-item-action list-group-item-dark">
              <div className="col-4">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-4">
                <strong>MORA</strong>
              </div>
              <div className="col-4">
                <strong>FICHAS EN MORA</strong>
              </div>
            </div>
            {mcobradores.map((mora, index) => (
              <div
                className="d-flex justify-content-between border text-center"
                key={index}
              >
                <div className="col-4">{mora.ZONA}</div>
                <div className="col-4">$ {mora.mora}</div>
                <div className="col-4">{mora.fichamora}</div>
              </div>
            ))}
          </div>
        )}

        <hr />

        {!moficina ? (
          <Spinner />
        ) : (
          <div className="jumbotron container">
            <h2>
              <strong> Mora de Oficina</strong>
            </h2>
            <div className="d-flex justify-content-between text-center border list-group-item list-group-item-action list-group-item-dark">
              <div className="col-4">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-4">
                <strong>MORA</strong>
              </div>
              <div className="col-4">
                <strong>FICHAS EN MORA</strong>
              </div>
            </div>
            {moficina.map((mora, index) => (
              <div
                className="d-flex justify-content-between border text-center"
                key={index}
              >
                <div className="col-4">{mora.ZONA}</div>
                <div className="col-4">$ {mora.mora}</div>
                <div className="col-4">{mora.fichamora}</div>
              </div>
            ))}
          </div>
        )}

        <hr />

        {!mtarjeta ? (
          <Spinner />
        ) : (
          <div className="jumbotron container">
            <h2>
              <strong> Mora de Tarjeta y Banco</strong>
            </h2>
            <div className="d-flex justify-content-between text-center border list-group-item list-group-item-action list-group-item-dark">
              <div className="col-4">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-4">
                <strong>MORA</strong>
              </div>
              <div className="col-4">
                <strong>FICHAS EN MORA</strong>
              </div>
            </div>
            {mtarjeta.map((mora, index) => (
              <div
                className="d-flex justify-content-between border text-center"
                key={index}
              >
                <div className="col-4">{mora.GRUPO}</div>
                <div className="col-4">$ {mora.mora}</div>
                <div className="col-4">{mora.fichamora}</div>
              </div>
            ))}
          </div>
        )}

        <hr />

        <hr />

        {!mpolicia ? (
          <Spinner />
        ) : (
          <div className="jumbotron container">
            <h2>
              <strong> Mora de Policia</strong>
            </h2>
            <div className="d-flex justify-content-between text-center border list-group-item list-group-item-action list-group-item-dark">
              <div className="col-4">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-4">
                <strong>MORA</strong>
              </div>
              <div className="col-4">
                <strong>FICHAS EN MORA</strong>
              </div>
            </div>
            {mpolicia.map((mora, index) => (
              <div
                className="d-flex justify-content-between border text-center"
                key={index}
              >
                <div className="col-4">{mora.GRUPO}</div>
                <div className="col-4">$ {mora.mora}</div>
                <div className="col-4">{mora.fichamora}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moficina: state.mora.moficina,
  mcobradores: state.mora.mcobradores,
  mtarjeta: state.mora.mtarjeta,
  mpolicia: state.mora.mpolicia,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    mOficina,
    mCobradores,
    mPolicia,
    mTarjeta
  }
)(Mora);
