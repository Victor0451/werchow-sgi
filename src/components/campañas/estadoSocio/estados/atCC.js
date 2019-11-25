import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtW from "../../../layouts/Table/Table3";

export default class AtCC extends Component {
  render() {
    const {
      AtCasaCentralMG,
      AtCasaCentralGG,
      AtCasaCentralAT,
      crearCampana,
      flag
    } = this.props;

    return (
      <div>
        {AtCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              Atrasados Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados Casa Central Magia Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtCasaCentralMG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralMG, 11)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralMG, 28)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={AtCasaCentralMG} />
          </div>
        )}

        <hr />
        {AtCasaCentralAT.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              Atrasados Casa Central Alejandra Tejerina{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtCasaCentralAT.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados Casa Central Alejandra Tejerina{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtCasaCentralAT.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralAT, 48)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralAT, 49)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={AtCasaCentralAT} />
          </div>
        )}
        <hr />

        {AtCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Atrasados Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AtCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AtCasaCentralGG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralGG, 12)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AtCasaCentralGG, 29)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={AtCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
