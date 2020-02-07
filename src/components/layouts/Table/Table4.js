import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";
import FormAcciones from "../../campañas/FormAcciones";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import {
  gestionCaso,
  updateAccion,
  cerrarCaso,
  getGestionCaso
} from "../../../actions/campanasActions";
class Table4 extends React.Component {
  fechaaccionRef = React.createRef();
  fechaaccionnuevaRef = React.createRef();
  obsRef = React.createRef();
  nuevaaccionRef = React.createRef();
  contratoRef = React.createRef();
  idcasoRef = React.createRef();

  constructor() {
    super();
    this.state = {
      caso: {},
      gestion: {}
    };
  }

  obtenerDatos = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const { accion } = this.props;

    let tmp = new Date();

    let fecha = tmp.toISOString();

    let nuevaaccion = "";

    const datos = {
      operador: user.usuario,
      idcaso: this.idcasoRef.current.value,
      accion: accion,
      fechanuevaaccion: "",
      nuevaaccion,
      fechaaccion: this.fechaaccionRef.current.value,
      observacion: this.obsRef.current.value,
      contrato: this.contratoRef.current.value
    };

    console.log(datos);

    if (datos.accion >= 1 && datos.accion <= 6) {
      datos.nuevaaccion = "VERIFICAR LOS DATOS Y LLAMAR DE NUEVO";
      datos.fechanuevaaccion = fecha;
    }
    if (datos.accion === 7) {
      datos.nuevaaccion = this.state.nuevaaccion;

      if (datos.nuevaaccion === 11) datos.nuevaaccion = "SE ENVIA COBRADOR";

      if (datos.nuevaaccion === 12) datos.nuevaaccion = "PASA POR OFICINA";

      datos.fechanuevaaccion = this.fechaaccionnuevaRef.current.value;
    }

    if (datos.accion === 8) {
      datos.nuevaaccion = "SOCIO DE NIEGA A PAGAR, SE CIERRA EL CASO";
      datos.fechanuevaaccion = this.fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 9) {
      datos.nuevaaccion = "SOCIO ESTA AL DIA CON SUS PAGOS, SE CIERRA EL CASO";
      datos.fechanuevaaccion = this.fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 10) {
      datos.nuevaaccion = "SOCIO SERA NOTIFICADO, SE CIERRA EL CASO";
      datos.fechanuevaaccion = this.fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 13) {
      datos.nuevaaccion =
        "SOCIO PASARA AL ESTADO DE CARTERA ROJA, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fecha;
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 14) {
      datos.nuevaaccion = "SOCIO FALLECIDO, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fecha;
      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 15) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "RECORDATORIO DE PAGO AL SOCIO QUE AUN ESTA AL DIA";

      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 18) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "EL COMPROMISO DE PAGO SE CONCRETO CORRECTAMENTE";

      let id = datos.idcaso;
      this.props.cerrarCaso(id);
    }
    if (datos.accion === 19) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "EL INCUMPLIMIENTO EN EL COMPROMISO DE PAGO";

      let id = datos.idcaso;
      this.props.cerrarCaso(id);
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

  selcaso = index => {
    const { data } = this.props;
    const caso = data[index];
    this.setState({
      caso: caso
    });

    let id = caso.idcaso;

    this.props.getGestionCaso(id);

    setTimeout(() => {
      const { getcaso } = this.props;

      this.setState({
        caso: caso,
        gestion: getcaso[0]
      });
    }, 100);
  };

  render() {
    const { data, handleChange, accion } = this.props;
    const { caso, gestion } = this.state;

    return (
      <div className="container">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Cartera",
              columns: [
                {
                  Header: "Contrato",
                  id: "contrato",
                  accessor: d => d.contrato,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["contrato"] }),
                  filterAll: true
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: d => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: d => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: d => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
                  filterAll: true
                },
                {
                  Header: "Calle",
                  id: "calle",
                  accessor: d => d.calle,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["calle"] }),
                  filterAll: true
                },
                {
                  Header: "N°",
                  id: "nro_calle",
                  accessor: d => d.nro_calle,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nro_calle"] }),
                  filterAll: true
                },
                {
                  Header: "Barrio",
                  id: "barrio",
                  accessor: d => d.barrio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["barrio"] }),
                  filterAll: true
                },
                {
                  Header: "Localidad",
                  id: "localidad",
                  accessor: d => d.localidad,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["localidad"] }),
                  filterAll: true
                },
                {
                  Header: "Cuota",
                  id: "cuota",
                  accessor: d => d.cuota,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["cuota"] }),
                  filterAll: true
                },
                {
                  Header: "Mes",
                  id: "mes",
                  accessor: d => d.mes,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mes"] }),
                  filterAll: true
                },
                {
                  Header: "Año",
                  id: "ano",
                  accessor: d => d.ano,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ano"] }),
                  filterAll: true
                },
                {
                  Header: "Acciones",

                  Cell: row => (
                    <div>
                      <Link
                        to={"#"}
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg2"
                        onClick={() => this.selcaso(row.index)}
                      >
                        Acciones
                      </Link>
                    </div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />

        <div
          className="modal fade bd-example-modal-lg2"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Registrar Accion
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <FormAcciones
                  gestion={gestion}
                  caso={caso}
                  fechaaccionRef={this.fechaaccionRef}
                  fechaaccionnuevaRef={this.fechaaccionnuevaRef}
                  obsRef={this.obsRef}
                  nuevaaccionRef={this.nuevaaccionRef}
                  contratoRef={this.contratoRef}
                  handleChange={handleChange}
                  accion={accion}
                  idcasoRef={this.idcasoRef}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.obtenerDatos}
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, {
  getGestionCaso,
  gestionCaso,
  updateAccion,
  cerrarCaso
})(Table4);
