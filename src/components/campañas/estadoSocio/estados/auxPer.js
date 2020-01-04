import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtR from "../../../layouts/Table/Table3";

export default class AtPer extends Component {
  render() {
    const { AuxPerico, crearCampana, flag } = this.props;
    return (
      <div>
        {AuxPerico.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Campaña Auxiliar Perico{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AuxPerico.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h3>
                Campaña Auxiliar Perico{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AuxPerico.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxPerico, 25)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxPerico, 31)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtR data={AuxPerico} />
          </div>
        )}
      </div>
    );
  }
}
