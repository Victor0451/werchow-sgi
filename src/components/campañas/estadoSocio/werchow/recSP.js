import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcSPE from "../../../layouts/Table/Table3";

export default class RecSP extends Component {
  render() {
    const { RecSanPedro, crearCampana } = this.props;
    return (
      <div>
        {RecSanPedro.length === 0 ? (
          <div className="border mt-4 p-2 mb-4">
            <h3>
              1001 San Pedro{" "}
              <span className="badge badge-pill badge-dark text-white">
                {RecSanPedro.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                1001 San Pedro{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {RecSanPedro.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(RecSanPedro, 5)}
              >
                Crear Campaña
              </button>
            </div>
            <RcSPE data={RecSanPedro} />
          </div>
        )}
      </div>
    );
  }
}
