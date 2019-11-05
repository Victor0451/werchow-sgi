import React from "react";
import matchSorter from "match-sorter";
import Spinner from "../../layouts/Spinner";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table4 extends React.Component {
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

  render() {
    const { data } = this.props;
    if (!data) return <Spinner />;
    return (
      <div className="container mt-4 mb-4">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "MORA",
              columns: [
                {
                  Header: "ZONA",
                  id: "ZONA",
                  accessor: d => d.ZONA,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ZONA"] }),
                  filterAll: true
                },
                {
                  Header: "Mora",
                  id: "mora",
                  accessor: d => d.mora,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mora"] }),
                  filterAll: true
                },
                {
                  Header: "Fichas en Mora",
                  id: "fichamora",
                  accessor: d => d.fichamora,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fichamora"] }),
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

export default Table4;
