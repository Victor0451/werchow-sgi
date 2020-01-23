import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  caja,
  listadoIngresos,
  listadoGastos
} from "../../../actions/sepelioActions";
import moment from "moment-timezone";

import { connect } from "react-redux";
class ImprimirCaja extends Component {
  state = {
    listing: {},
    listgasto: {},
    cajasep: {}
  };
  componentDidMount() {
    const idcaja = this.props.match.params.id;
    this.props.caja(idcaja);
    this.props.listadoIngresos(idcaja);
    this.props.listadoGastos(idcaja);

    setTimeout(() => {
      const { cajasep, listing, listgasto } = this.props;

      this.setState({
        cajasep: cajasep,
        listing: listing,
        listgasto: listgasto
      });
    }, 200);
  }

  imprimir = () => {
    let contenido = document.getElementById("listado").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const { cajasep, listing, listgasto } = this.state;
    if (!cajasep) return <h1>CARGANDO ...</h1>;
    return (
      <div>
        <div className="form-style-8" id="listado">
          <h2 className="mt-4 mb-4 ">
            Comprobante de Cierre N: {cajasep.idcaja}
          </h2>
          <hr />
          <h2 className="mt-4 mb-4">Resumen de Caja</h2>
          <div className="jumbotron mt-4 mb-4 d-flex justify-content-center">
            <div className="row border border-dark">
              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Fecha</u>:{" "}
                    {moment.utc(cajasep.fecha).format("YYYY-MM-DD")}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Monto Habilitado</u>: {cajasep.monto}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Empresa</u>: {cajasep.empresa}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Gastos</u>: {cajasep.gastos}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Operador</u>: {cajasep.operador}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Saldo a Favor</u>: {cajasep.totalcaja}{" "}
                  </strong>
                </h5>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="mt-4">Movimientos de Caja</h2>

          <table className="table table-hover border mt-4">
            <thead className="thead-dark ">
              <tr className=" border ">
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Concepto</th>
                <th scope="col">Ingreso</th>
                <th scope="col">Egreso</th>
                <th scope="col">Factura</th>
                <th scope="col">N°</th>
                <th scope="col">Detalle</th>
                <th scope="col">Operador</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(listing).map(row => (
                <tr>
                  <td className="border">{row.idingreso}</td>
                  <td className="border">
                    {moment.utc(row.fecha).format("YYYY-MM-DD")}
                  </td>
                  <td className="border">{row.concepto}</td>
                  <td className="border">{row.monto}</td>
                  <td className="border"> 0 </td>
                  <td className="border"> {row.tipofactura}</td>
                  <td className="border"> {row.nfactura} </td>
                  <td className="border"> {row.detalle} </td>
                  <td className="border">{row.operador}</td>
                </tr>
              ))}

              {Object.values(listgasto).map(row => (
                <tr>
                  <td className="border">{row.idgastos}</td>
                  <td className="border">
                    {moment.utc(row.fecha).format("YYYY-MM-DD")}
                  </td>
                  <td className="border">{row.concepto}</td>
                  <td className="border"> 0 </td>
                  <td className="border">{row.total}</td>
                  <td className="border">{row.tipofactura}</td>
                  <td className="border">
                    {row.ptoventa}-{row.nfactura}
                  </td>
                  <td className="border"> {row.detalle} </td>
                  <td className="border">{row.operadortramite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="jumbotron form-style-8" id="opciones">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-info col-md-3 mr-1"
                onClick={this.imprimir}
              >
                Imprimir Listado
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cajasep: state.sepelio.caja,
  listing: state.sepelio.listadoingresos,
  listgasto: state.sepelio.listadogastos
});
export default connect(mapStateToProps, {
  caja,
  listadoIngresos,
  listadoGastos
})(ImprimirCaja);
