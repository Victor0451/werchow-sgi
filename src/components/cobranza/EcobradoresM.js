import React, { Component } from "react";
import werchowlogo from "../../img/logom.jpg";
import moment from "moment";


export default class Mcobradores extends Component {
  render() {
    const {
      ecobradores,
      efectividadSsjM,
      efectividad,
      efecparcial,
      flag
    } = this.props;
    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD/MM/YYYY HH:mm:ss");
    console.log(ecobradores);

    return (
      <div>
        {ecobradores.length === 0 ? null : (
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
              <div className="col-1">
                <strong>C.ADEL</strong>
              </div>
              <div className="col-1">
                <strong>EFECT</strong>
              </div>
            </div>

            {flag === 3 ? (
              <div>
                {!ecobradores[1] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[1].zona}</div>
                    <div className="col-3">LEON MARCELO</div>
                    <div className="col-2">$ {ecobradores[1].total}</div>
                    <div className="col-1">{ecobradores[1].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[1].cobrado}</div>
                    <div className="col-1">{ecobradores[1].fichascob}</div>
                    <div className="col-1">$ {ecobradores[1].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 1)}% </div>
                  </div>
                )}
                {!ecobradores[2] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[7].zona}</div>
                    <div className="col-3">LUIS LEON</div>
                    <div className="col-2">$ {ecobradores[7].total}</div>
                    <div className="col-1">{ecobradores[7].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[7].cobrado}</div>
                    <div className="col-1">{ecobradores[7].fichascob}</div>
                    <div className="col-1">$ {ecobradores[7].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 7)}%</div>
                  </div>
                )}
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {ecobradores[1].total + ecobradores[7].total}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[1].fichas + ecobradores[7].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {ecobradores[1].cobrado + ecobradores[7].cobrado}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[1].fichascob + ecobradores[7].fichascob}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      $ {ecobradores[1].adelantado + ecobradores[7].adelantado}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividad(ecobradores, 1, 7)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                {!ecobradores[0] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[0].zona}</div>
                    <div className="col-3">PERICO GENARO</div>
                    <div className="col-2">$ {ecobradores[0].total}</div>
                    <div className="col-1">{ecobradores[0].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[0].cobrado}</div>
                    <div className="col-1">{ecobradores[0].fichascob}</div>
                    <div className="col-1">$ {ecobradores[0].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 0)}% </div>
                  </div>
                )}
                {/* {!ecobradores[13] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[13].zona}</div>
                    <div className="col-3">CRUZ MANUEL ALBERTO</div>
                    <div className="col-2">$ {ecobradores[13].total}</div>
                    <div className="col-1">{ecobradores[13].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[13].cobrado}</div>
                    <div className="col-1">{ecobradores[13].fichascob}</div>
                    <div className="col-1">$ {ecobradores[13].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 13)}%</div>
                  </div>
                )} */}

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {ecobradores[0].total}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{ecobradores[0].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {ecobradores[0].cobrado}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{ecobradores[0].fichascob}</strong>
                  </div>
                  <div className="col-1">
                    <strong>$ {ecobradores[0].adelantado}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efecparcial(ecobradores, 0)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                {!ecobradores[4] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[4].zona}</div>
                    <div className="col-3">CACHAMBE ALBERTO</div>
                    <div className="col-2">$ {ecobradores[4].total}</div>
                    <div className="col-1">{ecobradores[4].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[4].cobrado}</div>
                    <div className="col-1">{ecobradores[4].fichascob}</div>
                    <div className="col-1">$ {ecobradores[4].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 4)}% </div>
                  </div>
                )}
                {!ecobradores[10] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[10].zona}</div>
                    <div className="col-3">RIVADENEIRA</div>
                    <div className="col-2">$ {ecobradores[10].total}</div>
                    <div className="col-1">{ecobradores[10].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[10].cobrado}</div>
                    <div className="col-1">{ecobradores[10].fichascob}</div>
                    <div className="col-1">$ {ecobradores[10].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 10)}%</div>
                  </div>
                )}
                {/* {!ecobradores[16] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[16].zona}</div>
                    <div className="col-3">LA MENDIETA</div>
                    <div className="col-2">$ {ecobradores[16].total}</div>
                    <div className="col-1">{ecobradores[16].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[16].cobrado}</div>
                    <div className="col-1">{ecobradores[16].fichascob}</div>
                    <div className="col-1">$ {ecobradores[16].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 16)}%</div>
                  </div>
                )} */}

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {ecobradores[4].total + ecobradores[10].total}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[4].fichas + ecobradores[10].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {ecobradores[4].cobrado + ecobradores[10].cobrado}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[4].fichascob + ecobradores[10].fichascob}
                    </strong>
                  </div>
                  <div className="col-1">
                    ${ecobradores[4].adelantado + ecobradores[10].adelantado}
                  </div>
                  <div className="col-1">
                    <strong>{efectividad(ecobradores, 4, 10)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 1 ? (
              <div>
                {!ecobradores[2] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[2].zona}</div>
                    <div className="col-3">QUIROGA, JUAN PABLO</div>
                    <div className="col-2">$ {ecobradores[2].total}</div>
                    <div className="col-1">{ecobradores[2].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[2].cobrado}</div>
                    <div className="col-1">{ecobradores[2].fichascob}</div>
                    <div className="col-1">{ecobradores[2].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 2)}% </div>
                  </div>
                )}
                {!ecobradores[3] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[3].zona}</div>
                    <div className="col-3">RODRIGUEZ GUILLERMO</div>
                    <div className="col-2">$ {ecobradores[3].total}</div>
                    <div className="col-1">{ecobradores[3].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[3].cobrado}</div>
                    <div className="col-1">{ecobradores[3].fichascob}</div>
                    <div className="col-1">{ecobradores[3].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 3)}%</div>
                  </div>
                )}
                {!ecobradores[5] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[5].zona}</div>
                    <div className="col-3">ARANA PABLO</div>
                    <div className="col-2">$ {ecobradores[5].total}</div>
                    <div className="col-1">{ecobradores[5].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[5].cobrado}</div>
                    <div className="col-1">{ecobradores[5].fichascob}</div>
                    <div className="col-1">{ecobradores[5].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 5)}%</div>
                  </div>
                )}
                {!ecobradores[6] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[6].zona}</div>
                    <div className="col-3">TRUJILLO</div>
                    <div className="col-2">$ {ecobradores[6].total}</div>
                    <div className="col-1">{ecobradores[6].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[6].cobrado}</div>
                    <div className="col-1">{ecobradores[6].fichascob}</div>
                    <div className="col-1">{ecobradores[6].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 6)}%</div>
                  </div>
                )}
                {!ecobradores[8] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[8].zona}</div>
                    <div className="col-3">ARANA PABLO (A.COM)</div>
                    <div className="col-2">$ {ecobradores[8].total}</div>
                    <div className="col-1">{ecobradores[8].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[8].cobrado}</div>
                    <div className="col-1">{ecobradores[8].fichascob}</div>
                    <div className="col-1">{ecobradores[8].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 8)}%</div>
                  </div>
                )}
                {!ecobradores[9] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[9].zona}</div>
                    <div className="col-3">CRUZ ANSELMO</div>
                    <div className="col-2">$ {ecobradores[9].total}</div>
                    <div className="col-1">{ecobradores[9].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[9].cobrado}</div>
                    <div className="col-1">{ecobradores[9].fichascob}</div>
                    <div className="col-1">{ecobradores[9].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 9)}%</div>
                  </div>
                )}
                {!ecobradores[11] ? null : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">{ecobradores[11].zona}</div>
                    <div className="col-3">CHOQUE GUADALUPE</div>
                    <div className="col-2">$ {ecobradores[11].total}</div>
                    <div className="col-1">{ecobradores[11].fichas}</div>{" "}
                    <div className="col-2">$ {ecobradores[11].cobrado}</div>
                    <div className="col-1">{ecobradores[11].fichascob}</div>
                    <div className="col-1">{ecobradores[11].adelantado}</div>
                    <div className="col-1">{efecparcial(ecobradores, 11)}%</div>
                  </div>
                )}
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $
                      {ecobradores[2].total +
                        ecobradores[3].total +
                        ecobradores[5].total +
                        ecobradores[6].total +
                        ecobradores[8].total +
                        ecobradores[9].total +
                        ecobradores[11].total}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[2].fichas +
                        ecobradores[3].fichas +
                        ecobradores[5].fichas +
                        ecobradores[6].fichas +
                        ecobradores[8].fichas +
                        ecobradores[9].fichas +
                        ecobradores[11].fichas}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      ${" "}
                      {ecobradores[2].cobrado +
                        ecobradores[3].cobrado +
                        ecobradores[5].cobrado +
                        ecobradores[6].cobrado +
                        ecobradores[8].cobrado +
                        ecobradores[9].cobrado +
                        ecobradores[11].cobrado}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[2].fichascob +
                        ecobradores[3].fichascob +
                        ecobradores[5].fichascob +
                        ecobradores[6].fichascob +
                        ecobradores[8].fichascob +
                        ecobradores[9].fichascob +
                        ecobradores[11].fichascob}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {ecobradores[2].adelantado +
                        ecobradores[3].adelantado +
                        ecobradores[5].adelantado +
                        ecobradores[6].adelantado +
                        ecobradores[8].adelantado +
                        ecobradores[9].adelantado +
                        ecobradores[11].adelantado}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {efectividadSsjM(ecobradores, [2, 3, 5, 6, 8, 9, 11])}%
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
