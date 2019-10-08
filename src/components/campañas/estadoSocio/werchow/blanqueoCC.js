import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcW from "../../../layouts/Table/Table3";

export default class BlanqueoCC extends Component {
  render() {
    const { BlanCasaCentralGG, BlanCasaCentralMG, crearCampana } = this.props;
    return (
      <div>
        {BlanCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
             1001 Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {BlanCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                1001 Casa Central Magia Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {BlanCasaCentralMG.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(BlanCasaCentralMG, 16)}
              >
                Crear Campaña
              </button>
            </div>
            <RcW data={BlanCasaCentralMG} />
          </div>
        )}

        <hr />

        {BlanCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              1001 Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {BlanCasaCentralGG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
               1001 Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {BlanCasaCentralGG.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(BlanCasaCentralGG, 17)}
              >
                Crear Campaña
              </button>
            </div>
            <RcW data={BlanCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
