import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtP from "../../../layouts/Table/Table3";

export default class AtSP extends Component {
  render() {
    const { AtSanPedro, crearCampana, flag } = this.props;
    return (
      <div>
        {AtSanPedro.length === 0 ? (
          <div className="border mt-4 p-2 mb-4">
            <h3>
              Atrasados San Pedro{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtSanPedro.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados San Pedro{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtSanPedro.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtSanPedro, 15)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtSanPedro, 32)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtP data={AtSanPedro} />
          </div>
        )}
      </div>
    );
  }
}
