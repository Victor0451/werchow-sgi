import React, { Component } from "react";

import ListadoGestionCaso from "../layouts/Table/Table";
import ListadoCasosTrabajados from "../layouts/Table/Table2";

import { connect } from "react-redux";
import {
  campanaOperador,
  gestionCaso,
  updateAccion,
  campanaOperadorTrab,
  cerrarCaso,
  getGestionCaso,
  getRecuperacion,
  getDeuda
} from "../../actions/campanasActions";


class GestionAt extends Component {
  fechaaccionRef = React.createRef();
  fechaaccionnuevaRef = React.createRef();
  obsRef = React.createRef();
  nuevaaccionRef = React.createRef();
  contratoRef = React.createRef();
  idcasoRef = React.createRef();

  state = {
    campop: [],
    campoptrab: [],
    caso: {},
    accion: "",
    gestion: {},
    getrec: {},
    getdeuda: {},
    nuevaaccion: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  componentDidMount() {
    const { user } = this.props.auth;

    let id = user.usuario;

    this.props.campanaOperador(id);
    this.props.campanaOperadorTrab(id);
    this.props.getRecuperacion(id);
    this.props.getDeuda(id);

    setTimeout(() => {
      const { campop, campoptrab, getrec, getdeuda } = this.props;

      this.setState({
        campop: campop[0],
        campoptrab: campoptrab[0],
        getrec: getrec[0][0],
        getdeuda: getdeuda[0][0]
      });
    }, 300);
  }

  obtenerDatos = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    let nuevaaccion = "";

    const datos = {
      operador: user.usuario,
      idcaso: this.idcasoRef.current.value,
      accion: this.state.accion,
      nuevaaccion,
      fechaaccion: this.fechaaccionRef.current.value,
      fechanuevaaccion: this.fechaaccionnuevaRef.current.value,
      observacion: this.obsRef.current.value,
      contrato: this.contratoRef.current.value
    };

    if (datos.accion >= 1 && this.state.accion <= 6) {
      datos.nuevaaccion = this.nuevaaccionRef.current.value;
    }
    if (datos.accion === 7) {
      datos.nuevaaccion = this.state.nuevaaccion;

      if (datos.nuevaaccion === 11) datos.nuevaaccion = "SE ENVIA COBRADOR";

      if (datos.nuevaaccion === 12) datos.nuevaaccion = "PASA POR OFICINA";
    }
    if (datos.accion === 8) {
      datos.nuevaaccion = "SOCIO DE NIEGA A PAGAR, SE CIERRA EL CASO";
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
      this.props.gestionCaso(datos);
    }
    if (datos.accion === 9) {
      datos.nuevaaccion = "SOCIO ESTA AL DIA CON SUS PAGOS, SE CIERRA EL CASO";
      let id = datos.idcaso;
      console.log(id);
      this.props.cerrarCaso(id);
      this.props.gestionCaso(datos);
    }

    this.props.gestionCaso(datos);

    let id = datos.idcaso;
    this.props.updateAccion(id);

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  deuda = array => {
    let importe = array.reduce(
      (sum, value) =>
        typeof value.cuota == "number" ? sum + value.cuota : sum,
      0
    );
    return importe;
  };

  render() {
    const { campop, campoptrab, gestion, getrec, getdeuda } = this.state;

    let mes;
    return (
      <div className="container">
        <h1 className="mt-4 mb-4"> Gestion Campaña de Atrasados {mes}</h1>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Listado de Casos
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Casos Trabajados
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="resumen-tab"
              data-toggle="tab"
              href="#resumen"
              role="tab"
              aria-controls="resumen"
              aria-selected="false"
            >
              Resumen
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {campop.length === 0 ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Asignados
              </div>
            ) : (
              <div className="mt-4">
                <ListadoGestionCaso
                  data={campop}
                  fechaaccionRef={this.fechaaccionRef}
                  fechaaccionnuevaRef={this.fechaaccionnuevaRef}
                  obsRef={this.obsRef}
                  nuevaaccionRef={this.nuevaaccionRef}
                  contratoRef={this.contratoRef}
                  obtenerDatos={this.obtenerDatos}
                  handleChange={this.handleChange}
                  accion={this.state.accion}
                  idcasoRef={this.idcasoRef}
                />
              </div>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {campoptrab.length === 0 ? (
              <div className="alert alert-primary mt-4">
                No Tienes Casos Trabajados
              </div>
            ) : (
              <ListadoCasosTrabajados
                data={campoptrab}
                selcaso={this.selcaso}
                gestion={gestion}
              />
            )}
          </div>

          <div
            className="tab-pane fade show active"
            id="resumen"
            role="tabpanel"
            aria-labelledby="resumen-tab"
          >
            <div>
              <h3 className="mt-4">Resumen de la Gestion</h3>
              <div className="mt-4 alert alert-success text-center text-dark">
                <strong>MONTO RECUPERADO: {getrec.recuperacion} </strong> {""}
              </div>
              <div className="mt-4 alert alert-danger text-center text-dark">
                <strong>MONTO ADEUDADO: {getdeuda.deuda} </strong> {""}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  campop: state.campanas.campop,
  campoptrab: state.campanas.campoptrab,
  getcaso: state.campanas.getcaso,
  getrec: state.campanas.getrec,
  getdeuda: state.campanas.getdeuda,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    campanaOperador,
    gestionCaso,
    updateAccion,
    campanaOperadorTrab,
    cerrarCaso,
    getGestionCaso,
    getRecuperacion,
    getDeuda
  }
)(GestionAt);
