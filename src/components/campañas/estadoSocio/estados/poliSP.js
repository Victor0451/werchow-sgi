import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtP from "../../../layouts/Table/Table3";

export default class AtSP extends Component {
  render() {
    const { PoliSanPedro, crearCampana, flag } = this.props;
    return (
      <div>
        {PoliSanPedro.length === 0 ? (
          <div className="border mt-4 p-2 mb-4">
            <h3>
              Policias San Pedro{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliSanPedro.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Policias San Pedro{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliSanPedro.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliSanPedro, 55)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliSanPedro, 32)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtP data={PoliSanPedro} />
          </div>
        )}
      </div>
    );
  }
}
