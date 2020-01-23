import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import {
  eliminarGasto,
  updateTotales,
  caja
} from "../../../actions/sepelioActions";
import { connect } from "react-redux";

class ListadoGastosCajas extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  eliminarGasto = row => {
    confirmAlert({
      title: "Atencion",
      message: "¿Realmente estas seguro de eliminar el gasto?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            let idgastos = row.original.idgastos;

            setTimeout(() => {
              const { cajasep } = this.props;

              let idcaja = cajasep.idcaja;

              let infogasto = row.original;

              let sumgastos =
                parseInt(cajasep.gastos) - parseInt(infogasto.total);
              let restacaja =
                parseInt(cajasep.totalcaja) + parseInt(infogasto.total);

              const valores = {
                gastos: sumgastos,
                totalcaja: restacaja
              };

              this.props.updateTotales(valores, idcaja);

              this.props.eliminarGasto(idgastos);
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
        <h2 className="mb-4">Listado de Gastos</h2>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Gastos de Sepelios",
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
                  Header: "Factura",
                  id: "tipofactura",
                  accessor: d => d.tipofactura,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["tipofactura"] }),
                  filterAll: true
                },
                {
                  Header: "N° Factura",
                  id: "nfactura",
                  accessor: d => d.nfactura,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["nfactura"]
                    }),
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
                  Header: "Total",
                  id: "total",
                  accessor: d => d.total,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["total"] }),
                  filterAll: true
                },
                {
                  Header: "Operador",
                  id: "operadortramite",
                  accessor: d => d.operadortramite,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["operadortramite"]
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
                              to={`/sepelio/vergasto/${row.original.idgastos}`}
                              className="btn btn-primary"
                            >
                              <i className="fas fa-binoculars"></i>
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={`/sepelio/editargasto/${row.original.idgastos}`}
                              className="btn btn-warning"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                          </div>
                          <div>
                            <Link
                              to={"#"}
                              className="btn btn-danger"
                              onClick={() => this.eliminarGasto(row)}
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

export default connect(mapStateToProps, { eliminarGasto, updateTotales, caja })(
  ListadoGastosCajas
);
