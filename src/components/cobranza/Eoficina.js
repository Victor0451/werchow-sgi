import React, { Component } from "react";

export default class Moficina extends Component {
  render() {
    const { eoficina, efecparcial, flag } = this.props;

    return (
      <div>
        {eoficina.length === 0 ? null : (
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
              <div className="col-1">
                <strong>C.ADEL</strong>
              </div>
              <div className="col-1">
                <strong>EFECT</strong>
              </div>
            </div>

            {flag === 3 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[1].zona}</div>
                  <div className="col-3">PALPALA</div>
                  <div className="col-2">$ {eoficina[1].total}</div>
                  <div className="col-1">{eoficina[1].fichas}</div>
                  <div className="col-2">$ {eoficina[1].cobrado}</div>
                  <div className="col-1">{eoficina[1].fichascob}</div>
                  <div className="col-1">$ {eoficina[1].adelantado}</div>
                  <div className="col-1"> {efecparcial(eoficina, 1)}% </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {eoficina[1].total}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{eoficina[1].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {eoficina[1].cobrado}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficina[1].fichascob} </strong>
                  </div>
                  <div className="col-1">
                    <strong> $ {eoficina[1].adelantado}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{efecparcial(eoficina, 1)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[2].zona}</div>
                  <div className="col-3">PERICO</div>
                  <div className="col-2">$ {eoficina[2].total}</div>
                  <div className="col-1">{eoficina[2].fichas}</div>
                  <div className="col-2">$ {eoficina[2].cobrado}</div>
                  <div className="col-1">{eoficina[2].fichascob}</div>
                  <div className="col-1">$ {eoficina[2].adelantado}</div>
                  <div className="col-1"> {efecparcial(eoficina, 2)}% </div>
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
                    <strong>$ {eoficina[2].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficina[2].fichas} </strong>
                  </div>
                  <div className="col-1">
                    <strong>$ {eoficina[2].adelantado} </strong>
                  </div>
                  <div className="col-1">
                    <strong>{efecparcial(eoficina, 2)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[3].zona}</div>
                  <div className="col-3">PERICO</div>
                  <div className="col-2">$ {eoficina[3].cobranza}</div>
                  <div className="col-1">{eoficina[3].fichas}</div>
                  <div className="col-2">$ {eoficina[3].cobranza}</div>
                  <div className="col-1">{eoficina[3].fichas}</div>
                  <div className="col-1">$ {eoficina[3].adelantado}</div>
                  <div className="col-1"> {efecparcial(eoficina, 3)}% </div>
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
                    <strong>$ {eoficina[3].cobranza}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficina[3].fichas} </strong>
                  </div>
                  <div className="col-1">$ {eoficina[3].adelantado}</div>

                  <div className="col-1">
                    <strong>{efecparcial(eoficina, 3)}%</strong>
                  </div>
                </div>
              </div>
            ) : flag === 1 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">{eoficina[0].zona}</div>
                  <div className="col-3">SAN SALVADOR</div>
                  <div className="col-2">$ {eoficina[0].cobranza}</div>
                  <div className="col-1">{eoficina[0].fichas}</div>
                  <div className="col-2">$ {eoficina[0].cobranza}</div>
                  <div className="col-1">{eoficina[0].fichas}</div>
                  <div className="col-1">{eoficina[0].adelantado}</div>

                  <div className="col-1"> {efecparcial(eoficina, 0)}% </div>
                </div>

                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                  <div className="col-4">
                    {" "}
                    <strong>TOTAL</strong>
                  </div>

                  <div className="col-2">
                    <strong>$ {eoficina[0].total}</strong>
                  </div>
                  <div className="col-1">
                    <strong>{eoficina[0].fichas}</strong>
                  </div>
                  <div className="col-2">
                    <strong>$ {eoficina[0].cobrado}</strong>
                  </div>
                  <div className="col-1">
                    <strong> {eoficina[0].fichascob} </strong>
                  </div>
                  <div className="col-1">$ {eoficina[0].adelantado}</div>

                  <div className="col-1">
                    <strong>{efecparcial(eoficina, 0)}%</strong>
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
