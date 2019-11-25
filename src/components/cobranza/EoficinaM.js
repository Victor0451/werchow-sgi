import React, { Component } from "react";
import Spinner from "../layouts/Spinner";

export default class Moficina extends Component {
  render() {
    const { eoficina, eoficinacob, efecparcial, flag } = this.props;

    return (
      <div>
        {!eoficina ? (
          <Spinner />
        ) : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Efectividad de Oficina</u>
              </strong>
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
                  <div className="col-1">{eoficina[1].zona}</div>
                  <div className="col-3">PALPALA</div>
                  <div className="col-2">$ {eoficina[1].cobranza}</div>
                  <div className="col-1">{eoficina[1].fichas}</div>
                  <div className="col-2">$ {eoficinacob[1].cobranza}</div>
                  <div className="col-1">{eoficinacob[1].fichas}</div>
                  <div className="col-2">
                    {" "}
                    {efecparcial(eoficina, eoficinacob, 1)}%{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {eoficina[1].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{eoficina[1].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {eoficinacob[1].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficinacob[1].fichas} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efecparcial(eoficina, eoficinacob, 1)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[2].zona}</div>
                  <div className="col-3">PERICO</div>
                  <div className="col-2">$ {eoficina[2].cobranza}</div>
                  <div className="col-1">{eoficina[2].fichas}</div>
                  <div className="col-2">$ {eoficinacob[2].cobranza}</div>
                  <div className="col-1">{eoficinacob[2].fichas}</div>
                  <div className="col-2">
                    {" "}
                    {efecparcial(eoficina, eoficinacob, 2)}%{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {eoficina[2].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{eoficina[2].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {eoficinacob[2].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficinacob[2].fichas} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efecparcial(eoficina, eoficinacob, 2)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                {!eoficinacob[3] ? (
                  <div>
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">{eoficina[3].zona}</div>
                      <div className="col-3">PERICO</div>
                      <div className="col-2">$ {eoficina[3].cobranza}</div>
                      <div className="col-1">{eoficina[3].fichas}</div>
                      <div className="col-2">$ 0</div>
                      <div className="col-1">0</div>
                      <div className="col-2"> 0% </div>
                    </div>

                    <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                      <div className="col-4">
                        {" "}
                        <strong>TOTAL</strong>
                      </div>

                      <div className="col-2">
                        <strong>$ {eoficina[3].cobranza}</strong>
                      </div>
                      <div className="col-1">
                        <strong>{eoficina[3].fichas}</strong>
                      </div>
                      <div className="col-2">
                        <strong>$ 0</strong>
                      </div>
                      <div className="col-1">
                        <strong> 0</strong>
                      </div>
                      <div className="col-2">
                        <strong>0%</strong>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="d-flex justify-content-between border-bottom text-center">
                      <div className="col-1">{eoficina[3].zona}</div>
                      <div className="col-3">PERICO</div>
                      <div className="col-2">$ {eoficina[3].cobranza}</div>
                      <div className="col-1">{eoficina[3].fichas}</div>
                      <div className="col-2">$ {eoficinacob[3].cobranza}</div>
                      <div className="col-1">{eoficinacob[3].fichas}</div>
                      <div className="col-2">
                        {" "}
                        {efecparcial(eoficina, eoficinacob, 3)}%{" "}
                      </div>
                    </div>

                    <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                      <div className="col-4">
                        {" "}
                        <strong>TOTAL</strong>
                      </div>

                      <div className="col-2">
                        <strong>$ {eoficina[3].cobranza}</strong>
                      </div>
                      <div className="col-1">
                        <strong>{eoficina[3].fichas}</strong>
                      </div>
                      <div className="col-2">
                        <strong>$ {eoficinacob[3].cobranza}</strong>
                      </div>
                      <div className="col-1">
                        <strong> {eoficinacob[3].fichas} </strong>
                      </div>
                      <div className="col-2">
                        <strong>
                          {efecparcial(eoficina, eoficinacob, 3)}%
                        </strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : flag === 1 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[0].zona}</div>
                  <div className="col-3">SAN SALVADOR</div>
                  <div className="col-2">$ {eoficina[0].cobranza}</div>
                  <div className="col-1">{eoficina[0].fichas}</div>
                  <div className="col-2">$ {eoficinacob[0].cobranza}</div>
                  <div className="col-1">{eoficinacob[0].fichas}</div>
                  <div className="col-2">
                    {" "}
                    {efecparcial(eoficina, eoficinacob, 0)}%{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {eoficina[0].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{eoficina[0].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {eoficinacob[0].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficinacob[0].fichas} </strong>
                  </div>
                  <div className="col-2">
                    <strong>{efecparcial(eoficina, eoficinacob, 0)}%</strong>
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
