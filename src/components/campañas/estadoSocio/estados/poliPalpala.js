import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtL from "../../../layouts/Table/Table3";

export default class AtPal extends Component {
  render() {
    const { PoliPalpala, crearCampana, flag } = this.props;
    return (
      <div>
        {PoliPalpala.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Policias Palpala{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliPalpala.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Policia Palpala{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliPalpala.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliPalpala, 53)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliPalpala, 30)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtL data={PoliPalpala} />
          </div>
        )}
      </div>
    );
  }
}
