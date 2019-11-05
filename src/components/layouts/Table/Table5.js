import React from "react";
import matchSorter from "match-sorter";
import { Link } from "react-router-dom";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { connect } from "react-redux";
import { getGestionCaso } from "../../../actions/campanasActions";

class Table5 extends React.Component {
  constructor() {
    super();
    this.state = {
      caso: {},
      gestion: {}
    };
  }

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
    const { data } = this.props;

    const { gestion } = this.state;

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
                        className="btn btn-secondary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg12"
                        onClick={() => this.selcaso(row.index)}
                      >
                        Ver Gestion
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
          className="modal fade bd-example-modal-lg12"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Gestion del Caso
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
                {!gestion ? (
                  <div className="alert alert-primary mt-4">
                    EL socio no posee gestiones realizadas
                  </div>
                ) : (
                  <div>
                    <table className="table table-striped table-sm table-responsive border">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">CONTRATO</th>
                          <th scope="col">ACCION</th>
                          <th scope="col">FECHA ACCION</th>
                          <th scope="col">NUEVA ACCION</th>
                          <th scope="col">FECHA NUEVA ACCION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{gestion.contrato}</td>
                          <td>{gestion.accion}</td>
                          <td>{gestion.fechaaccion}</td>
                          <td>{gestion.nuevaaccion}</td>
                          <td>{gestion.fechanuevaaccion}</td>
                        </tr>
                      </tbody>
                    </table>

                    <hr />
                  </div>
                )}
                <div className="form-group col-md-12">
                  <label>Observaciones</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    defaultValue={gestion.observacion}
                    readOnly
                  />
                </div>
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

export default connect(
  mapStateToProps,
  {
    getGestionCaso
  }
)(Table5);
