import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { consultarFicha, prestamosPorId } from "../../actions/prestamosActions";

import ReactToPrint from "react-to-print";

class CaratulaPrestamos extends Component {
  state = {
    ficha: {},
    prestporop: {}
  };
  componentDidMount() {
    let ptm_id = this.props.match.params.id;

    this.props.prestamosPorId(ptm_id);

    setTimeout(() => {
      const { prestporop } = this.props;

      this.setState({
        prestporop: prestporop
      });

      let contrato = prestporop.ptm_ficha;

      this.props.consultarFicha(contrato);
      setTimeout(() => {
        const { ficha } = this.props;
        this.setState({
          ficha: ficha
        });
      }, 100);
    }, 100);
  }


  render() {
    const { prestporop, ficha } = this.state;
    let porcentaje = Math.floor(prestporop.ptm_neto * 30) / 100;

    return (
      <div>
        <div
          className="form-style-8 border"
          ref={el => (this.componentRef = el)}
        >
          <h2>Subsidio Por Contencion Familiar - Beneficiario:</h2>
          <h1 className="border col-md-12">
            <strong>
              <u>
                {ficha.APELLIDOS}, {ficha.NOMBRES}
              </u>
            </strong>
          </h1>{" "}
          <div className="h3 row mt-2 ">
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>DNI</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong> {ficha.NRO_DOC}</strong>
            </div>
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>LEGAJO</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong> {prestporop.ptm_legajo}</strong>
            </div>
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>FICHA</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong> {ficha.CONTRATO}</strong>
            </div>
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>ANTIGUIEDAD</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong> {prestporop.ptm_ant} AÑOS</strong>
            </div>
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>FECHA DE SOLICITUD</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>{prestporop.ptm_fechasol}</strong>
            </div>{" "}
            <div className="col-md-4 mt-2 border">
              <strong>
                <u>ZONA</u>:
              </strong>
            </div>
            {ficha.SUCURSAL === "W" ? (
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>CASA CENTRAL</strong>
              </div>
            ) : ficha.SUCURSAL === "P" ? (
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>SAN PEDRO</strong>
              </div>
            ) : ficha.SUCURSAL === "L" ? (
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>PALPALA</strong>
              </div>
            ) : ficha.SUCURSAL === "R" ? (
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>PERICO</strong>
              </div>
            ) : null}{" "}
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>RENOVACION</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>{prestporop.ptm_renov}</strong>
            </div>
          </div>
          <h2 className="mt-4">Detalles del Subsidio</h2>
          <div className="h3 row mt-2 ">
            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>SUBSIDIO</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>$ {prestporop.ptm_prestamo}</strong>
            </div>

            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>CUOTAS</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>{prestporop.ptm_cuotas}</strong>
            </div>

            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>MONTO POR CUOTA</u>:
              </strong>
            </div>

            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>$ {prestporop.ptm_valcuota}</strong>
            </div>

            <div className="col-md-4 mt-2 border">
              {" "}
              <strong>
                {" "}
                <u>SUELDO NETO</u>:
              </strong>
            </div>
            <div className="col-md-8 mt-2 border">
              {" "}
              <strong>$ {prestporop.ptm_neto}</strong>
            </div>
          </div>
          <h2 className="mt-4">Observaciones</h2>
          <div className=" h5 row ">
            <div className="col-md-12 mt-2">
              {porcentaje > prestporop.ptm_valcuota ? (
                <div className="alert alert-success border-dark">
                  <strong>
                    <u>PREAPROBACION</u>
                  </strong>
                  : EL 30% DEL SUELDO NETO DEL AFILIADO SUPERA AL VALOR DEL
                  SUBSIDIO SOLICITADO{" "}
                </div>
              ) : porcentaje < prestporop.ptm_valcuota ? (
                <div className="alert alert-danger border-dark">
                  <strong>
                    <u>PREAPROBACION</u>
                  </strong>
                  : EL 30% DEL SUELDO NETO DEL AFILIADO NO SUPERA AL VALOR DEL
                  SUBSIDIO SOLICITADO{" "}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="jumbotron container">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              <ReactToPrint
                trigger={() => (
                  <Link className="btn btn-primary">imprimir </Link>
                )}
                content={() => this.componentRef}
              />
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
  ficha: state.prestamos.ficha,
  prestporop: state.prestamos.prestporop
});

export default connect(mapStateToProps, { consultarFicha, prestamosPorId })(
  CaratulaPrestamos
);
