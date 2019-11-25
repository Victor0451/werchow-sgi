import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcR from "../../../layouts/Table/Table3";

export default class RecPer extends Component {
  render() {
    const { RecPerico, crearCampana, flag } = this.props;
    return (
      <div>
        {RecPerico.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              1001 Perico{" "}
              <span className="badge badge-pill badge-dark text-white">
                {RecPerico.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h3>
                1001 Perico{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {RecPerico.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecPerico, 4)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecPerico, 36)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcR data={RecPerico} />
          </div>
        )}
      </div>
    );
  }
}
