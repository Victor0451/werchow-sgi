import React, { Component } from "react";
import Spinner from "../../../layouts/Spinner";
import RcL from "../../../layouts/Table/Table3";

export default class RecPal extends Component {
  render() {
    const { RecPalpala, crearCampana } = this.props;
    return (
      <div>
        {RecPalpala.length === 0 ? (
          <div className="border mt-4 p-2">
            <h3>
              1001 Palpala{" "}
              <span className="badge badge-pill badge-dark text-white">
                {RecPalpala.length}
              </span>
            </h3>
            <Spinner />
          </div>
        ) : (
          <div className="mt-4">
            <div className="d-flex justify-content-between">
              <h3>
                Atrasados Palpala{" "}
                <span className="badge badge-pill badge-dark text-white">
                  {RecPalpala.length}
                </span>
              </h3>
              <button
                className="btn btn-primary"
                onClick={() => crearCampana(RecPalpala, 3)}
              >
                Crear Campaña
              </button>
            </div>
            <RcL data={RecPalpala} />
          </div>
        )}
      </div>
    );
  }
}
