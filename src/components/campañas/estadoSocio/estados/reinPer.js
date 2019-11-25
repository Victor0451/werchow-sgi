import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcR from "../../../layouts/Table/Table3";

export default class RecPer extends Component {
  render() {
    const { ReinPerico, crearCampana, flag } = this.props;
    return (
      <div>
        {ReinPerico.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Reincidentes Perico{" "}
              <span className="badge badge-pill badge-dark text-white">
                {ReinPerico.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h3>
                Reincidentes Perico{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {ReinPerico.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinPerico, 9)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinPerico, 41)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcR data={ReinPerico} />
          </div>
        )}
      </div>
    );
  }
}
