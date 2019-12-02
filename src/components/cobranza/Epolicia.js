import React, { Component } from "react";
import Spinner from "../layouts/Spinner";

export default class Mpolicia extends Component {
  render() {
    const { epoliciap } = this.props;

    return (
      <div className="mt-4">
        {!epoliciap ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Efectividad de Convenios y Policias</u>
              </strong>
            </h5>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-1">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-3">
                {" "}
                <strong>BANCO</strong>
              </div>
              <div className="col-2">
                <strong>A COBRAR</strong>
              </div>
              <div className="col-1">
                <strong>FICHAS</strong>
              </div>
              <div className="col-2">
                <strong>COBRADO</strong>
              </div>
              <div className="col-1">
                <strong>FICHAS</strong>
              </div>
              <div className="col-2">
                <strong>EFECTIVIDAD</strong>
              </div>
            </div>

            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">**</div>
              <div className="col-3">CONVENIOS</div>
              <div className="col-2">$ </div>
              <div className="col-1"></div>
              <div className="col-2"> - </div>
              <div className="col-1"> - </div>
              <div className="col-2"> 0% </div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">**</div>
              <div className="col-3">POLICIA</div>
              <div className="col-2">$ {epoliciap[0].cobranza}</div>
              <div className="col-1">{epoliciap[0].fichas}</div>
              <div className="col-2"> - </div>
              <div className="col-1"> - </div>
              <div className="col-2"> 0% </div>
            </div>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-4">
                {" "}
                <strong>TOTAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {epoliciap[0].cobranza}</strong>
              </div>
              <div className="col-1">
                <strong>{epoliciap[0].fichas}</strong>
              </div>
              <div className="col-2">
                <strong>$ - </strong>
              </div>
              <div className="col-1">
                <strong> - </strong>
              </div>
              <div className="col-2">
                <strong>0%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
