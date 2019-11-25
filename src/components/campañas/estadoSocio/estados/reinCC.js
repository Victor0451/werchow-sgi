import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcW from "../../../layouts/Table/Table3";

export default class RecCC extends Component {
  render() {
    const { ReinCasaCentralGG, ReinCasaCentralMG, crearCampana, flag } = this.props;
    return (
      <div>
        {ReinCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
            Reincidentes Casa Central Magia Galian{" "}
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
               Reincidentes Casa Central Magia Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {ReinCasaCentralMG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinCasaCentralMG, 6)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinCasaCentralMG, 38)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcW data={ReinCasaCentralMG} />
          </div>
        )}

        <hr />

        {ReinCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Reincidentes Casa Central Gisela Gimenez{" "}
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
               Reincidentes Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {ReinCasaCentralGG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinCasaCentralGG, 7)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(ReinCasaCentralGG, 39)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcW data={ReinCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
