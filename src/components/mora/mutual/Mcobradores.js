import React, { Component } from "react";
import Spinner from "../../layouts/Spinner";
import werchowlogo from "../../../img/logom.jpg";
import moment from "moment";

export default class Mcobradores extends Component {
  render() {
    const {
      mcobradores,
      totalfichas,
      totalmora,
      totalfichasrec,
      totalmorarec,
      efecparcial,
      efectividad,
      mes
    } = this.props;
    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD/MM/YYYY HH:mm:ss");
    return (
      <div>
        {!mcobradores ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4 d-flex justify-content-between">
              <strong>
                <u> Mora de Cobradores</u>
              </strong>
              <div className="h6">MES: {mes}</div>
              <div className="h6">{fecha}</div>
              <img className="mutuallogo" src={werchowlogo} alt="werchowlogo" />
            </h5>
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-1">
                {" "}
                <strong>ZONA</strong>
              </div>
              <div className="col-3">
                {" "}
                <strong>COBRADORES</strong>
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
            {!mcobradores[4] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[4].zona}</div>
                <div className="col-3">CACHAMBE ALBERTO</div>
                <div className="col-2">$ {mcobradores[4].mora}</div>
                <div className="col-1">{mcobradores[4].fichas}</div>
                <div className="col-2">$ {mcobradores[4].morarec}</div>
                <div className="col-1">{mcobradores[4].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 4)}% </div>
              </div>
            )}
            {!mcobradores[3] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[3].zona}</div>
                <div className="col-3">RODRIGUEZ GUILLERMO</div>
                <div className="col-2">$ {mcobradores[3].mora}</div>
                <div className="col-1">{mcobradores[3].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[3].morarec}</div>
                <div className="col-1">{mcobradores[3].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 3)}% </div>
              </div>
            )}
            {!mcobradores[0] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[0].zona}</div>
                <div className="col-3">PERICO NARVAEZ GENARO</div>
                <div className="col-2">$ {mcobradores[0].mora}</div>
                <div className="col-1">{mcobradores[0].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[0].morarec}</div>
                <div className="col-1">{mcobradores[0].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 0)}% </div>
              </div>
            )}
            {!mcobradores[5] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[5].zona}</div>
                <div className="col-3">ARANA PABLO</div>
                <div className="col-2">$ {mcobradores[5].mora}</div>
                <div className="col-1">{mcobradores[5].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[5].morarec}</div>
                <div className="col-1">{mcobradores[5].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 5)}% </div>
              </div>
            )}
            {!mcobradores[8] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[8].zona}</div>
                <div className="col-3">CRUZ ANSELMO</div>
                <div className="col-2">$ {mcobradores[8].mora}</div>
                <div className="col-1"> {mcobradores[8].fichas} </div>
                <div className="col-2">$ {mcobradores[8].morarec}</div>
                <div className="col-1">{mcobradores[8].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 8)}% </div>
              </div>
            )}
            {!mcobradores[7] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[7].zona}</div>
                <div className="col-3">LUIS LEON</div>
                <div className="col-2">$ {mcobradores[7].mora}</div>
                <div className="col-1">{mcobradores[7].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[7].morarec}</div>
                <div className="col-1">{mcobradores[7].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 7)}% </div>
              </div>
            )}
            {!mcobradores[6] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[6].zona}</div>
                <div className="col-3">TRUJILLO</div>
                <div className="col-2">$ {mcobradores[6].mora}</div>
                <div className="col-1">{mcobradores[6].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[6].morarec}</div>
                <div className="col-1">{mcobradores[6].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 6)}% </div>
              </div>
            )}
            {!mcobradores[2] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[2].zona}</div>
                <div className="col-3">QUIROGA JUAN PABLO</div>
                <div className="col-2">$ {mcobradores[2].mora}</div>
                <div className="col-1">{mcobradores[2].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[2].morarec}</div>
                <div className="col-1">{mcobradores[2].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 2)}% </div>
              </div>
            )}
            {!mcobradores[1] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[1].zona}</div>
                <div className="col-3">LEON MARCELO</div>
                <div className="col-2">$ {mcobradores[1].mora}</div>
                <div className="col-1">{mcobradores[1].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[1].morarec}</div>
                <div className="col-1">{mcobradores[1].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 1)}% </div>
              </div>
            )}
            {!mcobradores[9] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">{mcobradores[9].zona}</div>
                <div className="col-3">CHOQUE GUADALUPE</div>
                <div className="col-2">$ {mcobradores[9].mora}</div>
                <div className="col-1">{mcobradores[9].fichas}</div>{" "}
                <div className="col-2">$ {mcobradores[9].morarec}</div>
                <div className="col-1">{mcobradores[9].fichasrec}</div>
                <div className="col-2"> {efecparcial(mcobradores, 9)}% </div>
              </div>
            )}

            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-4">
                {" "}
                <strong>TOTAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {totalmora(mcobradores)}</strong>
              </div>
              <div className="col-1">
                <strong>{totalfichas(mcobradores)}</strong>
              </div>
              <div className="col-2">
                <strong>$ {totalmorarec(mcobradores)}</strong>
              </div>
              <div className="col-1">
                <strong> {totalfichasrec(mcobradores)}</strong>
              </div>
              <div className="col-2">
                <strong>{efectividad(mcobradores)}%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
