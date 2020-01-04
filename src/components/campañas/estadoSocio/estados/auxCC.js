import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtW from "../../../layouts/Table/Table3";

export default class AtCC extends Component {
  render() {
    const {
      AuxCasaCentralMG,
      AuxCasaCentralGG,
      crearCampana,
      flag
    } = this.props;

    return (
      <div>
        {AuxCasaCentralMG.length === 0 ? (
          <div className=" border mt-4 p-2">
            <h3>
              Campaña Auxiliar Casa Central Magia Galian{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AuxCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Campaña Auxiliar Casa Central Magia Galian{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AuxCasaCentralMG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxCasaCentralMG, 22)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxCasaCentralMG, 28)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={AuxCasaCentralMG} />
          </div>
        )}

        <hr />

        {AuxCasaCentralGG.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              Campaña Auxiliar Casa Central Gisela Gimenez{" "}
              <span className="badge badge-pill badge-dark text-white">
                {AuxCasaCentralMG.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Campaña Auxiliar Casa Central Gisela Gimenez{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {AuxCasaCentralGG.length}
                </span>
              </h3>
              {flag === 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxCasaCentralGG, 23)}
                >
                  Crear Campaña Werchow
                </button>
              ) : flag === 2 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => crearCampana(AuxCasaCentralGG, 29)}
                >
                  Crear Campaña Mutual
                </button>
              ) : null}
            </div>
            <AtW data={AuxCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
