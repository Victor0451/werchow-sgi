import React, { Component } from "react";
import TareaSelect from "react-select";
import { acciones, nueavaaccion } from "../layouts/Arrays/arrays";

export default class FormAcciones extends Component {
  fechaaccionRef = React.createRef();
  fechaaccionnuevaRef = React.createRef();

  state = {
    caso: {},
    accion: "",
    fechaaccion: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };
  render() {
    let tmp = new Date(Date.now());
    let year = tmp.getFullYear();
    let month = tmp.getMonth();
    let day = tmp.getDate();
    let fecha = tmp.toISOString().split("T")[0];
    let fecha1 = new Date(year, month, day + 1).toISOString().split("T")[0];

    const { accion } = this.state;
    const { caso } = this.props;

    return (
      <div className="container">
        <div className="jumbotron">
          <h3>
            <u>Datos del socio</u>
          </h3>
          <form className="mt-4 border">
            <div className="row">
              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Legajo: </u>
                </strong>
                {caso.contrato}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Apellido: </u>
                </strong>
                {caso.apellido}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Nombre: </u>
                </strong>
                {caso.nombre}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Telefono: </u>
                </strong>
                {caso.telefono}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Movil: </u>
                </strong>
                {caso.movil}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> DOMICILIO: </u>
                </strong>
                {caso.calle} - N° {caso.nro_calle}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Barrio: </u>
                </strong>
                {caso.barrio}
              </label>

              <label className="form-group col-md-6">
                <strong>
                  {" "}
                  <u> Localidad: </u>
                </strong>
                {caso.localidad}
              </label>

              <label className="container form-group col-md-8 mt-4 text-center alert alert-danger">
                <strong>
                  {" "}
                  <u> Deuda: </u>
                </strong>
                {caso.montoadeudado}
              </label>
            </div>
          </form>
        </div>

        <hr />

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
                onChange={value => this.handleChange(value, "accion")}
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  <u>Fecha de Accion</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                defaultValue={fecha}
                ref={this.fechaaccionRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-12">
              <label>Observaciones</label>
              <textarea className="form-control" rows="3" />
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
                <u>Nueva Accion:</u> VERIFICAR DATOS Y LLAMAR DE NUEVO
              </strong>
            </label>
            <div className="form-group col-md-12">
              <label>Fecha de Accion</label>
              <input
                type="date"
                className="form-control"
                defaultValue={fecha1}
                //ref={this.fechaaccionRef}
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
                  //onChange={value => this.handleChange(value, "accion")}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Fecha de Accion</label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={fecha}
                  ref={this.fechaaccionnuevaRef}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
