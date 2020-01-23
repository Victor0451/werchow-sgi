import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
//import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { connect } from "react-redux";

class ListadoConsulta extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {}
    };
  }

  // eliminarCaja = row => {
  //   confirmAlert({
  //     title: "Atencion",
  //     message: "¿Realmente estas seguro de eliminar la caja?",
  //     buttons: [
  //       {
  //         label: "Si",
  //         onClick: () => {
  //           let idcaja = row.original.idcaja;

  //           this.props.eliminarCaja(idcaja);

  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 150);
  //         }
  //       },

  //       {
  //         label: "No",
  //         onClick: () => {}
  //       }
  //     ]
  //   });
  // };

  imprimir = () => {
    let contenido = document.getElementById("listado").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  render() {
    const { listadoventas, listadoventasm, desde, hasta } = this.props;

    if (!listadoventas || !listadoventasm) return null;
    const data = listadoventas[0].concat(listadoventasm[0]);
    console.log(data);
    return (
      <div className="form-style-8">
        <div id="listado" className="mb-4">
          <h2 className="mb-4">
            Listado de ventas realizada desde: <strong>{desde}</strong>{" "}
            <strong> hasta: {hasta}</strong>{" "}
          </h2>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] === filter.value
            }
            columns={[
              {
                Header: "Ventas",
                columns: [
                  {
                    Header: "EMPRESA",
                    id: "EMPRESA",
                    accessor: d => d.EMPRESA,
                    width: "70",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["EMPRESA"] }),
                    filterAll: true
                  },
                  {
                    Header: "CONTRATO",
                    id: "CONTRATO",
                    accessor: d => d.CONTRATO,
                    width: "100",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                    filterAll: true
                  },
                  {
                    Header: "APELLIDO",
                    id: "APELLIDOS",
                    accessor: d => d.APELLIDOS,
                    width: "100",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["APELLIDOS"]
                      }),
                    filterAll: true
                  },
                  {
                    Header: "NOMBRE",
                    id: "NOMBRES",
                    accessor: d => d.NOMBRES,
                    width: "200",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                    filterAll: true
                  },
                  {
                    Header: "DNI",
                    id: "NRO_DOC",
                    accessor: d => d.NRO_DOC,
                    width: "80",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["NRO_DOC"]
                      }),
                    filterAll: true
                  },
                  {
                    Header: "ALTA",
                    id: "ALTA",
                    accessor: d => moment.utc(d.ALTA).format("YYYY-MM-DD"),
                    width: "100",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["ALTA"]
                      }),
                    filterAll: true
                  },
                  {
                    Header: "PLAN",
                    id: "PLAN",
                    accessor: d => d.PLAN,
                    width: "60",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["PLAN"] }),
                    filterAll: true
                  },

                  {
                    Header: "LOCALIDAD",
                    id: "LOCALIDAD",
                    accessor: d => d.LOCALIDAD,
                    width: "150",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["LOCALIDAD"] }),
                    filterAll: true
                  },
                  {
                    Header: "CUOTA",
                    id: "IMPORTE",
                    accessor: d => d.IMPORTE,
                    width: "80",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                    filterAll: true
                  },
                  {
                    Header: "PRODUCTOR",
                    id: "PRODUCTOR",
                    accessor: d => d.PRODUCTOR,
                    width: "100",
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["PRODUCTOR"] }),
                    filterAll: true
                  }

                  // {
                  //   Header: "Acciones",
                  //   width: "250",
                  //   Cell: row => (
                  //     <div className="d-flex justify-content-between">
                  //       <div>
                  //         <Link
                  //           to={`/sepelio/ingresoscaja/${row.original.idcaja}`}
                  //           className="btn btn-success"
                  //           data-toggle="tooltip"
                  //           data-placement="top"
                  //           title="Habilitar Ingresos"
                  //         >
                  //           <i class="fas fa-arrow-alt-circle-down"></i>
                  //         </Link>
                  //       </div>
                  //       <div>
                  //         <Link
                  //           to={`/sepelio/gastoscaja/${row.original.idcaja}`}
                  //           className="btn btn-warning"
                  //           data-toggle="tooltip"
                  //           data-placement="top"
                  //           title="Ingresar Gastos"
                  //         >
                  //           <i class="fas fa-arrow-alt-circle-up"></i>
                  //         </Link>
                  //       </div>
                  //       <div>
                  //         <Link
                  //           to={"#"}
                  //           className="btn btn-primary"
                  //           onClick={() => this.cerrarCaja(row)}
                  //           data-toggle="tooltip"
                  //           data-placement="top"
                  //           title="Cerrar Caja"
                  //         >
                  //           <i class="fas fa-archive"></i>
                  //         </Link>
                  //       </div>
                  //       <div>
                  //         <Link
                  //           to={"#"}
                  //           className="btn btn-secondary"
                  //           to={`/sepelio/imprimircaja/${row.original.idcaja}`}
                  //           data-toggle="tooltip"
                  //           data-placement="top"
                  //           title="Imprimir Caja"
                  //         >
                  //           <i class="fas fa-print"></i>
                  //         </Link>
                  //       </div>
                  //       <div>
                  //         <Link
                  //           to={"#"}
                  //           className="btn btn-danger"
                  //           onClick={() => this.eliminarCaja(row)}
                  //           data-toggle="tooltip"
                  //           data-placement="top"
                  //           title="Eliminar Caja"
                  //         >
                  //           <i className="fas fa-trash-alt"></i>
                  //         </Link>
                  //       </div>
                  //     </div>
                  //   )
                  // }
                ]
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />

          <hr className="mt-4" />
        </div>
        <div className="jumbotron mt-4" id="opciones">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-info col-md-3 mr-1"
                onClick={this.imprimir}
              >
                Imprimir Listado
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
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(ListadoConsulta);
