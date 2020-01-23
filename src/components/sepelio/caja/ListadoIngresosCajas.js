import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import {
  eliminarIngreso,
  updateTotalesIng,
  caja
} from "../../../actions/sepelioActions";
import { connect } from "react-redux";

class ListadoGastosCajas extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  eliminarIngreso = row => {
    confirmAlert({
      title: "Atencion",
      message: "¿Realmente estas seguro de eliminar el gasto?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let idingreso = row.original.idingreso;

            setTimeout(() => {
              const { cajasep } = this.props;

              let idcaja = cajasep.idcaja;

              let infoing = row.original;

              let monto = parseInt(cajasep.monto) - parseInt(infoing.monto);
              let totalcaja =
                parseInt(cajasep.totalcaja) - parseInt(infoing.monto);

              const valores = {
                monto,
                totalcaja
              };

              this.props.updateTotalesIng(valores, idcaja);

              this.props.eliminarIngreso(idingreso);
            }, 100);

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
    const { data, cajasep } = this.props;

    return (
      <div className="form-style-8">
        <h2 className="mb-4">Listado de Ingresos</h2>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Ingresos de Sepelios",
              columns: [
                {
                  Header: "Concepto",
                  id: "concepto",
                  accessor: d => d.concepto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["concepto"]
                    }),
                  filterAll: true
                },
                {
                  Header: "Monto",
                  id: "monto",
                  accessor: d => d.monto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["monto"] }),
                  filterAll: true
                },
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: d => d.fecha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true
                },

                {
                  Header: "Operador",
                  id: "operador",
                  accessor: d => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["operador"]
                    }),
                  filterAll: true
                },

                {
                  Header: "Acciones",

                  Cell: row => (
                    <div>
                      {cajasep.estado === 1 ? (
                        <div className="d-flex justify-content-between">
                          <div>
                            <Link
                              to={`/sepelio/vergasto/${row.original.idingreso}`}
                              className="btn btn-primary"
                            >
                              <i className="fas fa-binoculars"></i>
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={`/sepelio/editargasto/${row.original.idingreso}`}
                              className="btn btn-warning"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={"#"}
                              className="btn btn-danger"
                              onClick={() => this.eliminarIngreso(row)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      ) : cajasep.estado === 0 ? (
                        <div>CAJA CERRADA</div>
                      ) : null}
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
  cajasep: state.sepelio.caja
});

export default connect(mapStateToProps, {
  eliminarIngreso,
  updateTotalesIng,
  caja
})(ListadoGastosCajas);
