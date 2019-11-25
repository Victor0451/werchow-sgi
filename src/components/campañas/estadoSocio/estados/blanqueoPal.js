import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcL from "../../../layouts/Table/Table3";

export default class BlanqueoPal extends Component {
  render() {
    const { BlanPalpala, crearCampana, flag } = this.props;
    return (
      <div>
        {BlanPalpala.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Blanqueos Palpala{" "}
              <span className="badge badge-pill badge-dark text-white">
                {BlanPalpala.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Blanqueos Palpala{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {BlanPalpala.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(BlanPalpala, 18)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(BlanPalpala, 45)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcL data={BlanPalpala} />
          </div>
        )}
      </div>
    );
  }
}
