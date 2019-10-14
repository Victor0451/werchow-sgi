import React, { Component } from "react";
import TareaSelect from "react-select";
import { acciones, nueavaaccion } from "../layouts/Arrays/arrays";
import Notificacion from "./Notificacion";

import { connect } from "react-redux";
import { getGestionCaso } from "../../actions/campanasActions";
class FormAcciones extends Component {
  render() {
    let tmp = new Date(Date.now());
    let year = tmp.getFullYear();
    let month = tmp.getMonth() + 1;
    let day = tmp.getDate();
    let hr = tmp.getHours();
    let mm = tmp.getMinutes();
    //let fecha = tmp.toISOString(day, month, year, hr, mm).split("GMT")[0];
    let fecha = `${day}/${month}/${year} ${hr}:${mm}`;
    let fecha1 = `${day + 1}/${month}/${year} ${hr}:${mm}`;

    const {
      gestion,
      caso,
      fechaaccionRef,
      fechaaccionnuevaRef,
      obsRef,
      nuevaaccionRef,
      handleChange,
      accion,
      contratoRef,
      idcasoRef
    } = this.props;

    return (
      <div className="container">
        <div className="jumbotron">
          <h3>
            <u>Datos del socio</u>
          </h3>
          <form className="mt-4 border">
            <div className="row">
              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Legajo: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.contrato}
                  ref={contratoRef}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Caso N°: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.idcaso}
                  ref={idcasoRef}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Apellido: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.apellido}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Nombre: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.nombre}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Telefono: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.telefono}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Celular: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.movil}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Domicilio: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.calle}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> N°: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.nro_calle}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Barrio: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.barrio}
                  readOnly
                />
              </div>

              <div className="form-group col-md-6">
                <label>
                  <strong>
                    {" "}
                    <u> Localidad: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={caso.localidad}
                  readOnly
                />
              </div>

              <div className="container form-group col-md-8 mt-4 text-center alert alert-danger rounded-pill">
                <label>
                  <strong>
                    {" "}
                    <u> Deuda: {""}</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="mr-2 alert alert-danger border-0"
                  defaultValue={caso.montoadeudado}
                  readOnly
                ></input>
              </div>
            </div>
          </form>
        </div>

        {!gestion ? null : (
          <div className="jumbotron">
            <h3>
              <u>Acciones Anterior</u>
            </h3>

            <table className="table table-striped table-sm table-responsive border mt-4">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">CONTRATO</th>
                  <th scope="col">ACCION</th>
                  <th scope="col">FECHA ACCION</th>
                  <th scope="col">NUEVA ACCION</th>
                  <th scope="col">FECHA NUEVA ACCION</th>
                  <th scope="col">OBSERVACION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{gestion.contrato}</td>
                  <td>{gestion.accion}</td>
                  <td>{gestion.fechaaccion}</td>
                  <td>{gestion.nuevaaccion}</td>
                  <td>{gestion.fechanuevaaccion}</td>
                  <td>{gestion.observacion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <hr />
        {gestion.accion === 1 ||
        gestion.accion === 2 ||
        gestion.accion === 3 ||
        gestion.accion === 4 ||
        gestion.accion === 5 ||
        gestion.accion === 6 ? (
          <div>
            <div className="jumbotron">
              <h3>
                <u>Acciones</u>
              </h3>
              <div className="form-row mt-4">
                <div className="form-group col-md-6">
                  <label>Acciones</label>

                  <TareaSelect
                    options={acciones}
                    placeholder={"Elige una accion"}
                    onChange={value => handleChange(value, "accion")}
                  />
                </div>

                <div className="form-group col-md-6">
                  <label>
                    <strong>
                      <u>Fecha de Accion</u>
                    </strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={fecha}
                    ref={fechaaccionRef}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-12">
                  <label>Observaciones</label>
                  <textarea className="form-control" rows="3" ref={obsRef} />
                </div>
              </div>
            </div>

            {accion === 1 ||
            accion === 2 ||
            accion === 3 ||
            accion === 4 ||
            accion === 5 ||
            accion === 6 ? (
              <div className="jumbotron">
                <h3>
                  <u>Nueva Accion</u>
                </h3>
                <label className="form-group col-md-12 mt-4">
                  <strong>
                    <label>Nueva Accion</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="VERIFICAR DATOS Y LLAMAR DE NUEVO"
                      ref={nuevaaccionRef}
                      readOnly
                    />
                  </strong>
                </label>
                <div className="form-group col-md-12">
                  <label>Fecha de Accion</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={fecha1}
                    ref={fechaaccionnuevaRef}
                    readOnly
                  />
                </div>
              </div>
            ) : accion === 7 ? (
              <div className="jumbotron">
                <h3>
                  <u>Nueva Accion</u>
                </h3>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Acciones</label>
                    <TareaSelect
                      options={nueavaaccion}
                      placeholder={"Elige una accion"}
                      onChange={value => handleChange(value, "nuevaaccion")}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Fecha de Accion</label>
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={fecha}
                      ref={fechaaccionnuevaRef}
                    />
                  </div>
                </div>
              </div>
            ) : accion === 8 || accion === 9 ? (
              <div className="jumbotron">
                <h3>
                  <u>Nueva Accion</u>
                </h3>
                <div className="row">
                  <label className="form-group col-md-12 mt-4">
                    <strong>
                      <label>Nueva Accion</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="SE CIERRA EL CASO"
                        ref={nuevaaccionRef}
                        readOnly
                      />
                    </strong>
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <label>Fecha de Accion</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={fecha}
                    ref={fechaaccionnuevaRef}
                  />
                </div>
              </div>
            ) : accion === 10 ? (
              <div className="jumbotron">
                <h3>
                  <u>Nueva Accion</u>
                </h3>
                <div className="row">
                  <label className="form-group col-md-12 mt-4">
                    <strong>
                      <label>Nueva Accion</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="SE CIERRA EL CASO Y SE ENVIA NOTIFICACION"
                        ref={nuevaaccionRef}
                        readOnly
                      />
                    </strong>
                  </label>
                </div>
                <div className="form-group col-md-12">
                  <label>Fecha de Accion</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={fecha}
                    ref={fechaaccionnuevaRef}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bd-example-modal-xl"
                  >
                    Generar Notificacion
                  </button>
                </div>
                <div
                  className="modal fade bd-example-modal-xl"
                  role="dialog"
                  aria-labelledby="myExtraLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content p-2">
                      <Notificacion caso={caso} />
                    </div>
                  </div>
                </div>
              </div>
            ) : accion === 15 ? (
              <div>sldñfkjlkdsjf</div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  getcaso: state.campanas.getcaso,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    getGestionCaso
  }
)(FormAcciones);
