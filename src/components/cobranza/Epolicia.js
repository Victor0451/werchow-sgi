import React, { Component } from "react";
import { array } from "prop-types";
import { efectividad2a } from "./funciones";

export default class Mpolicia extends Component {
  render() {
    const { epolicia, econvenio, flag, efecparcial } = this.props;

    return (
      <div className="mt-4">
        {epolicia.length === 0 && econvenio.length === 0 ? null : (
          <div className=" container">
            <h5 className="mb-4">
              <strong>
                <u> Efectividad de Convenios y Policias</u>
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

            {flag === 3 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CONVENIOS</div>
                  <div className="col-2">$ {econvenio[0].total}</div>
                  <div className="col-1">{econvenio[0].fichas}</div>
                  <div className="col-2">$ {econvenio[0].cobrado}</div>
                  <div className="col-1"> {econvenio[0].fichascob} </div>
                  <div className="col-1">$ {econvenio[0].adelantado} </div>
                  <div className="col-1"> {efecparcial(econvenio, 0)}% </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">POLICIA</div>
                  <div className="col-2">$ {epolicia[0].total}</div>
                  <div className="col-1">{epolicia[0].fichas}</div>
                  <div className="col-2">$ {epolicia[0].cobrado}</div>
                  <div className="col-1"> {epolicia[0].fichascob} </div>
                  <div className="col-1">$ {epolicia[0].adelantado} </div>
                  <div className="col-1"> {efecparcial(epolicia, 0)}% </div>
                </div>
              </div>
            ) : flag === 5 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CONVENIOS</div>
                  <div className="col-2">$ {econvenio[1].total}</div>
                  <div className="col-1">{econvenio[1].fichas}</div>
                  <div className="col-2">$ {econvenio[1].cobrado}</div>
                  <div className="col-1"> {econvenio[1].fichascob} </div>
                  <div className="col-1"> {econvenio[1].adelantado} </div>
                  <div className="col-1"> {efecparcial(econvenio, 1)}% </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">POLICIA</div>
                  <div className="col-2">$ {epolicia[1].total}</div>
                  <div className="col-1">{epolicia[1].fichas}</div>
                  <div className="col-2">$ {epolicia[1].cobrado}</div>
                  <div className="col-1"> {epolicia[1].fichascob} </div>
                  <div className="col-1"> {epolicia[1].adelantado} </div>
                  <div className="col-1"> {efecparcial(epolicia, 1)}% </div>
                </div>
              </div>
            ) : flag === 60 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CONVENIOS</div>
                  <div className="col-2">$ {econvenio[2].total}</div>
                  <div className="col-1">{econvenio[2].fichas}</div>
                  <div className="col-2">$ {econvenio[2].cobrado}</div>
                  <div className="col-1"> {econvenio[2].fichascob} </div>
                  <div className="col-1"> {econvenio[2].adelantado} </div>
                  <div className="col-1"> {efecparcial(econvenio, 2)}% </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">POLICIA</div>
                  <div className="col-2">$ {epolicia[2].total}</div>
                  <div className="col-1">{epolicia[2].fichas}</div>
                  <div className="col-2">$ {epolicia[2].cobrado}</div>
                  <div className="col-1"> {epolicia[2].fichascob} </div>
                  <div className="col-1"> {epolicia[2].adelantado} </div>
                  <div className="col-1"> {efecparcial(epolicia, 2)}% </div>
                </div>
              </div>
            ) : flag === 1 ? (
              <div>
                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">CONVENIOS</div>
                  <div className="col-2">$ {econvenio[3].total}</div>
                  <div className="col-1">{econvenio[3].fichas}</div>
                  <div className="col-2">$ {econvenio[3].cobrado}</div>
                  <div className="col-1"> {econvenio[3].fichascob} </div>
                  <div className="col-1">$ {econvenio[3].adelantado} </div>
                  <div className="col-1"> {efecparcial(econvenio, 3)}% </div>
                </div>

                <div className="d-flex justify-content-between border-bottom text-center">
                  <div className="col-1">**</div>
                  <div className="col-3">POLICIA</div>
                  <div className="col-2">$ {epolicia[3].total}</div>
                  <div className="col-1">{epolicia[3].fichas}</div>
                  <div className="col-2">$ {epolicia[3].cobrado}</div>
                  <div className="col-1"> {epolicia[3].fichascob} </div>
                  <div className="col-1">$ {epolicia[3].adelantado} </div>
                  <div className="col-1"> {efecparcial(epolicia, 3)}% </div>
                </div>
              </div>
            ) : null}

            {flag === 3 ? (
              <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                <div className="col-4">
                  {" "}
                  <strong>TOTAL</strong>
                </div>

                <div className="col-2">
                  <strong>$ {epolicia[0].total + econvenio[0].total}</strong>
                </div>
                <div className="col-1">
                  <strong>{epolicia[0].fichas + econvenio[0].fichas}</strong>
                </div>
                <div className="col-2">
                  <strong>
                    $ {epolicia[0].cobrado + econvenio[0].cobrado}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>
                    {" "}
                    {epolicia[0].fichascob + econvenio[0].fichascob}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>$ 0</strong>
                </div>
                <div className="col-1">
                  <strong>{efectividad2a(econvenio, epolicia, 0)}%</strong>
                </div>
              </div>
            ) : flag === 5 ? (
              <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                <div className="col-4">
                  {" "}
                  <strong>TOTAL</strong>
                </div>

                <div className="col-2">
                  <strong>$ {epolicia[1].total + econvenio[1].total}</strong>
                </div>
                <div className="col-1">
                  <strong>{epolicia[1].fichas + econvenio[1].fichas}</strong>
                </div>
                <div className="col-2">
                  <strong>
                    $ {epolicia[1].cobrado + econvenio[1].cobrado}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>$ 0</strong>
                </div>
                <div className="col-1">
                  <strong>
                    {" "}
                    {epolicia[1].adelantado + econvenio[1].adelantado}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>{efectividad2a(econvenio, epolicia, 1, 1)}%</strong>
                </div>
              </div>
            ) : flag === 60 ? (
              <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                <div className="col-4">
                  {" "}
                  <strong>TOTAL</strong>
                </div>

                <div className="col-2">
                  <strong>$ {epolicia[2].total + econvenio[2].total}</strong>
                </div>
                <div className="col-1">
                  <strong>{epolicia[2].fichas + econvenio[2].fichas}</strong>
                </div>
                <div className="col-2">
                  <strong>
                    $ {epolicia[2].cobrado + econvenio[2].cobrado}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>
                    {" "}
                    {epolicia[2].fichascob + econvenio[2].fichascob}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>$ 0</strong>
                </div>
                <div className="col-1">
                  <strong>{efectividad2a(econvenio, epolicia, 2, 2)}%</strong>
                </div>
              </div>
            ) : flag === 1 ? (
              <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                <div className="col-4">
                  {" "}
                  <strong>TOTAL</strong>
                </div>

                <div className="col-2">
                  <strong>$ {epolicia[3].total + econvenio[3].total}</strong>
                </div>
                <div className="col-1">
                  <strong>{epolicia[3].fichas + econvenio[3].fichas}</strong>
                </div>
                <div className="col-2">
                  <strong>
                    $ {epolicia[3].cobrado + econvenio[3].cobrado}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>
                    {" "}
                    {epolicia[3].fichascob + econvenio[3].fichascob}{" "}
                  </strong>
                </div>
                <div className="col-1">
                  <strong>$ 0</strong>
                </div>
                <div className="col-1">
                  <strong>{efectividad2a(econvenio, epolicia, 3, 3)}%</strong>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
