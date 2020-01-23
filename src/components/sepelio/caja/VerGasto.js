import React, { Component } from "react";
import moment from "moment-timezone";
import { Link } from "react-router-dom";

import { gasto } from "../../../actions/sepelioActions";
import { connect } from "react-redux";

class VerGasto extends Component {
  state = {
    gastosep: {}
  };

  componentDidMount() {
    const idgasto = this.props.match.params.id;

    this.props.gasto(idgasto);

    setTimeout(() => {
      const { gastosep } = this.props;
      console.log(gastosep);
      this.setState({
        gastosep: gastosep
      });
    }, 100);
  }
  render() {
    const { gastosep } = this.state;
    return (
      <div className="form-style-8">
        <h2 className="mt-4 mb-4">Detalle del Gasto N° {gastosep.idgastos}</h2>
        <div className="jumbotron">
          <div className="row border border-dark">
            <div className="col-md-4 mt-4 mb-4 ">
              <strong>
                <u>EMPRESA</u>: {""}
              </strong>
              {gastosep.empresa}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>CONCEPTO</u>: {""}
              </strong>
              {gastosep.concepto}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>PROVEEDOR</u>: {""}
              </strong>
              {gastosep.proveedor}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>FACTURA</u>: {""}
              </strong>
              {gastosep.tipofactura}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>PTO. VENTA</u>: {""}
              </strong>
              {gastosep.ptoventa}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>N° FACTURA</u>: {""}
              </strong>
              {gastosep.nfactura}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>MEDIO DE PAGO</u>: {""}
              </strong>
              {gastosep.mediopago}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>FECHA</u>: {""}
              </strong>
              {moment(gastosep.fecha).format("YYYY-MM-DD HH:mm:ss")}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>% IVA</u>: {""}
              </strong>
              {gastosep.porciva}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>MONTO IVA</u>: {""}
              </strong>
              {gastosep.montoiva}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>RET. IIBB</u>: {""}
              </strong>
              {gastosep.retiibb}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>RET. GGCIAS</u>: {""}
              </strong>
              {gastosep.retggcias}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>PERC. IVA</u>: {""}
              </strong>
              {gastosep.perciva}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>TOTAL</u>: {""}
              </strong>
              {gastosep.total}
            </div>

            <div className="col-md-6 mt-4 mb-4">
              <strong>
                <u>DETALLE</u>: {""}
              </strong>
              {gastosep.detalle}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <strong>
                <u>OPERADOR ENCARGADO DEL TRAMITE</u>: {""}
              </strong>
              {gastosep.operadortramite}
            </div>
          </div>
        </div>

        <div className="jumbotron">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              <Link
                to={`/sepelio/gastoscaja/${gastosep.idcaja}`}
                className="btn btn-info col-md-3 mr-1"
              >
                Atras
              </Link>
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
  gastosep: state.sepelio.gasto
});

export default connect(mapStateToProps, { gasto })(VerGasto);
