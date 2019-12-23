import React, { Component } from "react";

export default class MbancoM extends Component {
  render() {
    const {
      etarjeta,
      total,
      totalfichas,
      totalcobrado,
      totalfichascob,
      efecparcial,
      efectividadTjt,
      flag
    } = this.props;

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
              {flag === 3 ? (
                <div>
                  {!etarjeta[0] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA NARANJA</div>
                      <div className="col-2">$ {etarjeta[0].total}</div>
                      <div className="col-1">{etarjeta[0].fichas}</div>
                      <div className="col-2">$ {etarjeta[0].cobrado}</div>
                      <div className="col-1">{etarjeta[0].fichascob}</div>
                      <div className="col-1">$ {etarjeta[0].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                    </div>
                  )}
                  {!etarjeta[1] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA SUCREDITO</div>
                      <div className="col-2">$ {etarjeta[1].total}</div>
                      <div className="col-1">{etarjeta[1].fichas}</div>
                      <div className="col-2">$ {etarjeta[1].cobrado}</div>
                      <div className="col-1">{etarjeta[1].fichascob}</div>
                      <div className="col-1">$ {etarjeta[1].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 1)}% </div>
                    </div>
                  )}
                </div>
              ) : null}

              {flag === 5 ? (
                <div>
                  {!etarjeta[0] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA NARANJA</div>
                      <div className="col-2">$ {etarjeta[0].total}</div>
                      <div className="col-1">{etarjeta[0].fichas}</div>
                      <div className="col-2">$ {etarjeta[0].cobrado}</div>
                      <div className="col-1">{etarjeta[0].fichascob}</div>
                      <div className="col-1">$ {etarjeta[0].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                    </div>
                  )}
                </div>
              ) : null}

              {flag === 60 ? (
                <div>
                  {!etarjeta[0] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA NARANJA</div>
                      <div className="col-2">$ {etarjeta[0].total}</div>
                      <div className="col-1">{etarjeta[0].fichas}</div>
                      <div className="col-2">$ {etarjeta[0].cobrado}</div>
                      <div className="col-1">{etarjeta[0].fichascob}</div>
                      <div className="col-1">$ {etarjeta[0].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                    </div>
                  )}
                </div>
              ) : null}

              {flag === 1 ? (
                <div>
                  {!etarjeta[0] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA NARANJA</div>
                      <div className="col-2">$ {etarjeta[0].total}</div>
                      <div className="col-1">{etarjeta[0].fichas}</div>
                      <div className="col-2">$ {etarjeta[0].cobrado}</div>
                      <div className="col-1">{etarjeta[0].fichascob}</div>
                      <div className="col-1">$ {etarjeta[0].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 0)}% </div>
                    </div>
                  )}
                  {!etarjeta[1] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA SUCREDITO</div>
                      <div className="col-2">$ {etarjeta[1].total}</div>
                      <div className="col-1">{etarjeta[1].fichas}</div>
                      <div className="col-2">$ {etarjeta[1].cobrado}</div>
                      <div className="col-1">{etarjeta[1].fichascob}</div>
                      <div className="col-1">$ {etarjeta[1].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 1)}% </div>
                    </div>
                  )}
                  {!etarjeta[2] ? null : (
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">**</div>
                      <div className="col-3">TARJETA VISA</div>
                      <div className="col-2">$ {etarjeta[2].total}</div>
                      <div className="col-1">{etarjeta[2].fichas}</div>
                      <div className="col-2">$ {etarjeta[2].cobrado}</div>
                      <div className="col-1">{etarjeta[2].fichascob}</div>
                      <div className="col-1">$ {etarjeta[2].adelantado} </div>
                      <div className="col-1"> {efecparcial(etarjeta, 2)}% </div>
                    </div>
                  )}
                </div>
              ) : null}

              {flag === 3 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {total(etarjeta)}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{totalfichas(etarjeta)}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {totalcobrado(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividadTjt(etarjeta)}%</strong>
                  </div>
                </div>
              ) : flag === 5 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {total(etarjeta)}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{totalfichas(etarjeta)}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {totalcobrado(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividadTjt(etarjeta)}%</strong>
                  </div>
                </div>
              ) : flag === 60 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {total(etarjeta)}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{totalfichas(etarjeta)}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {totalcobrado(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividadTjt(etarjeta)}%</strong>
                  </div>
                </div>
              ) : flag === 1 ? (
                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {total(etarjeta)}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{totalfichas(etarjeta)}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {totalcobrado(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjeta)} </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ 0</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efectividadTjt(etarjeta)}%</strong>
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
