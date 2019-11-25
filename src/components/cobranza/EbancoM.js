import React, { Component } from "react";
import Spinner from "../layouts/Spinner";

export default class Mbanco extends Component {
  render() {
    const {
      etarjeta,
      etarjetacob,
      total,
      totalfichas,
      totalcobrado,
      totalfichascob,
      efecparcial,
      efectividad2,
      flag
    } = this.props;

    return (
      <div>
        {!etarjeta ? (
          <Spinner />
        ) : (
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
              <div className="col-2">
                <strong>EFECTIVIDAD</strong>
              </div>
            </div>

            {flag === 1 ? (
              <div>
                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CREDICASH</div>
                  <div className="col-2">$ {etarjeta[0].cobranza}</div>
                  <div className="col-1">{etarjeta[0].fichas}</div>
                  <div className="col-2">$ {etarjetacob[0].cobranza}</div>
                  <div className="col-1">{etarjetacob[0].fichas}</div>
                  <div className="col-2">
                    {" "}
                    {efecparcial(etarjeta, etarjetacob, 0)}%{" "}
                  </div>
                </div> */}
                {/* <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CREDIMAS</div>
                  <div className="col-2">$ {etarjeta[1].cobranza}</div>
                  <div className="col-1">{etarjeta[1].fichas}</div>
                  <div className="col-2">$ {etarjetacob[1].cobranza}</div>
                  <div className="col-1">{etarjetacob[1].fichas}</div>
                  <div className="col-2">
                    {" "}
                    {efecparcial(etarjeta, etarjetacob, 1)}%{" "}
                  </div>
                </div> */}

                {etarjetacob[0] ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ {etarjetacob[0].cobranza}</div>
                    <div className="col-1">{etarjetacob[0].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 0)}%
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                )}

                {etarjetacob[1] ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">SU-CREDITO</div>
                    <div className="col-2">$ {etarjeta[1].cobranza}</div>
                    <div className="col-1">{etarjeta[1].fichas}</div>
                    <div className="col-2">$ {etarjetacob[1].cobranza}</div>
                    <div className="col-1">{etarjetacob[1].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 1)}%
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">SU-CREDITO</div>
                    <div className="col-2">$ {etarjeta[1].cobranza}</div>
                    <div className="col-1">{etarjeta[1].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                )}

                {etarjetacob[2]  ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">VISA</div>
                    <div className="col-2">$ {etarjeta[2].cobranza}</div>
                    <div className="col-1">{etarjeta[2].fichas}</div>
                    <div className="col-2">$ {etarjetacob[2].cobranza}</div>
                    <div className="col-1">{etarjetacob[2].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 2)}%
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">VISA</div>
                    <div className="col-2">$ {etarjeta[2].cobranza}</div>
                    <div className="col-1">{etarjeta[2].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                )}

                {etarjetacob.length > 0 ? (
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
                      <strong>$ {totalcobrado(etarjetacob)} </strong>
                    </div>
                    <div className="col-1">
                      <strong> {totalfichascob(etarjetacob)} </strong>
                    </div>
                    <div className="col-2">
                      <strong>{efectividad2(etarjeta, etarjetacob)}%</strong>
                    </div>
                  </div>
                ) : (
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
                      <strong>$ 0 </strong>
                    </div>
                    <div className="col-1">
                      <strong> 0 </strong>
                    </div>
                    <div className="col-2">
                      <strong>0%</strong>
                    </div>
                  </div>
                )}
              </div>
            ) : flag === 3 ? (
              <div>
                {etarjetacob.length === 0 ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ {etarjetacob[0].cobranza}</div>
                    <div className="col-1">{etarjetacob[0].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 0)}%
                    </div>
                  </div>
                )}

                {etarjetacob.length === 0 ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">SU-CREDITO</div>
                    <div className="col-2">$ {etarjeta[1].cobranza}</div>
                    <div className="col-1">{etarjeta[1].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">SU-CREDITO</div>
                    <div className="col-2">$ {etarjeta[1].cobranza}</div>
                    <div className="col-1">{etarjeta[1].fichas}</div>
                    <div className="col-2">$ {etarjetacob[1].cobranza}</div>
                    <div className="col-1">{etarjetacob[1].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 1)}%
                    </div>
                  </div>
                )}

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
                    <strong>$ {totalcobrado(etarjetacob)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjetacob)} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efectividad2(etarjeta, etarjetacob)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                {etarjetacob.length === 0 ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ {etarjetacob[0].cobranza}</div>
                    <div className="col-1">{etarjetacob[0].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 0)}%
                    </div>
                  </div>
                )}

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
                    <strong>$ {totalcobrado(etarjetacob)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjetacob)} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efectividad2(etarjeta, etarjetacob)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                {etarjetacob.length === 0 ? (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ 0</div>
                    <div className="col-1">0</div>
                    <div className="col-2">0%</div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between border-bottom text-center">
                    <div className="col-1">**</div>
                    <div className="col-3">NARANJA</div>
                    <div className="col-2">$ {etarjeta[0].cobranza}</div>
                    <div className="col-1">{etarjeta[0].fichas}</div>
                    <div className="col-2">$ {etarjetacob[0].cobranza}</div>
                    <div className="col-1">{etarjetacob[0].fichas}</div>
                    <div className="col-2">
                      {efecparcial(etarjeta, etarjetacob, 0)}%
                    </div>
                  </div>
                )}

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
                    <strong>$ {totalcobrado(etarjetacob)} </strong>
                  </div>
                  <div className="col-1">
                    <strong> {totalfichascob(etarjetacob)} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efectividad2(etarjeta, etarjetacob)}%</strong>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    );
  }
}
