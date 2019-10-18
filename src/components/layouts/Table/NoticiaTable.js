import React from "react";
import matchSorter from "match-sorter";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { connect } from "react-redux";
import { getGestionCaso } from "../../../actions/campanasActions";
class NoticiasTable extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Noticias",
              columns: [
                {
                  Header: "N° Noticia",
                  id: "idnoticia",
                  accessor: d => d.idnoticia,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["idnoticia"] }),
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
                  Header: "Noticia",
                  id: "noticia",
                  accessor: d => d.noticia,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["noticia"] }),
                  filterAll: true
                },
                {
                  Header: "Operador",
                  id: "operador",
                  accessor: d => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["operador"] }),
                  filterAll: true
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
  getcaso: state.campanas.getcaso,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    getGestionCaso
  }
)(NoticiasTable);
