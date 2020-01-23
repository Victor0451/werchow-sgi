import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { connect } from "react-redux";
import {
  listadoCajas,
  eliminarCaja,
  updateCierreCaja
} from "../../../actions/sepelioActions";

class ListadoCajaSepelio extends React.Component {
  constructor() {
    super();
    this.state = {
      caso: {},
      gestion: {}
    };
  }
  componentDidMount() {
    this.props.listadoCajas();

    setTimeout(() => {
      const { listcajas } = this.props;

      this.setState({
        cajas: listcajas
      });
    }, 200);
  }

  eliminarCaja = row => {
    confirmAlert({
      title: "Atencion",
      message: "¿Realmente estas seguro de eliminar la caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let idcaja = row.original.idcaja;

            this.props.eliminarCaja(idcaja);

            setTimeout(() => {
              window.location.reload();
            }, 150);
          }
        },

        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  cerrarCaja = row => {
    confirmAlert({
      title: "Atencion",
      message: "¿Realmente estas seguro de cerrar la caja?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let idcaja = row.original.idcaja;

            this.props.updateCierreCaja(idcaja);

            setTimeout(() => {
              window.location.reload();
            }, 150);
          }
        },

        {
          label: "No",
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    const { listcajas } = this.props;

    return (
      <div className="form-style-8">
        <h2 className="mb-4">Listado de Cajas de Sepelio</h2>
        <ReactTable
          data={listcajas}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Cajas de Sepelios",
              columns: [
                {
                  Header: "N° Caja",
                  id: "idcaja",
                  accessor: d => d.idcaja,
                  width: "100",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["idcaja"] }),
                  filterAll: true
                },
                {
                  Header: "Detalle",
                  id: "tipo",
                  accessor: d => d.tipo,
                  width: "200",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo"]
                    }),
                  filterAll: true
                },
                {
                  Header: "Monto",
                  id: "monto",
                  accessor: d => d.monto,
                  width: "100",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["monto"] }),
                  filterAll: true
                },
                {
                  Header: "Operador",
                  id: "operador",
                  accessor: d => d.operador,
                  width: "100",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["operador"]
                    }),
                  filterAll: true
                },
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: d =>
                    moment.utc(d.fecha).format("YYYY-MM-DD HH:mm:ss"),
                  width: "200",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha"]
                    }),
                  filterAll: true
                },
                {
                  Header: "Estado",
                  id: "estado",
                  accessor: d => d.estado,
                  width: "60",
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["estado"] }),
                  filterAll: true
                },
                {
                  Header: "Acciones",
                  width: "250",
                  Cell: row => (
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link
                          to={`/sepelio/ingresoscaja/${row.original.idcaja}`}
                          className="btn btn-success"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Habilitar Ingresos"
                        >
                          <i class="fas fa-arrow-alt-circle-down"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={`/sepelio/gastoscaja/${row.original.idcaja}`}
                          className="btn btn-warning"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Ingresar Gastos"
                        >
                          <i class="fas fa-arrow-alt-circle-up"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"#"}
                          className="btn btn-primary"
                          onClick={() => this.cerrarCaja(row)}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Cerrar Caja"
                        >
                          <i class="fas fa-archive"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="btn btn-secondary"
                          to={`/sepelio/imprimircaja/${row.original.idcaja}`}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Imprimir Caja"
                        >
                          <i class="fas fa-print"></i>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"#"}
                          className="btn btn-danger"
                          onClick={() => this.eliminarCaja(row)}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Eliminar Caja"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </Link>
                      </div>
                    </div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listcajas: state.sepelio.listadocajas
});

export default connect(mapStateToProps, {
  listadoCajas,
  eliminarCaja,
  updateCierreCaja
})(ListadoCajaSepelio);
