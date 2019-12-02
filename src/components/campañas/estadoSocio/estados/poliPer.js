import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtR from "../../../layouts/Table/Table3";

export default class AtPer extends Component {
  render() {
    const { PoliPerico, crearCampana, flag } = this.props;
    return (
      <div>
        {PoliPerico.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Policias Perico{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliPerico.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h3>
                Policias Perico{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliPerico.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliPerico, 54)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliPerico, 31)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtR data={PoliPerico} />
          </div>
        )}
      </div>
    );
  }
}
