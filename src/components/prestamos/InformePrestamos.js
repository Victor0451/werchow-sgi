import React, { Component } from "react";

import {
  listadoPrestamos2,
  prestamosPorOp,
  prestamosPorEstado
} from "../../actions/prestamosActions";

import { connect } from "react-redux";
import TablaPrestamos from "./TablaPrestamos";
import TablaInformes from "./TablaInformes";

class InformePrestamos extends Component {
  desdeRef = React.createRef();
  hastaRef = React.createRef();

  state = {
    atejerina: {},
    mgalian: {},
    ggimenez: {},
    vgorosito: {},
    mcarrizo: {},
    sjuarez: {},
    aprobado: {},
    rechazado: {},
    pendiente: {},
    cancelado: {},
    capitalprest: "",
    intereses: "",
    cuotas: "",
    cantprest: "",
    capconint: "",
    totalprestamos: "",
    totalcapital: "",
    totalinteres: "",
    totalcapconint: "",
    totalprestamosest: "",
    totalcapitalest: "",
    totalinteresest: "",
    totalcapconintest: ""
  };

  //   DIVISION DEL ARRAY PRETPOROP EN ARRAYS INDIVIDUALES
  divisionArraryOperador = prestporop => {
    let totalprestamos = 0;
    let totalcapital = 0;
    let totalinteres = 0;
    let totalcapconint = 0;

    for (let i = 0; i < prestporop.length; i++) {
      totalprestamos += prestporop[i].prestamos;
      totalcapital += parseInt(prestporop[i].capital);
      totalinteres += prestporop[i].interes;
      totalcapconint += prestporop[i].capconint;

      this.setState({
        totalprestamos: totalprestamos,
        totalcapital: totalcapital,
        totalinteres: totalinteres,
        totalcapconint: totalcapconint
      });

      if (prestporop[i].operador === 3) {
        const atejerina = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          atejerina: atejerina
        });
      }
      if (prestporop[i].operador === 4) {
        const mgalian = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          mgalian: mgalian
        });
      }
      if (prestporop[i].operador === 7) {
        const mcarrizo = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          mcarrizo: mcarrizo
        });
      }
      if (prestporop[i].operador === 8) {
        const vgorosito = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          vgorosito: vgorosito
        });
      }
      if (prestporop[i].operador === 77) {
        const sjuarez = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          sjuarez: sjuarez
        });
      }
      if (prestporop[i].operador === 97) {
        const ggimenez = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint
        };
        this.setState({
          ggimenez: ggimenez
        });
      }
    }
  };

  //   DIVISION ARRAY POR ESTADO
  divisionArraryEstado = prestporestado => {
    let totalprestamosest = 0;
    let totalcapitalest = 0;
    let totalinteresest = 0;
    let totalcapconintest = 0;

    for (let i = 0; i < prestporestado.length; i++) {
      totalprestamosest += prestporestado[i].prestamos;
      totalcapitalest += parseInt(prestporestado[i].capital);
      totalinteresest += prestporestado[i].interes;
      totalcapconintest += prestporestado[i].capconint;

      this.setState({
        totalprestamosest: totalprestamosest,
        totalcapitalest: totalcapitalest,
        totalinteresest: totalinteresest,
        totalcapconintest: totalcapconintest
      });

      if (prestporestado[i].estado === "APROBADO") {
        const aprobado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint
        };
        this.setState({
          aprobado: aprobado
        });
      }
      if (prestporestado[i].estado === "RECHAZADO") {
        const rechazado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint
        };
        this.setState({
          rechazado: rechazado
        });
      }
      if (prestporestado[i].estado === "CANCELADO") {
        const cancelado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint
        };
        this.setState({
          cancelado: cancelado
        });
      }
      if (prestporestado[i].estado === "PENDIENTE") {
        const pendiente = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint
        };
        this.setState({
          pendiente: pendiente
        });
      }
    }
  };

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  resumenArray = listado => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      intereses += listado[i].ptm_valcuota;
      cuotas += listado[i].ptm_cuotas;
      capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
    }

    this.setState({
      capitalprest: capitalprest,
      intereses: intereses,
      cuotas: cuotas,
      cantprest: cantprest,
      capconint: capconint
    });
  };

  buscarPrestamos = e => {
    e.preventDefault();

    let desde = this.desdeRef.current.value;
    let hasta = this.hastaRef.current.value;

    this.props.listadoPrestamos2(desde, hasta);
    this.props.prestamosPorOp(desde, hasta);
    this.props.prestamosPorEstado(desde, hasta);

    setTimeout(() => {
      const { listado, prestporop, prestporestado } = this.props;
      console.log(listado, prestporop, prestporestado);

      this.divisionArraryOperador(prestporop);

      this.resumenArray(listado);

      this.divisionArraryEstado(prestporestado);
    }, 100);
  };

  render() {
    const { listado } = this.props;
    console.log(this.props);
    const {
      atejerina,
      mgalian,
      ggimenez,
      vgorosito,
      mcarrizo,
      sjuarez,
      capitalprest,
      intereses,
      cuotas,
      cantprest,
      capconint,
      totalprestamos,
      totalcapital,
      totalinteres,
      totalcapconint,
      totalprestamosest,
      totalcapitalest,
      totalinteresest,
      totalcapconintest,
      aprobado,
      rechazado,
      pendiente,
      cancelado
    } = this.state;

    return (
      <div className="form-style-8">
        <h2>Reportes de Prestamos</h2>

        <div className="">
          <h3 className="mt-4 mb-4">
            <u>Elija el Periodo</u>
          </h3>
          <div className="row mb-4">
            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input type="date" ref={this.desdeRef} />
                <label>Desde:</label>
              </p>
            </div>
            <div className="form-group col-md-4 ">
              <p className="has-dynamic-label">
                <input type="date" ref={this.hastaRef} />
                <label>Desde:</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <button
                className="btn btn-primary btn-block mt-4"
                onClick={this.buscarPrestamos}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        {listado ? (
          <div>
            <div>
              <h2 className="mt-4 mb-4">Prestamos</h2>
              <TablaPrestamos
                data={listado}
                capitalprest={capitalprest}
                cuotas={cuotas}
                intereses={intereses}
                cantprest={cantprest}
                capconint={capconint}
              />
            </div>

            <TablaInformes
              atejerina={atejerina}
              mgalian={mgalian}
              ggimenez={ggimenez}
              vgorosito={vgorosito}
              mcarrizo={mcarrizo}
              sjuarez={sjuarez}
              totalprestamos={totalprestamos}
              totalcapital={totalcapital}
              totalinteres={totalinteres}
              totalcapconint={totalcapconint}
              totalprestamosest={totalprestamosest}
              totalcapitalest={totalcapitalest}
              totalinteresest={totalinteresest}
              totalcapconintest={totalcapconintest}
              aprobado={aprobado}
              pendiente={pendiente}
              cancelado={cancelado}
              rechazado={rechazado}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listado: state.prestamos.listado,
  prestporop: state.prestamos.prestporop,
  prestporestado: state.prestamos.prestporestado
});

export default connect(mapStateToProps, {
  listadoPrestamos2,
  prestamosPorOp,
  prestamosPorEstado
})(InformePrestamos);
