import React, { Component } from "react";
import Spinner from "../layouts/Spinner";
import werchowlogo from "../../img/logo.png";
import moment from "moment";

export default class Mcobradores extends Component {
  render() {
    const {
      ecobradores,
      ecobradorescob,
      efecparcial,
      efectividad,
      efectividad3M,
      flag
    } = this.props;
    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD/MM/YYYY HH:mm:ss");

    return (
      <div>
        {!ecobradores ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4 d-flex justify-content-between">
              <strong>
                <u> Efectividad de Cobradores</u>
              </strong>
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

            {flag === 3 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[1].zona}</div>
                  <div className="col-3">LEON MARCELO</div>
                  <div className="col-2">$ {ecobradores[1].cobranza}</div>
                  <div className="col-1">{ecobradores[1].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[1].cobranza}</div>
                  <div className="col-1">{ecobradorescob[1].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 1)}%{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[2].zona}</div>
                  <div className="col-3">LUIS LEON</div>
                  <div className="col-2">$ {ecobradores[2].cobranza}</div>
                  <div className="col-1">{ecobradores[2].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[2].cobranza}</div>
                  <div className="col-1">{ecobradorescob[2].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 2)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {ecobradores[1].cobranza + ecobradores[2].cobranza}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[1].fichas + ecobradores[2].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {ecobradorescob[1].cobranza + ecobradorescob[2].cobranza}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradorescob[1].fichas + ecobradorescob[2].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      {efectividad(ecobradores, ecobradorescob, 1, 2)}%
                    </strong>
                  </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[0].zona}</div>
                  <div className="col-3">PERICO GENARO</div>
                  <div className="col-2">$ {ecobradores[0].cobranza}</div>
                  <div className="col-1">{ecobradores[0].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[0].cobranza}</div>
                  <div className="col-1">{ecobradorescob[0].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 0)}%{" "}
                  </div>
                </div>

                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[13].zona}</div>
                  <div className="col-3">CRUZ MANUEL ALBERTO</div>
                  <div className="col-2">$ {ecobradores[13].cobranza}</div>
                  <div className="col-1">{ecobradores[13].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[13].cobranza}</div>
                  <div className="col-1">{ecobradorescob[13].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 13)}%
                  </div>
                </div> */}

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      {/* $ {ecobradores[0].cobranza + ecobradores[13].cobranza} */}
                      $ {ecobradores[0].cobranza}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {/* {ecobradores[0].fichas + ecobradores[13].fichas} */}
                      {ecobradores[0].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {/* {ecobradorescob[0].cobranza + ecobradorescob[13].cobranza} */}
                      {ecobradorescob[0].cobranza}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {/* {ecobradorescob[0].fichas + ecobradorescob[13].fichas} */}
                      {ecobradorescob[0].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      {/* {efectividad(ecobradores, ecobradorescob, 0, 13)}% */}
                      {efecparcial(ecobradores, ecobradorescob, 0)}%
                    </strong>
                  </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[6].zona}</div>
                  <div className="col-3">CACHAMBE ALBERTO</div>
                  <div className="col-2">$ {ecobradores[6].cobranza}</div>
                  <div className="col-1">{ecobradores[6].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[6].cobranza}</div>
                  <div className="col-1">{ecobradorescob[6].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 6)}%{" "}
                  </div>
                </div>

                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[15].zona}</div>
                  <div className="col-3">RIVADENEIRA</div>
                  <div className="col-2">$ {ecobradores[15].cobranza}</div>
                  <div className="col-1">{ecobradores[15].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[15].cobranza}</div>
                  <div className="col-1">{ecobradorescob[15].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 15)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[16].zona}</div>
                  <div className="col-3">LA MENDIETA</div>
                  <div className="col-2">$ {ecobradores[16].cobranza}</div>
                  <div className="col-1">{ecobradores[16].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[16].cobranza}</div>
                  <div className="col-1">{ecobradorescob[16].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 16)}%
                  </div>
                </div> */}

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {ecobradores[6].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{ecobradores[6].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {ecobradorescob[6].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{ecobradorescob[6].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      {efecparcial(ecobradores, ecobradorescob, 6)}%
                    </strong>
                  </div>
                </div>
              </div>
            ) : flag === 1 ? (
              <div>
                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[3].zona}</div>
                  <div className="col-3">MARIANA GAZQUEZ</div>
                  <div className="col-2">$ {ecobradores[3].cobranza}</div>
                  <div className="col-1">{ecobradores[3].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[3].cobranza}</div>
                  <div className="col-1">{ecobradorescob[3].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 3)}%{" "}
                  </div>
                </div> */}

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[2].zona}</div>
                  <div className="col-3">CHOQUE GUADALUPE</div>
                  <div className="col-2">$ {ecobradores[2].cobranza}</div>
                  <div className="col-1">{ecobradores[2].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[2].cobranza}</div>
                  <div className="col-1">{ecobradorescob[2].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 2)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[3].zona}</div>
                  <div className="col-3">RODRIGUEZ GUILLERMO</div>
                  <div className="col-2">$ {ecobradores[3].cobranza}</div>
                  <div className="col-1">{ecobradores[3].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[3].cobranza}</div>
                  <div className="col-1">{ecobradorescob[3].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 3)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[5].zona}</div>
                  <div className="col-3">ARANA PABLO</div>
                  <div className="col-2">$ {ecobradores[5].cobranza}</div>
                  <div className="col-1">{ecobradores[5].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[5].cobranza}</div>
                  <div className="col-1">{ecobradorescob[5].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 5)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[6].zona}</div>
                  <div className="col-3">TRUJILLO</div>
                  <div className="col-2">$ {ecobradores[6].cobranza}</div>
                  <div className="col-1">{ecobradores[6].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[6].cobranza}</div>
                  <div className="col-1">{ecobradorescob[6].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 6)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[7].zona}</div>
                  <div className="col-3">LUIS LEON</div>
                  <div className="col-2">$ {ecobradores[7].cobranza}</div>
                  <div className="col-1">{ecobradores[7].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[7].cobranza}</div>
                  <div className="col-1">{ecobradorescob[7].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 7)}%
                  </div>
                </div>

                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[10].zona}</div>
                  <div className="col-3">RODRIGUEZ GUILLERMO</div>
                  <div className="col-2">$ {ecobradores[10].cobranza}</div>
                  <div className="col-1">{ecobradores[10].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[10].cobranza}</div>
                  <div className="col-1">{ecobradorescob[10].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 10)}%
                  </div>
                </div> */}

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[8].zona}</div>
                  <div className="col-3">ARANA PABLO (A COM.)</div>
                  <div className="col-2">$ {ecobradores[8].cobranza}</div>
                  <div className="col-1">{ecobradores[8].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[8].cobranza}</div>
                  <div className="col-1">{ecobradorescob[8].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 8)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[9].zona}</div>
                  <div className="col-3">CRUZ ANSELMO</div>
                  <div className="col-2">$ {ecobradores[9].cobranza}</div>
                  <div className="col-1">{ecobradores[9].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[9].cobranza}</div>
                  <div className="col-1">{ecobradorescob[9].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 9)}%
                  </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[10].zona}</div>
                  <div className="col-3">RIVADENEIRA (S. CLARA)</div>
                  <div className="col-2">$ {ecobradores[10].cobranza}</div>
                  <div className="col-1">{ecobradores[10].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[10].cobranza}</div>
                  <div className="col-1">{ecobradorescob[10].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 10)}%
                  </div>
                </div>
                {/* 
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[17].zona}</div>
                  <div className="col-3">TRUJILLO X</div>
                  <div className="col-2">$ {ecobradores[17].cobranza}</div>
                  <div className="col-1">{ecobradores[17].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[17].cobranza}</div>
                  <div className="col-1">{ecobradorescob[17].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 17)}%
                  </div>
                </div> */}
                {!ecobradorescob[11] ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[11].zona}</div>
                    <div className="col-3">CHOQUE GUADALUPE</div>
                    <div className="col-2">$ {ecobradores[11].cobranza}</div>
                    <div className="col-1">{ecobradores[11].fichas}</div>{" "}
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[11].zona}</div>
                    <div className="col-3">CHOQUE GUADALUPE</div>
                    <div className="col-2">$ {ecobradores[11].cobranza}</div>
                    <div className="col-1">{ecobradores[11].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradorescob[11].cobranza}</div>
                    <div className="col-1">{ecobradorescob[11].fichas}</div>
                    <div className="col-2">
                      {efecparcial(ecobradores, ecobradorescob, 11)}%
                    </div>
                  </div>
                )}

                {/* 
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{ecobradores[19].zona}</div>
                  <div className="col-3">LEON X</div>
                  <div className="col-2">$ {ecobradores[19].cobranza}</div>
                  <div className="col-1">{ecobradores[19].fichas}</div>{" "}
                  <div className="col-2">$ {ecobradorescob[19].cobranza}</div>
                  <div className="col-1">{ecobradorescob[19].fichas}</div>
                  <div className="col-2">
                    {efecparcial(ecobradores, ecobradorescob, 19)}%
                  </div>
                </div> */}
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $
                      {ecobradores[2].cobranza +
                        ecobradores[3].cobranza +
                        ecobradores[5].cobranza +
                        ecobradores[6].cobranza +
                        ecobradores[7].cobranza +
                        ecobradores[8].cobranza +
                        ecobradores[9].cobranza +
                        ecobradores[10].cobranza +
                        ecobradores[11].cobranza}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[2].fichas +
                        ecobradores[3].fichas +
                        ecobradores[5].fichas +
                        ecobradores[6].fichas +
                        ecobradores[7].fichas +
                        ecobradores[8].fichas +
                        ecobradores[9].fichas +
                        ecobradores[10].fichas +
                        ecobradores[11].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {ecobradorescob[2].cobranza +
                        ecobradorescob[3].cobranza +
                        ecobradorescob[5].cobranza +
                        ecobradorescob[6].cobranza +
                        ecobradorescob[7].cobranza +
                        ecobradorescob[8].cobranza +
                        ecobradorescob[9].cobranza +
                        ecobradorescob[10].cobranza }
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradorescob[2].fichas +
                        ecobradorescob[3].fichas +
                        ecobradorescob[5].fichas +
                        ecobradorescob[6].fichas +
                        ecobradorescob[7].fichas +
                        ecobradorescob[8].fichas +
                        ecobradorescob[9].fichas +
                        ecobradorescob[10].fichas 
                       }
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      {efectividad3M(ecobradores, ecobradorescob, [
                        2,
                        3,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11
                      ])}
                      %
                    </strong>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
