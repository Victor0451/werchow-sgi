import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import moment from "moment-timezone";
import { tipofac, conceptossep } from "../../layouts/Arrays/arrays";

import TipoFacturaSelect from "react-select";

import {
  caja,
  nuevoIngreso,
  updateTotalesIng,
  listadoIngresos,
  eliminarGasto,
  updateCierreCaja
} from "../../../actions/sepelioActions";

import ConceptoSelect from "react-select";

import { connect } from "react-redux";
import ListadoIngresosCajas from "./ListadoIngresosCajas";
import { Link } from "react-router-dom";

class CajaIngresos extends Component {
  fechaRef = React.createRef();
  nFacturaRef = React.createRef();
  ptoVentaRef = React.createRef();
  totalRef = React.createRef();
  detalleRef = React.createRef();

  state = {
    concepto: "",
    cajasep: {},
    tipofactura: {}
  };

  componentDidMount() {
    const idcaja = this.props.match.params.id;
    this.props.caja(idcaja);
    this.props.listadoIngresos(idcaja);

    setTimeout(() => {
      const { cajasep } = this.props;
      console.log(("cajasep", cajasep));

      this.setState({
        cajasep: cajasep
      });
    }, 100);
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value.label });
  };

  nuevoGastos = () => {
    const idcaja = this.props.match.params.id;
    const { user } = this.props.auth;
    const { cajasep } = this.props;
    const { concepto, tipofactura } = this.state;

    const ingreso = {
      idcaja: idcaja,
      concepto: concepto,
      fecha: this.fechaRef.current.value,
      tipofactura: tipofactura,
      ptoventa: this.ptoVentaRef.current.value,
      nfactura: this.nfactura.current.value,
      operador: user.usuario,
      detalle: this.detalleRef.current.value,
      monto: this.totalRef.current.value
    };

    this.props.nuevoIngreso(ingreso);

    let ing = ingreso.monto;
    let totalcaja = parseFloat(cajasep.totalcaja) + parseFloat(ing);
    let monto = parseFloat(cajasep.monto) + parseFloat(ing);

    const valores = {
      totalcaja,
      monto
    };

    this.props.updateTotalesIng(valores, idcaja);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  cerrarCaja = row => {
    confirmAlert({
      title: "Atencion",
      message: "¿Realmente estas seguro de cerrar la caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let idcaja = row.idcaja;

            this.props.updateCierreCaja(idcaja);

            setTimeout(() => {
              window.location.reload();
            }, 150);
          }
        },

        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    const idcaja = this.props.match.params.id;
    const { user } = this.props.auth;
    const { cajasep } = this.state;
    const { listing } = this.props;

    return (
      <div>
        <div className="form-style-8 mt-4 mb-4">
          <h2 className="mb-4">Estado de la Caja</h2>

          {cajasep.estado === 1 ? (
            <div className="alert alert-info col-md-12 d-flex justify-content-between ">
              <div className="col-md-5 mt-2">
                <strong>CAJA ABIERTA</strong>
              </div>
              <div className="col-md-5">
                <Link
                  to={"#"}
                  className="btn btn-secondary btn-block"
                  onClick={() => this.cerrarCaja(cajasep)}
                >
                  {" "}
                  Cerrar Caja
                </Link>
              </div>
            </div>
          ) : cajasep.estado === 0 ? (
            <div className="alert alert-success text-center">
              <strong>CAJA CERRADA</strong>
            </div>
          ) : null}
        </div>

        <div className="mt-4  form-style-8">
          <h2 className="mb-4">Carga de Gastos de Sepelio</h2>

          <h3 className="mt-4 mb-4">
            <strong>
              <u>Detalle de Caja</u>
            </strong>{" "}
          </h3>

          <div className="row mb-4">
            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="monto"
                  value={idcaja}
                  readOnly
                  placeholder="Ingresar Monto"
                />
                <label>Caja de Sepelio N°:</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="monto"
                  value={moment(cajasep.fecha)
                    .tz("America/Argentina/Buenos_Aires")
                    .format("YYYY-MM-DD HH:mm:ss")}
                  readOnly
                  placeholder="Fecha"
                />
                <label>Fecha:</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="monto"
                  value={user.usuario}
                  readOnly
                  placeholder="Operador"
                />
                <label>Operador:</label>
              </p>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-12">
              <h3 className="mt-4 mb-4">
                <strong>
                  <u>Detalle de Gastos</u>
                </strong>{" "}
              </h3>
            </div>
            <div className="col-md-6">
              <h3 className="mt-4 mb-4 alert alert-info">
                <strong>
                  <u>Monto Habilitado</u>: $ {cajasep.monto}
                </strong>{" "}
              </h3>
            </div>
            <div className="col-md-6">
              <h3 className="mt-4 mb-4 alert alert-warning">
                <strong>
                  <u>Gastos</u>: $ {cajasep.gastos}
                </strong>{" "}
              </h3>
            </div>
            <div className="col-md-12 text-center">
              {cajasep.totalcaja === 0 ? (
                <h3 className="mt-4 mb-4 alert alert-success">
                  <strong>
                    <u>Saldo Restante</u>: $ 5000
                  </strong>{" "}
                </h3>
              ) : cajasep.totalcaja <= 500 ? (
                <h3 className="mt-4 mb-4 alert alert-danger">
                  <strong>
                    <u>Saldo Restante</u>: $ {cajasep.totalcaja} - ATENCION!, el
                    saldo disponible esta por terminarse.
                  </strong>{" "}
                </h3>
              ) : (
                <h3 className="mt-4 mb-4 alert alert-success">
                  <strong>
                    <u>Saldo Restante</u>: $ {cajasep.totalcaja}
                  </strong>{" "}
                </h3>
              )}
            </div>
          </div>

          {cajasep.estado === 1 ? (
            <div className="row mt-4 mb-4">
              <div className="form-group col-md-6">
                <ConceptoSelect
                  options={conceptossep}
                  placeholder={"Concepto"}
                  onChange={value => this.handleChange(value, "concepto")}
                />
              </div>

              <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="date"
                    className=""
                    name="fecha"
                    ref={this.fechaRef}
                  />
                  <label>Fecha</label>
                </p>
              </div>

              <div className="form-group col-md-6">
                <TipoFacturaSelect
                  options={tipofac}
                  placeholder={"Tipo de Factura"}
                  onChange={value => this.handleChange(value, "tipofactura")}
                />
              </div>

              <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    className=""
                    ref={this.ptoVentaRef}
                    placeholder="Pto. Venta"
                  />
                  <label>Pto. Venta</label>
                </p>
              </div>

              <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    className=""
                    ref={this.nFacturaRef}
                    placeholder="N° Factura"
                  />
                  <label>N° Factura</label>
                </p>
              </div>

              <div className="form-group col-md-6 ">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.totalRef}
                    placeholder="Monto"
                  />
                  <label>Monto</label>
                </p>
              </div>

              <div className="mt-4 form-group col-md-9">
                <p className="has-dynamic-label">
                  <textarea
                    rows="3"
                    className=""
                    ref={this.detalleRef}
                    placeholder="Detalle"
                  />
                  <label>Detalle</label>
                </p>
              </div>

              <div className="mt-2 form-group col-md-12">
                <button
                  className="mt-4 btn btn-primary btn-block"
                  onClick={this.nuevoGastos}
                >
                  Registrar Ingreso
                </button>
              </div>
            </div>
          ) : cajasep.estado === 0 ? (
            <div>
              <hr />
              <div className="alert alert-info text-center">
                <strong>CAJA CERRADA NO PUEDES REGISTRAR INGRESOS</strong>
              </div>
              <hr />
            </div>
          ) : null}
        </div>

        <div>
          <ListadoIngresosCajas data={listing} />
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  cajasep: state.sepelio.caja,
  listing: state.sepelio.listadoingresos
});

export default connect(mapStateToProps, {
  caja,
  nuevoIngreso,
  updateTotalesIng,
  listadoIngresos,
  eliminarGasto,
  updateCierreCaja
})(CajaIngresos);
