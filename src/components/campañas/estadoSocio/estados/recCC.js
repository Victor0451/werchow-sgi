import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcW from "../../../layouts/Table/Table3";

export default class RecCC extends Component {
  render() {
    const {
      RecCasaCentralGG,
      RecCasaCentralMG,
      crearCampana,
      flag
    } = this.props;
    return (
      <div>
        {RecCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              1001 Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {RecCasaCentralMG.length}
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
                  {RecCasaCentralMG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecCasaCentralMG, 1)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecCasaCentralMG, 33)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcW data={RecCasaCentralMG} />
          </div>
        )}

        <hr />

        {RecCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              1001 Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {RecCasaCentralGG.length}
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
                  {RecCasaCentralGG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecCasaCentralGG, 2)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(RecCasaCentralGG, 34)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <RcW data={RecCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
