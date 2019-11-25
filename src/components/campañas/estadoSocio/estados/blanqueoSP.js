import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcSPE from "../../../layouts/Table/Table3";

export default class BlanqueoSP extends Component {
  render() {
    const { BlanSanPedro, crearCampana, flag } = this.props;
    return (
      <div>
        {BlanSanPedro.length === 0 ? (
          <div className="border mt-4 p-2 mb-4">
            <h3>
              Blanqueos San Pedro{" "}
              <span className="badge badge-pill badge-dark text-white">
                {BlanSanPedro.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Blanqueos San Pedro{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {BlanSanPedro.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(BlanSanPedro, 20)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(BlanSanPedro, 47)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcSPE data={BlanSanPedro} />
          </div>
        )}
      </div>
    );
  }
}
