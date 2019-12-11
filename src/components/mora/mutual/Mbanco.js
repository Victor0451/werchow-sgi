import React, { Component } from "react";
import Spinner from "../../layouts/Spinner";

export default class Mbanco extends Component {
  render() {
    const {
      mtarjeta,
      totalfichas,
      totalmora,
      totalfichasrec,
      totalmorarec,
      efecparcial,
      efectividad
    } = this.props;

    return (
      <div>
        {!mtarjeta ? (
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

            {!mtarjeta[0] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">**</div>
                <div className="col-3">NARANJA</div>
                <div className="col-2">$ {mtarjeta[0].mora}</div>
                <div className="col-1">{mtarjeta[0].fichas}</div>
                <div className="col-2">$ {mtarjeta[0].morarec}</div>
                <div className="col-1">{mtarjeta[0].fichasrec}</div>
                <div className="col-2"> {efecparcial(mtarjeta, 0)}% </div>
              </div>
            )}
            {!mtarjeta[2] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">**</div>
                <div className="col-3">SU-CREDITO</div>
                <div className="col-2">$ - </div>
                <div className="col-1"> - </div>
                <div className="col-2"> - </div>
                <div className="col-1"> - </div>
                <div className="col-2"> 0.00% </div>
              </div>
            )}
            {!mtarjeta[1] ? null : (
              <div className="d-flex justify-content-between border-bottom text-center">
                <div className="col-1">**</div>
                <div className="col-3">VISA</div>
                <div className="col-2">$ {mtarjeta[1].mora}</div>
                <div className="col-1">{mtarjeta[1].fichas}</div>
                <div className="col-2">$ {mtarjeta[1].morarec}</div>
                <div className="col-1">{mtarjeta[1].fichasrec}</div>
                <div className="col-2"> {efecparcial(mtarjeta, 1)}% </div>
              </div>
            )}
            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
              <div className="col-4">
                {" "}
                <strong>TOTAL</strong>
              </div>

              <div className="col-2">
                <strong>$ {totalmora(mtarjeta)}</strong>
              </div>
              <div className="col-1">
                <strong>{totalfichas(mtarjeta)}</strong>
              </div>
              <div className="col-2">
                <strong>$ {totalmorarec(mtarjeta)} </strong>
              </div>
              <div className="col-1">
                <strong> {totalfichasrec(mtarjeta)} </strong>
              </div>
              <div className="col-2">
                <strong>{efectividad(mtarjeta)}%</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
