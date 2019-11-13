import React, { Component } from "react";
import Spinner from "../../layouts/Spinner";

export default class Moficina extends Component {
  render() {
    const {
      moficina,
      totalfichas,
      totalmora,
      totalfichasrec,
      totalmorarec,
      efectividad,
      efecparcial
    } = this.props;
    return (
      <div>
        {!moficina ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Mora de Oficina</u>
              </strong>
            </h5>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-1">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-3">
                {" "}
                <strong>OFICINA</strong>
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
              <div className="col-1">{moficina[2].zona}</div>
              <div className="col-3">PERICO</div>
              <div className="col-2">$ {moficina[2].mora}</div>
              <div className="col-1">{moficina[2].fichas}</div>
              <div className="col-2">$ {moficina[2].morarec}</div>
              <div className="col-1">{moficina[2].fichasrec}</div>
              <div className="col-2">{efecparcial(moficina, 2)}%</div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">{moficina[0].zona}</div>
              <div className="col-3">CASA CENTRAL</div>
              <div className="col-2">$ {moficina[0].mora}</div>
              <div className="col-1">{moficina[0].fichas}</div>
              <div className="col-2">$ {moficina[0].morarec}</div>
              <div className="col-1">{moficina[0].fichasrec}</div>
              <div className="col-2">{efecparcial(moficina, 0)}%</div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">{moficina[1].zona}</div>
              <div className="col-3">PALPALA</div>
              <div className="col-2">$ {moficina[1].mora}</div>
              <div className="col-1">{moficina[1].fichas}</div>
              <div className="col-2">$ {moficina[1].morarec}</div>
              <div className="col-1">{moficina[1].fichasrec}</div>
              <div className="col-2">{efecparcial(moficina, 1)}%</div>
            </div>
            <div className="d-flex justify-content-between border-bottom text-center">
              <div className="col-1">{moficina[3].zona}</div>
              <div className="col-3">SAN PEDRO</div>
              <div className="col-2">$ {moficina[3].mora}</div>
              <div className="col-1">{moficina[3].fichas}</div>
              <div className="col-2">$ {moficina[3].morarec}</div>
              <div className="col-1">{moficina[3].fichasrec}</div>
              <div className="col-2">{efecparcial(moficina, 3)}%</div>
            </div>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-4">
                {" "}
                <strong>TOTAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {totalmora(moficina)}</strong>
              </div>
              <div className="col-1">
                <strong>{totalfichas(moficina)}</strong>
              </div>
              <div className="col-2">
                <strong>$ {totalmorarec(moficina)}</strong>
              </div>
              <div className="col-1">
                <strong>{totalfichasrec(moficina)}</strong>
              </div>
              <div className="col-2">
                <strong>{efectividad(moficina)}%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
