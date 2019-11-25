import React, { Component } from "react";
import Spinner from "../../layouts/Spinner";

export default class Mpolicia extends Component {
  render() {
    const {
      mbanconv,
      totalfichas,
      totalmora,
      totalfichasrec,
      totalmorarec,
      efectividad,
      efecparcial
    } = this.props;

    return (
      <div>
        {!mbanconv ? (
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
              <div className="col-2">${mbanconv[0].morarec}</div>
              <div className="col-1">{mbanconv[0].fichasrec}</div>
              <div className="col-2"> {efecparcial(mbanconv, 0)}% </div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">**</div>
              <div className="col-3">POLICIA</div>
              <div className="col-2">$ {mbanconv[2].mora}</div>
              <div className="col-1">{mbanconv[2].fichas}</div>
              <div className="col-2">${mbanconv[2].morarec}</div>
              <div className="col-1">{mbanconv[2].fichasrec}</div>
              <div className="col-2"> {efecparcial(mbanconv, 2)}% </div>
            </div>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-4">
                {" "}
                <strong>TOTAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {totalmora(mbanconv)} </strong>
              </div>
              <div className="col-1">
                <strong>{totalfichas(mbanconv)}</strong>
              </div>
              <div className="col-2">
                <strong>$ {totalmorarec(mbanconv)} </strong>
              </div>
              <div className="col-1">
                <strong> {totalfichasrec(mbanconv)} </strong>
              </div>
              <div className="col-2">
                <strong>{efectividad(mbanconv)}%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
