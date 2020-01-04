import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtP from "../../../layouts/Table/Table3";

export default class AtSP extends Component {
  render() {
    const { AuxSanPedro, crearCampana, flag } = this.props;
    return (
      <div>
        {AuxSanPedro.length === 0 ? (
          <div className="border mt-4 p-2 mb-4">
            <h3>
              Campaña Auxiliar San Pedro{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AuxSanPedro.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Campaña Auxiliar San Pedro{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AuxSanPedro.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxSanPedro, 26)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxSanPedro, 32)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtP data={AuxSanPedro} />
          </div>
        )}
      </div>
    );
  }
}
