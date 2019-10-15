import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcL from "../../../layouts/Table/Table3";

export default class RecPal extends Component {
  render() {
    const { ReinPalpala, crearCampana, flag } = this.props;
    return (
      <div>
        {ReinPalpala.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Reincidentes Palpala{" "}
              <span className="badge badge-pill badge-dark text-white">
                {ReinPalpala.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Reincidentes Palpala{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {ReinPalpala.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinPalpala, 8)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinPalpala, 40)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcL data={ReinPalpala} />
          </div>
        )}
      </div>
    );
  }
}
