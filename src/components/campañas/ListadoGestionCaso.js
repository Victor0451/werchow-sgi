import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import FormAcciones from "./FormAcciones";

let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;

export default class ListadoGestionCaso extends Component {
  constructor() {
    super();
    this.state = {
      listado: [],
      currentPage: 1,
      todosPerPage: 10,
      caso: {}
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
        typeof value.cuota == "number" ? sum + value.cuota : sum,
      0
    );
    return importe;
  };

  selcaso = index => {
    const { listado } = this.props;
    const caso = listado[index];
    this.setState({
      caso: caso
    });
  };

  render() {
    let { currentPage, todosPerPage, caso } = this.state;
    let { listado } = this.props;

    if (!listado) return <h1>Nada</h1>;

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
                    <th scope="col">CONTRATO</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">DNI</th>
                    <th scope="col">CALLE</th>
                    <th scope="col">N°</th>
                    <th scope="col">BARRIO</th>
                    <th scope="col">LOCALIDAD</th>
                    <th scope="col">CUOTA</th>
                    <th scope="col">GESTIONADO</th>
                    <th scope="col">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTodos.map((titular, index) => (
                    <tr key={index}>
                      <td>{titular.contrato}</td>
                      <td>{titular.apellido}</td>
                      <td>{titular.nombre}</td>
                      <td>{titular.dni}</td>
                      <td>{titular.calle}</td>
                      <td>{titular.nro_calle}</td>
                      <td>{titular.barrio}</td>
                      <td>{titular.localidad}</td>
                      <td>$ {titular.cuota}</td>
                      <td>
                        {titular.accion === null ? (
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            readOnly
                          />
                        ) : (
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                            readOnly
                            checked
                          />
                        )}
                      </td>

                      <td>
                        <Link
                          to={"#"}
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target=".bd-example-modal-lg"
                          onClick={() => this.selcaso(index)}
                        >
                          Acciones
                        </Link>
                      </td>
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

        <div
          className="modal fade bd-example-modal-lg"
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
                <FormAcciones caso={caso} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
