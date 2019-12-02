import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtW from "../../../layouts/Table/Table3";

export default class AtCC extends Component {
  render() {
    const {
      PoliCasaCentralMG,
      PoliCasaCentralGG,
      PoliCasaCentralAT,
      crearCampana,
      flag
    } = this.props;

    return (
      <div>
        {PoliCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              Policias Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Policias Casa Central Magia Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliCasaCentralMG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralMG, 50)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralMG, 28)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={PoliCasaCentralMG} />
          </div>
        )}

        <hr />
        {PoliCasaCentralAT.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              Policias Casa Central Alejandra Tejerina{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliCasaCentralAT.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Policias Casa Central Alejandra Tejerina{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliCasaCentralAT.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralAT, 52)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralAT, 49)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={PoliCasaCentralAT} />
          </div>
        )}
        <hr />

        {PoliCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Policias Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {PoliCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Policias Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {PoliCasaCentralGG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralGG, 51)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(PoliCasaCentralGG, 29)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={PoliCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
