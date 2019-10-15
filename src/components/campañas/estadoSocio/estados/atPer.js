import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtR from "../../../layouts/Table/Table3";

export default class AtPer extends Component {
  render() {
    const { AtPerico, crearCampana, flag } = this.props;
    return (
      <div>
        {AtPerico.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Atrasados Perico{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtPerico.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              {" "}
              <h3>
                Atrasados Perico{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtPerico.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtPerico, 14)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtPerico, 31)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtR data={AtPerico} />
          </div>
        )}
      </div>
    );
  }
}
