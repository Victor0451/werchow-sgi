import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { consultarFicha, altaPrestamo } from "../../actions/prestamosActions";
import toastr from "../../utils/toastr";
import CapitalSelect from "react-select";
import CuotasSelect from "react-select";
import RenovaSelect from "react-select";

import {
  capitalaprest,
  cuotasprest,
  renovaprest
} from "../layouts/Arrays/arrays";

class AltaPrestamos extends Component {
  fichaRef = React.createRef();
  legajoRef = React.createRef();
  netoRef = React.createRef();

  state = {
    ficha: {},
    capital: "",
    cuotas: "",
    cuoprest: "",
    anti: "",
    renova: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  buscarFicha = e => {
    e.preventDefault();

    let contrato = this.fichaRef.current.value;

    this.props.consultarFicha(contrato);

    setTimeout(() => {
      const { ficha } = this.props;

      if (!ficha) {
        toastr.warning(
          "EL numero de socio ingresado no pertenece a ningun afiliado",
          "ATENCION"
        );
      }
      if (ficha && ficha.GRUPO !== 6) {
        toastr.error(
          `El afiliado ${ficha.APELLIDOS}, ${ficha.NOMBRES}, ficha N° ${ficha.CONTRATO}, NO ES POLICIA`,
          "ATENCION"
        );
      }
      let tmp = new Date(Date.now());
      let fecha = moment(tmp).format("DD/MM/YYYY");
      let anti = moment(fecha).diff(ficha.ALTA, "years");

      this.setState({ anti: anti });
    }, 100);
  };

  calculoPrestamo = e => {
    e.preventDefault();
    const { capital, cuotas } = this.state;

    let principal = parseInt(capital);
    let interest = 120 / 100 / 12;
    let payments = parseInt(cuotas);
    let x = Math.pow(1 + interest, payments);
    let monthly = ((principal * x * interest) / (x - 1)).toFixed(0);

    let capadev = monthly * payments;

    this.setState({
      cuoprest: monthly,
      capadev: capadev
    });
  };

  cargarPrestamos = e => {
    e.preventDefault();

    const { anti, cuotas, capital, cuoprest, renova } = this.state;
    const { ficha, auth } = this.props;

    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD/MM/YYYY");

    const prestamo = {
      fechacarga: fecha,
      fechasol: fecha,
      operador: auth.user.codigo,
      ficha: ficha.CONTRATO,
      legajo: this.legajoRef.current.value,
      anti: anti,
      renova: renova,
      capital: capital,
      cuotas: cuotas,
      valcuota: cuoprest,
      neto: this.netoRef.current.value,
      estado: "PENDIENTE"
    };

    let porcentaje = Math.floor(prestamo.neto * 30) / 100;

    if (porcentaje > cuoprest) {
      toastr.success(
        "El 30% del sueldo neto supera al valor de la cuota del prestamo",
        "Atencion"
      );
    } else {
      toastr.error(
        "El 30% del sueldo neto no supera al valor de la cuota del prestamo, su aprobacion queda sujeta a decision del los superiores",
        "Atencion"
      );
    }

    this.props.altaPrestamo(prestamo);
  };

  render() {
    const { auth, ficha } = this.props;
    const { cuoprest, capital, capadev, cuotas, anti } = this.state;

    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD/MM/YYYY");
    let mesi = moment(tmp)
      .add(1, "months")
      .format("MM/YYYY");
    let mesf = moment(tmp)
      .add(cuotas, "months")
      .format("MM/YYYY");

    return (
      <div>
        <div className="form-style-8">
          <h2>Alta de Prestamos: Datos del Operador</h2>

          <div className="d-flex justify-content-between">
            <div className="row mb-4">
              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    name="operador"
                    placeholder="Operador"
                    value={auth.user.usuario}
                    readOnly
                  />
                  <label>Operador:</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    name="idoperador"
                    placeholder="Codigo"
                    value={auth.user.codigo}
                    readOnly
                  />
                  <label>Codigo de Operador:</label>
                </p>
              </div>

              <div className="form-group col-md-4">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    name="fecha"
                    placeholder="Fecha"
                    readOnly
                    value={fecha}
                  />
                  <label>Fecha:</label>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-style-8">
          <h2>Ingrese N° de Fiche del afiliado</h2>

          <form onSubmit={this.buscarFicha}>
            <div className="row mb-4">
              <div className="form-group col-md-6">
                <p className="has-dynamic-label">
                  <input
                    type="text"
                    name="ficha"
                    placeholder="N° de Ficha"
                    ref={this.fichaRef}
                  />
                  <label>N° Ficha:</label>
                </p>
              </div>

              <div className="form-group col-md-6 mt-4">
                <button type="submit" className="btn btn-block btn-primary">
                  Buscar
                </button>
              </div>
            </div>
          </form>

          {ficha && ficha.GRUPO === 6 ? (
            <div className="">
              <hr className="mt-4 mb-4" />
              <h2>Informacion del Afiliado</h2>

              <form>
                <div className="d-flex justify-content-between">
                  <div className="row mb-4">
                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="N° Socio"
                          value={ficha.CONTRATO}
                          readOnly
                        />
                        <label>N° Socio:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Codigo"
                          value={ficha.NRO_DOC}
                          readOnly
                        />
                        <label>DNI:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Codigo"
                          value={ficha.APELLIDOS}
                          readOnly
                        />
                        <label>Apellido:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Nombre"
                          readOnly
                          value={ficha.NOMBRES}
                        />
                        <label>Nombre:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="N° Socio"
                          value={ficha.CALLE}
                          readOnly
                        />
                        <label>Calle:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Codigo"
                          value={ficha.NRO_CALLE}
                          readOnly
                        />
                        <label>N°:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Nombre"
                          readOnly
                          value={ficha.BARRIO}
                        />
                        <label>Barrio:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="N° Socio"
                          value={ficha.LOCALIDAD}
                          readOnly
                        />
                        <label>Localidad:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Codigo"
                          value={ficha.TELEFONO}
                          readOnly
                        />
                        <label>Telefono:</label>
                      </p>
                    </div>

                    <div className="form-group col-md-4">
                      <p className="has-dynamic-label">
                        <input
                          type="text"
                          placeholder="Nombre"
                          readOnly
                          value={ficha.MOVIL}
                        />
                        <label>Movil:</label>
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Opciones del Prestamo</h2>
                <div className="row">
                  <div className="col-md-4">
                    <p className="has-dynamic-label">
                      <CapitalSelect
                        options={capitalaprest}
                        placeholder={"Capital a Prestar"}
                        onChange={value => this.handleChange(value, "capital")}
                      />
                      <label>Capital:</label>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="has-dynamic-label">
                      <CuotasSelect
                        options={cuotasprest}
                        placeholder={"Cuotas del Prestamo"}
                        onChange={value => this.handleChange(value, "cuotas")}
                      />
                      <label>Cuotas:</label>
                    </p>
                  </div>

                  <div className="col-md-4 ">
                    <button
                      className="btn btn-primary btn-block mt-4"
                      onClick={this.calculoPrestamo}
                    >
                      {" "}
                      Calcular Cuota
                    </button>
                  </div>

                  {cuoprest.length !== 0 ? (
                    <div className="mt-4 mb-4">
                      <h2 className="mt-4">
                        Informacion del prestamos solicitado
                      </h2>

                      <div className="row d-flex mt-4 mb-4">
                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Cuota Mensual"
                              readOnly
                              value={capital}
                            />
                            <label>Capital Solicitado:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Cuota Mensual"
                              readOnly
                              value={cuoprest}
                            />
                            <label>Cuota Mensual:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Cuota Mensual"
                              readOnly
                              value={capadev}
                            />
                            <label>Capital a Devolver:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Legajo"
                              ref={this.legajoRef}
                            />
                            <label>Legajo:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Sueldo Neto"
                              ref={this.netoRef}
                            />
                            <label>Sueldo Neto:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-4">
                          <p className="has-dynamic-label">
                            <input
                              type="text"
                              placeholder="Antigüedad"
                              readOnly
                              value={anti}
                            />
                            <label>Antigüedad (En Años):</label>
                          </p>
                        </div>

                        <div className="col-md-4">
                          <p className="has-dynamic-label">
                            <RenovaSelect
                              options={renovaprest}
                              placeholder={"Renovacion"}
                              onChange={value =>
                                this.handleChange(value, "renova")
                              }
                            />
                            <label>Capital:</label>
                          </p>
                        </div>

                        <div className="form-group col-md-8 mt-4">
                          <button
                            className="btn btn-primary btn-block"
                            onClick={this.cargarPrestamos}
                          >
                            Cargar Prestamo
                          </button>
                        </div>
                      </div>

                      <div className="row mt-2 d-flex justify-content-center alert alert-info text-center">
                        {" "}
                        EL PRESTAMO EMPEZARA A DEBITARSE EN{" "}
                        <strong>
                          {" "}
                          <u> {mesi} </u>{" "}
                        </strong>{" "}
                        Y FINALIZARIA EN{" "}
                        <strong>
                          {" "}
                          <u> {mesf} </u>{" "}
                        </strong>{" "}
                      </div>
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          ) : ficha && ficha.GRUPO !== 6 ? (
            <div className=" ">
              <strong className="border border-dark alert alert-danger text-justify d-flex justify-content-center">
                El Afiliado {ficha.APELLIDOS}, {ficha.NOMBRES}, ficha N°{" "}
                {ficha.CONTRATO} NO ES POLICIA. Por lo tanto no podra realizar
                el prestamo.
              </strong>
            </div>
          ) : !ficha ? null : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  ficha: state.prestamos.ficha
});

export default connect(mapStateToProps, { consultarFicha, altaPrestamo })(
  AltaPrestamos
);
