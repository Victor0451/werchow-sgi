import React, { Component } from "react";
import ListadoCajasSepelio from "./ListadoCajasSepelio";
import moment from "moment-timezone";
import { connect } from "react-redux";
import { nuevaCaja } from "../../../actions/sepelioActions";
import TipoFacturaSelect from "react-select";
import ConceptoSelect from "react-select";
import EmpresaSelect from "react-select";

import { tipofac, conceptossep, empresa } from "../../layouts/Arrays/arrays";

class NuevaCajaSepelio extends Component {
  montoRef = React.createRef();
  detalleRef = React.createRef();
  fechaRef = React.createRef();
  nFacturaRef = React.createRef();
  ptoVentaRef = React.createRef();

  state = {
    cajas: {},
    tipofactura: {},
    concepto: {},
    empresa: {}
  };

  nuevaCaja = () => {
    const { user } = this.props.auth;
    const { tipofactura, concepto, empresa } = this.state;

    const nuevaCaja = {
      empresa: empresa,
      monto: this.montoRef.current.value,
      concepto: concepto,
      detalle: this.detalleRef.current.value,
      fecha: this.fechaRef.current.value,
      tipofactura: tipofactura,
      ptoventa: this.ptoVentaRef.current.value,
      nfactura: this.nFacturaRef.current.value,
      operador: user.usuario,
      estado: 1,
      gastos: 0,
      totalcaja: this.montoRef.current.value
    };

    this.props.nuevaCaja(nuevaCaja);
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.label });
  };

  render() {
    const { user } = this.props.auth;
    let tmp = new Date(Date.now());
    let fecha = moment(tmp)
      .tz("America/Argentina/Buenos_Aires")
      .format("YYYY-MM-DD HH:mm:ss");
    return (
      <div>
        <div className="mt-4 form-style-8">
          <h2 className="mb-4">Caja de Sepelio</h2>

          <div className="row">
            <div className="col-md-4">
              <h3>Habilitar Caja</h3>
            </div>

            <div className="col-md-4 d-flex justify-content-end mt-2">
              <strong>
                <h4>Operador: {user.usuario}</h4>
              </strong>
            </div>
          </div>

          <div className="row mt-4 mb-4">
            <div className="form-group col-md-6">
              <EmpresaSelect
                options={empresa}
                placeholder={"Empresa"}
                onChange={value => this.handleChange(value, "empresa")}
              />
            </div>
            <div className="form-group col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="monto"
                  ref={this.montoRef}
                  placeholder="Ingresar Monto"
                />
                <label>Monto Habilitado</label>
              </p>
            </div>

            <div className="form-group col-md-6">
              <ConceptoSelect
                options={conceptossep}
                placeholder={"Concepto"}
                onChange={value => this.handleChange(value, "concepto")}
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

            <div className="form-group col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  name="fecha"
                  value={fecha}
                  readOnly
                  ref={this.fechaRef}
                />
                <label>Fecha</label>
              </p>
            </div>

            <div className="mt-2 form-group col-md-12">
              <p className="has-dynamic-label">
                <textarea
                  rows="3"
                  className=""
                  name="detalle"
                  placeholder="Detalle Habilitacion"
                  ref={this.detalleRef}
                />
                <label>Detalle de Habilitacion</label>
              </p>
            </div>
            <div className="mt-2 form-group col-md-12">
              <button
                className="mt-4 btn btn-primary btn-block"
                onClick={this.nuevaCaja}
              >
                Habilitar
              </button>
            </div>
          </div>
          <div className="alert alert-info mt-4">
            Ingrese el monto que va a habilitar para la caja de sepelio, del
            cual se debitaran los gastos del servicio
          </div>
        </div>

        <div id="listadocajas">
          <ListadoCajasSepelio />
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { nuevaCaja })(NuevaCajaSepelio);
