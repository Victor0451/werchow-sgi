import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtL from "../../../layouts/Table/Table3";

export default class AtPal extends Component {
  render() {
    const { AtPalpala, crearCampana, flag } = this.props;
    return (
      <div>
        {AtPalpala.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Atrasados Palpala{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtPalpala.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados Palpala{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtPalpala.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtPalpala, 13)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtPalpala, 30)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtL data={AtPalpala} />
          </div>
        )}
      </div>
    );
  }
}
