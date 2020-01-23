import React, { Component } from "react";
import {
  total1indexacob,
  total1indexfichas,
  total1indexcobrado
} from "./funciones";

export default class Mbanco extends Component {
  render() {
    const {
      etarjeta,
      total,
      totalfichas,
      totalcobrado,
      totalfichascob,
      efecparcial,
      efectividad2,
      ebanco,
      total1indexfichascob,
      flag
    } = this.props;
    console.log(ebanco);
    return (
      <div>
        {etarjeta.length === 0 ? null : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Mora de Banco</u>
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
              <div className="col-1">
                <strong>C.ADEL</strong>
              </div>
              <div className="col-1">
                <strong>EFECT</strong>
              </div>
            </div>

            <div>
              {etarjeta[0].grupo === 3400 ? (
                <div>
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">CREDICASH</div>
                    <div className="col-2">$ {etarjeta[0].total}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ {etarjeta[0].cobrado}</div>
                    <div className="col-1">{etarjeta[0].fichascob}</div>
                    <div className="col-1">$ {etarjeta[0].adelantado}</div>
                    <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                  </div>
                  {!etarjeta[1] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">CREDIMAS</div>
                      <div className="col-2">$ {etarjeta[1].total}</div>
                      <div className="col-1">{etarjeta[1].fichas}</div>
                      <div className="col-2">$ {etarjeta[1].cobrado}</div>
                      <div className="col-1">{etarjeta[1].fichascob}</div>
                      <div className="col-1">$ {etarjeta[1].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 1)}% </div>
                    </div>
                  )}
                  {!etarjeta[2] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">NARANJA</div>
                      <div className="col-2">$ {etarjeta[2].total}</div>
                      <div className="col-1">{etarjeta[2].fichas}</div>
                      <div className="col-2">$ {etarjeta[2].cobrado}</div>
                      <div className="col-1">{etarjeta[2].fichascob}</div>
                      <div className="col-1">$ {etarjeta[2].adelantado}</div>
                      <div className="col-1">{efecparcial(etarjeta, 2)}%</div>
                    </div>
                  )}
                  {!etarjeta[3] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">SU-CREDITO</div>
                      <div className="col-2">$ {etarjeta[3].total}</div>
                      <div className="col-1">{etarjeta[3].fichas}</div>
                      <div className="col-2">$ {etarjeta[3].cobrado}</div>
                      <div className="col-1">{etarjeta[3].fichascob}</div>
                      <div className="col-1">$ {etarjeta[3].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 3)}% </div>
                    </div>
                  )}
                  {!etarjeta[4] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">VISA</div>
                      <div className="col-2">$ {etarjeta[4].total}</div>
                      <div className="col-1">{etarjeta[4].fichas}</div>
                      <div className="col-2">$ {etarjeta[4].cobrado}</div>
                      <div className="col-1">{etarjeta[4].fichascob}</div>
                      <div className="col-1">$ {etarjeta[4].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 4)}% </div>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {!etarjeta[0] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">CREDIMAS</div>
                      <div className="col-2">$ {etarjeta[0].total}</div>
                      <div className="col-1">{etarjeta[0].fichas}</div>
                      <div className="col-2">$ {etarjeta[0].cobrado}</div>
                      <div className="col-1">{etarjeta[0].fichascob}</div>
                      <div className="col-1">$ {etarjeta[0].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                    </div>
                  )}
                  {!etarjeta[1] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">NARANJA</div>
                      <div className="col-2">$ {etarjeta[1].total}</div>
                      <div className="col-1">{etarjeta[1].fichas}</div>
                      <div className="col-2">$ {etarjeta[1].cobrado}</div>
                      <div className="col-1">{etarjeta[1].fichascob}</div>
                      <div className="col-1">$ {etarjeta[1].adelantado}</div>
                      <div className="col-1">{efecparcial(etarjeta, 1)}%</div>
                    </div>
                  )}
                  {!etarjeta[2] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">SU-CREDITO</div>
                      <div className="col-2">$ {etarjeta[2].total}</div>
                      <div className="col-1">{etarjeta[2].fichas}</div>
                      <div className="col-2">$ {etarjeta[2].cobrado}</div>
                      <div className="col-1">{etarjeta[2].fichascob}</div>
                      <div className="col-1">$ {etarjeta[2].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 2)}% </div>
                    </div>
                  )}
                  {!etarjeta[3] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">VISA</div>
                      <div className="col-2">$ {etarjeta[3].total}</div>
                      <div className="col-1">{etarjeta[3].fichas}</div>
                      <div className="col-2">$ {etarjeta[3].cobrado}</div>
                      <div className="col-1">{etarjeta[3].fichascob}</div>
                      <div className="col-1">$ {etarjeta[3].adelantado}</div>
                      <div className="col-1"> {efecparcial(etarjeta, 3)}% </div>
                    </div>
                  )}
                </div>
              )}

              {flag === 3 && ebanco[0] ? (
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">BANCO MACRO</div>
                  <div className="col-2">$ {ebanco[0].total}</div>
                  <div className="col-1">{ebanco[0].fichas}</div>
                  <div className="col-2">$ {ebanco[0].cobrado}</div>
                  <div className="col-1">{ebanco[0].fichascob}</div>
                  <div className="col-1">$ {ebanco[0].adelantado} </div>
                  <div className="col-1"> {efecparcial(ebanco, 0)}% </div>
                </div>
              ) : null}

              {flag === 5 && ebanco[1] ? (
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">BANCO MACRO</div>
                  <div className="col-2">$ {ebanco[1].total}</div>
                  <div className="col-1">{ebanco[1].fichas}</div>
                  <div className="col-2">$ {ebanco[1].cobrado}</div>
                  <div className="col-1">{ebanco[1].fichascob}</div>
                  <div className="col-1">$ {ebanco[1].adelantado}</div>
                  <div className="col-1"> {efecparcial(ebanco, 1)}% </div>
                </div>
              ) : null}

              {flag === 60 && ebanco[2] ? (
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">BANCO MACRO</div>
                  <div className="col-2">$ {ebanco[2].total}</div>
                  <div className="col-1">{ebanco[2].fichas}</div>
                  <div className="col-2">$ {ebanco[2].cobrado}</div>
                  <div className="col-1">{ebanco[2].fichascob}</div>
                  <div className="col-1">$ {ebanco[2].adelantado}</div>
                  <div className="col-1"> {efecparcial(ebanco, 2)}% </div>
                </div>
              ) : null}

              {flag === 1 && ebanco[3] ? (
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">BANCO MACRO</div>
                  <div className="col-2">$ {ebanco[3].total}</div>
                  <div className="col-1">{ebanco[3].fichas}</div>
                  <div className="col-2">$ {ebanco[3].cobrado}</div>
                  <div className="col-1">{ebanco[3].fichascob}</div>
                  <div className="col-1">$ {ebanco[3].adelantado}</div>
                  <div className="col-1"> {efecparcial(ebanco, 3)}% </div>
                </div>
              ) : null}

              {flag === 3 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {total(etarjeta) + total1indexacob(ebanco, 0)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {totalfichas(etarjeta) + total1indexfichas(ebanco, 0)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {totalcobrado(etarjeta) + total1indexcobrado(ebanco, 0)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichascob(etarjeta) +
                        total1indexfichascob(ebanco, 0)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividad2(etarjeta, ebanco, 0)}%</strong>
                  </div>
                </div>
              ) : flag === 5 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {total(etarjeta) + total1indexacob(ebanco, 1)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {totalfichas(etarjeta) + total1indexfichas(ebanco, 1)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {totalcobrado(etarjeta) + total1indexcobrado(ebanco, 1)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichascob(etarjeta) +
                        total1indexfichascob(ebanco, 1)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividad2(etarjeta, ebanco, 1)}%</strong>
                  </div>
                </div>
              ) : flag === 60 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {total(etarjeta) + total1indexacob(ebanco, 2)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {totalfichas(etarjeta) + total1indexfichas(ebanco, 2)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {totalcobrado(etarjeta) + total1indexcobrado(ebanco, 2)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichascob(etarjeta) +
                        total1indexfichascob(ebanco, 2)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividad2(etarjeta, ebanco, 2)}%</strong>
                  </div>
                </div>
              ) : flag === 1 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>
                      $ {total(etarjeta) + total1indexacob(ebanco, 3)}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {totalfichas(etarjeta) + total1indexfichas(ebanco, 3)}
                    </strong>
                  </div>
                  <div className="col-2">
                    <strong>
                      $ {totalcobrado(etarjeta) + total1indexcobrado(ebanco, 3)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>
                      {" "}
                      {totalfichascob(etarjeta) +
                        total1indexfichascob(ebanco, 3)}{" "}
                    </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividad2(etarjeta, ebanco, 3)}%</strong>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}
