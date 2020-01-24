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
    let tmp = new Date(Date.now());
    let fecha = moment(tmp)
      .tz("America/Argentina/Buenos_Aires")
      .format("DD/MM/YYYY HH:mm:ss");
    return (
      <div>
        <div className="form-style-8" id="listado">
          <h2 className=" mb-4   ">
            <div className="row d-flex ml-4">
              <div className="col-md-8">
                <u>Comprobante de Cierre N°</u> : {cajasep.idcaja}
              </div>
              <div className="col-md-4 ">
                <u>Fecha</u> : {fecha}
              </div>
            </div>
          </h2>

          <hr />
          <h2 className="mt-4 mb-4">Resumen de Caja</h2>
          <div className="jumbotron mt-4 mb-4 d-flex justify-content-center">
            <div className="row border border-dark">
              <div className="col-md-6 mt-2 mb-2">
                <h5>
                  <strong>
                    <u>Fecha</u>:{" "}
                    {moment.utc(cajasep.fecha).format("DD/MM/YYYY")}{" "}
                  </strong>
                </h5>
              </div>

              <div className="col-md-6 mt-2 mb-2 border alert-success">
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

              <div className="col-md-6 mt-2 mb-2 border alert-danger">
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

              <div className="col-md-6 mt-2 mb-2 border alert-info">
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

          <table className="table table-hover border border-dark  mt-4">
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
              <tr>
                <td className="border border-dark ">{cajasep.idcaja}</td>
                <td className="border border-dark ">
                  {moment.utc(cajasep.fecha).format("YYYY-MM-DD")}
                </td>
                <td className="border border-dark ">{cajasep.concepto}</td>
                <td className="border border-dark ">{cajasep.monto}</td>
                <td className="border border-dark "> 0 </td>
                <td className="border border-dark "> {cajasep.tipofactura}</td>
                <td className="border border-dark "> {cajasep.nfactura} </td>
                <td className="border border-dark "> {cajasep.detalle} </td>
                <td className="border border-dark ">{cajasep.operador}</td>
              </tr>
              {Object.values(listing).map(row => (
                <tr>
                  <td className="border border-dark ">{row.idingreso}</td>
                  <td className="border border-dark ">
                    {moment.utc(row.fecha).format("YYYY-MM-DD")}
                  </td>
                  <td className="border border-dark ">{row.concepto}</td>
                  <td className="border border-dark ">{row.monto}</td>
                  <td className="border border-dark "> 0 </td>
                  <td className="border border-dark "> {row.tipofactura}</td>
                  <td className="border border-dark "> {row.nfactura} </td>
                  <td className="border border-dark "> {row.detalle} </td>
                  <td className="border border-dark ">{row.operador}</td>
                </tr>
              ))}

              {Object.values(listgasto).map(row => (
                <tr>
                  <td className="border border-dark ">{row.idgastos}</td>
                  <td className="border border-dark ">
                    {moment.utc(row.fecha).format("YYYY-MM-DD")}
                  </td>
                  <td className="border border-dark ">{row.concepto}</td>
                  <td className="border border-dark "> 0 </td>
                  <td className="border border-dark ">{row.total}</td>
                  <td className="border border-dark ">{row.tipofactura}</td>
                  <td className="border border-dark ">
                    {row.ptoventa}-{row.nfactura}
                  </td>
                  <td className="border border-dark "> {row.detalle} </td>
                  <td className="border border-dark ">{row.operadortramite}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="container  ">
            <div className="row text-center">
              <div className="col-md-6 border border-dark  alert-secondary">
                <strong>TOTAL</strong>
              </div>
              <div className="col-md-1 border border-dark  alert-success">
                {cajasep.monto}
              </div>
              <div className="col-md-1 border border-dark  alert-danger">
                {cajasep.gastos}
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-6 border border-dark  alert-secondary ">
                A FAVOR
              </div>
              <div className="col-md-2 border border-dark  alert-primary">
                {cajasep.totalcaja}
              </div>
            </div>
          </div>
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
