import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import moment from "moment-timezone";
import {
  conceptossep,
  empresa,
  porciva,
  prov,
  tipofac,
  mediopag,
  operadoressep
} from "../../layouts/Arrays/arrays";

import {
  caja,
  nuevoGasto,
  updateTotales,
  listadoGastos,
  eliminarGasto,
  updateCierreCaja
} from "../../../actions/sepelioActions";

import EmpresaSelect from "react-select";
import ProveedorSelect from "react-select";
import MedioPagoSelect from "react-select";
import ConceptoSelect from "react-select";
import IvaSelect from "react-select";
import TipoFacturaSelect from "react-select";
import OperadorSelect from "react-select";

import { connect } from "react-redux";
import ListadoGastosCajas from "./ListadoGastosCajas";
import { Link } from "react-router-dom";

class CajaGastos extends Component {
  fechaRef = React.createRef();
  nFacturaRef = React.createRef();
  ptoVentaRef = React.createRef();
  montoIVARef = React.createRef();
  retIIBBRef = React.createRef();
  retggciasRef = React.createRef();
  percIVARef = React.createRef();
  totalRef = React.createRef();

  detalleRef = React.createRef();

  state = {
    empresa: "",
    proveedor: "",
    tipofactura: "",
    mediopago: "",
    concepto: "",
    porciva: "",
    operadortramite: {},
    cajasep: {}
  };

  componentDidMount() {
    const idcaja = this.props.match.params.id;
    this.props.caja(idcaja);
    this.props.listadoGastos(idcaja);

    setTimeout(() => {
      const { cajasep } = this.props;

      this.setState({
        cajasep: cajasep
      });
    }, 100);
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value.label });
  };

  handleChangeOp = (value, state) => {
    this.setState({ [state]: value.value });
  };

  nuevoGastos = () => {
    const idcaja = this.props.match.params.id;
    const { user } = this.props.auth;
    const { cajasep } = this.props;
    const {
      empresa,
      proveedor,
      tipofactura,
      mediopago,
      concepto,
      porciva,
      operadortramite
    } = this.state;

    const gasto = {
      idcaja: idcaja,
      concepto: concepto,
      mediopago: mediopago,
      tipofactura: tipofactura,
      proveedor: proveedor,
      empresa: empresa,
      porciva: porciva,
      fecha: this.fechaRef.current.value,
      nfactura: this.nFacturaRef.current.value,
      ptoventa: this.ptoVentaRef.current.value,
      operadorgestion: user.usuario,
      operadortramite: operadortramite,
      montoiva: this.montoIVARef.current.value,
      retiibb: this.retIIBBRef.current.value,
      retggcias: this.retggciasRef.current.value,
      perciva: this.percIVARef.current.value,
      detalle: this.detalleRef.current.value,
      total: this.totalRef.current.value
    };

    this.props.nuevoGasto(gasto);

    if (cajasep.gastos === 0) {
      let sumgastos = parseFloat(gasto.total);
      let restacaja = parseFloat(cajasep.monto) - sumgastos;

      const valores = {
        gastos: sumgastos,
        totalcaja: restacaja
      };

      this.props.updateTotales(valores, idcaja);
      setTimeout(() => {
        window.location.reload();
      }, 10);
    }

    if (cajasep.gastos > 0) {
      let sumgastos = parseFloat(gasto.total) + parseFloat(cajasep.gastos);
      let restacaja = parseFloat(cajasep.totalcaja) - parseFloat(gasto.total);

      const valores = {
        gastos: sumgastos,
        totalcaja: restacaja
      };

      this.props.updateTotales(valores, idcaja);
      setTimeout(() => {
        window.location.reload();
      }, 10);
    }
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
    const { listgastos } = this.props;
    console.log(this.state);
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
                <EmpresaSelect
                  options={empresa}
                  placeholder={"Empresa"}
                  onChange={value => this.handleChange(value, "empresa")}
                />
              </div>

              <div className="form-group col-md-6">
                <ProveedorSelect
                  options={prov}
                  placeholder={"Proveedor"}
                  onChange={value => this.handleChange(value, "proveedor")}
                />
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
                    type="date"
                    className=""
                    name="fecha"
                    ref={this.fechaRef}
                  />
                  <label>Fecha</label>
                </p>
              </div>

              <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    className=""
                    ref={this.ptoVentaRef}
                    placeholder="Pto. Venta"
                    defaultValue={0}
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
                    defaultValue={0}
                  />
                  <label>N° Factura</label>
                </p>
              </div>

              <div className="form-group col-md-6">
                <MedioPagoSelect
                  options={mediopag}
                  placeholder={"Medio de Pago"}
                  onChange={value => this.handleChange(value, "mediopago")}
                />
              </div>

              <div className="form-group col-md-6">
                <ConceptoSelect
                  options={conceptossep}
                  placeholder={"Concepto"}
                  onChange={value => this.handleChange(value, "concepto")}
                />
              </div>

              <div className="form-group col-md-4">
                <IvaSelect
                  options={porciva}
                  placeholder={"Porcentaje de IVA"}
                  onChange={value => this.handleChange(value, "porciva")}
                />
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.montoIVARef}
                    placeholder="Monto IVA"
                    defaultValue={0}
                  />
                  <label>Monto IVA</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.retIIBBRef}
                    placeholder="Ret. IIBB"
                    defaultValue={0}
                  />
                  <label>Ret. IIBB</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.retggciasRef}
                    placeholder="Ret. Gcias"
                    defaultValue={0}
                  />
                  <label>Ret. Gcias</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.percIVARef}
                    placeholder="Perc. IVA"
                    defaultValue={0}
                  />
                  <label>Perc. IVA</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="number"
                    className=""
                    ref={this.totalRef}
                    placeholder="Total"
                    defaultValue={0}
                  />
                  <label>Total</label>
                </p>
              </div>

              <div className="form-group col-md-4 mt-4">
                <OperadorSelect
                  options={operadoressep}
                  placeholder={"Operador del Tramite"}
                  onChange={value =>
                    this.handleChangeOp(value, "operadortramite")
                  }
                />
              </div>

              <div className="mt-4 form-group col-md-8">
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
                  Registrar Gasto
                </button>
              </div>
            </div>
          ) : cajasep.estado === 0 ? (
            <div>
              <hr />
              <div className="alert alert-info text-center">
                <strong>CAJA CERRADA NO PUEDES REGISTRAR GASTOS</strong>
              </div>
              <hr />
            </div>
          ) : null}
        </div>

        <div>
          <ListadoGastosCajas data={listgastos} />
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
  listgastos: state.sepelio.listadogastos
});

export default connect(mapStateToProps, {
  caja,
  nuevoGasto,
  updateTotales,
  listadoGastos,
  eliminarGasto,
  updateCierreCaja
})(CajaGastos);
