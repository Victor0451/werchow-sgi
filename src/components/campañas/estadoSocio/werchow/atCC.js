import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import AtW from "../../../layouts/Table/Table3";

export default class AtCC extends Component {
  render() {
    const { AtCasaCentralMG, AtCasaCentralGG, crearCampana } = this.props;
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
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(AtCasaCentralMG, 11)}
              >
                Crear Campaña
              </button>
            </div>
            <AtW data={AtCasaCentralMG} />
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
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(AtCasaCentralGG, 12)}
              >
                Crear Campaña
              </button>
            </div>
            <AtW data={AtCasaCentralGG} />
          </div>
        )}
      </div>
    );
  }
}
