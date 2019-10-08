import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcW from "../../../layouts/Table/Table3";

export default class RecCC extends Component {
  render() {
    const { ReinCasaCentralGG, ReinCasaCentralMG, crearCampana } = this.props;
    return (
      <div>
        {ReinCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
             1001 Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {ReinCasaCentralMG.length}
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
                  {ReinCasaCentralMG.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(ReinCasaCentralMG, 6)}
              >
                Crear Campaña
              </button>
            </div>
            <RcW data={ReinCasaCentralMG} />
          </div>
        )}

        <hr />

        {ReinCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              1001 Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {ReinCasaCentralGG.length}
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
                  {ReinCasaCentralGG.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(ReinCasaCentralGG, 7)}
              >
                Crear Campaña
              </button>
            </div>
            <RcW data={ReinCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
