import React, { Component } from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;

export default class Listado extends Component {
  constructor() {
    super();
    this.state = {
      listado: [],
      currentPage: 1,
      todosPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: last
    });
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: 1
    });
  }

  deuda = array => {
    let importe = array.reduce(
      (sum, value) =>
        typeof value.IMPORTE == "number" ? sum + value.IMPORTE : sum,
      0
    );
    return importe;
  };

  render() {
    let { currentPage, todosPerPage } = this.state;
    let { listado } = this.props;

    // Logic for displaying current todos
    let indexOfLastTodo = currentPage * todosPerPage;
    let indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = listado.slice(indexOfFirstTodo, indexOfLastTodo);
    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(listado.length / todosPerPage);
    //   let next = (last === currentPage) ? currentPage : currentPage + 1;

    // Logic for displaying page numbers
    let pageNumbers = [];
    for (let i = 1; i <= last; i++) {
      pageNumbers.push(i);
    }

    return (
      <React.Fragment>
        <hr />
        <div className="alert alert-danger text-center text-dark">
          <strong>DEUDA:</strong> {""}
          {""}${this.deuda(listado)}
        </div>
        <div className="row container mt-4 ">
          <div className="col-md-12 ">
            <ul>
              <table className="table table-striped table-sm table-responsive border">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">SUCURSAL</th>
                    <th scope="col">CONTRATO</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">DNI</th>
                    <th scope="col">CALLE</th>
                    <th scope="col">N°</th>
                    <th scope="col">BARRIO</th>
                    <th scope="col">LOCALIDAD</th>
                    <th scope="col">CUOTA</th>
                    <th scope="col">MES</th>
                    <th scope="col">AÑO</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTodos.map((titular, index) => (
                    <tr key={index}>
                      <td>{titular.SUCURSAL}</td>
                      <td>{titular.CONTRATO}</td>
                      <td>{titular.APELLIDOS}</td>
                      <td>{titular.NOMBRES}</td>
                      <td>{titular.NRO_DOC}</td>
                      <td>{titular.CALLE}</td>
                      <td>{titular.NRO_CALLE}</td>
                      <td>{titular.BARRIO}</td>
                      <td>{titular.LOCALIDAD}</td>
                      <td>$ {titular.IMPORTE}</td>
                      <td>{titular.MES}</td>
                      <td>{titular.ANO}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ul>
          </div>

          <div className=" table-responsive">
            <nav className="pagination justify-content-center ">
              <Pagination>
                <PaginationItem>
                  {prev === 0 ? (
                    <PaginationLink disabled>Inicio</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleFirstClick}
                      id={prev}
                      href={prev}
                    >
                      Inicio
                    </PaginationLink>
                  )}
                </PaginationItem>
                <PaginationItem>
                  {prev === 0 ? (
                    <PaginationLink disabled>Anterior</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleClick}
                      id={prev}
                      href={prev}
                    >
                      Anterior
                    </PaginationLink>
                  )}
                </PaginationItem>
                {/* {
                            pageNumbers.map((number, i) =>
                                <Pagination key={i}>
                                    <PaginationItem  active={pageNumbers[currentPage - 1] === (number) ? true : false} >
                                        <PaginationLink  onClick={this.handleClick} href={number} key={number} id={number}>
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            )} */}

                <PaginationItem>
                  {currentPage === last ? (
                    <PaginationLink disabled>Siguiente</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleClick}
                      id={pageNumbers[currentPage]}
                      href={pageNumbers[currentPage]}
                    >
                      Siguiente
                    </PaginationLink>
                  )}
                </PaginationItem>

                <PaginationItem>
                  {currentPage === last ? (
                    <PaginationLink disabled>Final</PaginationLink>
                  ) : (
                    <PaginationLink
                      onClick={this.handleLastClick}
                      id={pageNumbers[currentPage]}
                      href={pageNumbers[currentPage]}
                    >
                      Final
                    </PaginationLink>
                  )}
                </PaginationItem>
              </Pagination>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
