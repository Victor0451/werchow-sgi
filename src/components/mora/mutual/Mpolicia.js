import React, { Component } from "react";
import Spinner from "../../layouts/Spinner";

export default class Mpolicia extends Component {
  render() {
    const { mpolicia, mbanconv } = this.props;

    return (
      <div>
        {!mpolicia ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Mora de Convenios y Policias</u>
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
                <strong>MORA</strong>
              </div>
              <div className="col-1">
                <strong>FICHAS</strong>
              </div>
              <div className="col-2">
                <strong>MORA REC.</strong>
              </div>
              <div className="col-1">
                <strong>FIC REC.</strong>
              </div>
              <div className="col-2">
                <strong>EFECTIVIDAD</strong>
              </div>
            </div>

            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">**</div>
              <div className="col-3">CONVENIOS</div>
              <div className="col-2">$ {mbanconv[0].mora}</div>
              <div className="col-1">{mbanconv[0].fichas}</div>
              <div className="col-2"> - </div>
              <div className="col-1"> - </div>
              <div className="col-2"> 0% </div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">**</div>
              <div className="col-3">POLICIA</div>
              <div className="col-2">$ {mpolicia[0].mora}</div>
              <div className="col-1">{mpolicia[0].fichas}</div>
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
                <strong>$ {mpolicia[0].mora + mbanconv[0].mora}</strong>
              </div>
              <div className="col-1">
                <strong>{mpolicia[0].fichas + mbanconv[0].fichas}</strong>
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
