import React, { Component } from "react";

import moment from "moment-timezone";
import {
  conceptossep,
  empresa,
  porciva,
  prov,
  tipofac,
  mediopag
} from "../../layouts/Arrays/arrays";

import {
  gasto,
  caja,
  updateTotales,
  updateGasto
} from "../../../actions/sepelioActions";

import EmpresaSelect from "react-select";
import ProveedorSelect from "react-select";
import MedioPagoSelect from "react-select";
import ConceptoSelect from "react-select";
import IvaSelect from "react-select";
import TipoFacturaSelect from "react-select";

import { connect } from "react-redux";

class EditarGasto extends Component {
  fechaRef = React.createRef();
  nFacturaRef = React.createRef();
  ptoVentaRef = React.createRef();
  montoIVARef = React.createRef();
  retIIBBRef = React.createRef();
  retggciasRef = React.createRef();
  percIVARef = React.createRef();
  totalRef = React.createRef();
  opTramiteRef = React.createRef();
  detalleRef = React.createRef();

  state = {
    empresa: "",
    proveedor: "",
    tipofactura: "",
    mediopago: "",
    concepto: "",
    porciva: "",
    gastosep: {}
  };

  componentDidMount() {
    const idgasto = this.props.match.params.id;

    this.props.gasto(idgasto);

    setTimeout(() => {
      const { gastosep } = this.props;
      console.log(gastosep);
      this.props.caja(gastosep.idcaja);

      this.setState({
        gastosep: gastosep
      });
    }, 100);
  }

  handleChange = (value, state) => {
    this.setState({ [state]: value.label });
  };

  editarGastos = () => {
    const idgasto = this.props.match.params.id;
    const { user } = this.props.auth;
    const { cajasep } = this.props;
    const { gastosep } = this.state;

    const idcaja = gastosep.idcaja;
    const {
      empresa,
      proveedor,
      tipofactura,
      mediopago,
      concepto,
      porciva
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
      operadortramite: this.opTramiteRef.current.value,
      montoiva: this.montoIVARef.current.value,
      retiibb: this.retIIBBRef.current.value,
      retggcias: this.retggciasRef.current.value,
      perciva: this.percIVARef.current.value,
      detalle: this.detalleRef.current.value,
      total: this.totalRef.current.value
    };

    if (empresa === "") {
      gasto.empresa = gastosep.empresa;
    }
    if (concepto === "") {
      gasto.concepto = gastosep.concepto;
    }
    if (mediopago === "") {
      gasto.mediopago = gastosep.mediopago;
    }
    if (tipofactura === "") {
      gasto.tipofactura = gastosep.tipofactura;
    }
    if (proveedor === "") {
      gasto.proveedor = gastosep.proveedor;
    }
    if (porciva === "") {
      gasto.porciva = gastosep.porciva;
    }

    this.props.updateGasto(gasto, idgasto);

    if (gastosep.total !== gasto.total) {
      let sumgastos = parseFloat(cajasep.gastos) - parseFloat(gastosep.total);

      let restacaja =
        parseFloat(cajasep.totalcaja) + parseFloat(gastosep.total);

      let sumgastosfinal = sumgastos + parseFloat(gasto.total);
      let restcajafinal = restacaja - parseFloat(gasto.total);

      const valores = {
        gastos: sumgastosfinal,
        totalcaja: restcajafinal
      };

      this.props.updateTotales(valores, idcaja);
      setTimeout(() => {
        window.location.href = `/sepelio/gastoscaja/${cajasep.idcaja}`;
      }, 50);
    }
  };

  render() {
    const { gastosep } = this.state;

    return (
      <div>
        <div className="mt-4  form-style-8">
          <h2 className="mb-4">Editar Gasto</h2>

          <div className="row mt-4 mb-4">
            <div className="form-group col-md-6">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>EMPRESA: {gastosep.empresa}</strong>
                </span>
              </h6>
              <EmpresaSelect
                options={empresa}
                placeholder={gastosep.empresa}
                onChange={value => this.handleChange(value, "empresa")}
              />
            </div>

            <div className="form-group col-md-6">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>PROVEEDOR: {gastosep.proveedor}</strong>
                </span>
              </h6>
              <ProveedorSelect
                options={prov}
                placeholder={"Proveedor"}
                onChange={value => this.handleChange(value, "proveedor")}
              />
            </div>

            <div className="form-group col-md-6">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>TIPO FACTURA: {gastosep.tipofactura}</strong>
                </span>
              </h6>
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
                  defaultValue={moment(gastosep.fecha).format("YYYY-MM-DD")}
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
                  defaultValue={gastosep.ptoventa}
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
                  defaultValue={gastosep.nfactura}
                />
                <label>N° Factura</label>
              </p>
            </div>

            <div className="form-group col-md-6">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>MEDIO DE PAGO: {gastosep.mediopago}</strong>
                </span>
              </h6>
              <MedioPagoSelect
                options={mediopag}
                placeholder={"Medio de Pago"}
                onChange={value => this.handleChange(value, "mediopago")}
              />
            </div>

            <div className="form-group col-md-6">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>CONCEPTO: {gastosep.concepto}</strong>
                </span>
              </h6>
              <ConceptoSelect
                options={conceptossep}
                placeholder={"Concepto"}
                onChange={value => this.handleChange(value, "concepto")}
              />
            </div>

            <div className="form-group col-md-4">
              <h6>
                {" "}
                <span className="badge badge-pill badge-secondary">
                  <strong>POCENTAJE DE IVA: {gastosep.porciva}</strong>
                </span>
              </h6>
              <IvaSelect
                options={porciva}
                placeholder={"Porcentaje de IVA"}
                onChange={value => this.handleChange(value, "porciva")}
              />
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.montoIVARef}
                  placeholder="Monto IVA"
                  defaultValue={gastosep.montoiva}
                />
                <label>Monto IVA</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.retIIBBRef}
                  placeholder="Ret. IIBB"
                  defaultValue={gastosep.retiibb}
                />
                <label>Ret. IIBB</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.retggciasRef}
                  placeholder="Ret. Gcias"
                  defaultValue={gastosep.retggcias}
                />
                <label>Ret. Gcias</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.percIVARef}
                  placeholder="Perc. IVA"
                  defaultValue={gastosep.perciva}
                />
                <label>Perc. IVA</label>
              </p>
            </div>

            <div className="form-group col-md-4">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.totalRef}
                  placeholder="Total"
                  defaultValue={gastosep.total}
                />
                <label>Total</label>
              </p>
            </div>

            <div className="mt-4 form-group col-md-3">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  ref={this.opTramiteRef}
                  placeholder="Operador del Tramite"
                  defaultValue={gastosep.operadortramite}
                />
                <label>Operador del Tramite</label>
              </p>
            </div>

            <div className="mt-4 form-group col-md-9">
              <p className="has-dynamic-label">
                <textarea
                  rows="3"
                  className=""
                  ref={this.detalleRef}
                  placeholder="Detalle"
                  defaultValue={gastosep.detalle}
                />
                <label>Detalle</label>
              </p>
            </div>

            <div className="mt-2 form-group col-md-12">
              <button
                className="mt-4 btn btn-primary btn-block"
                onClick={this.editarGastos}
              >
                Registrar Gasto
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  gastosep: state.sepelio.gasto,
  listgastos: state.sepelio.listadogastos,
  cajasep: state.sepelio.caja
});

export default connect(mapStateToProps, {
  gasto,
  caja,
  updateTotales,
  updateGasto
})(EditarGasto);
