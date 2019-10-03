import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import { connect } from "react-redux";
import { getGestionCaso } from "../../actions/campanasActions";

let prev = 0;
//let next = 0;
let last = 0;
//let first = 0;

class ListadoCasosRecuperados extends Component {
  constructor() {
    super();
    this.state = {
      listado: [],
      gestion: {},
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
    this.props.getGestionCaso(index);

    setTimeout(() => {
      const { getcaso } = this.props;

      this.setState({
        gestion: getcaso[0]
      });
    }, 100);
  };

  render() {
    let { listado } = this.props;
    let { currentPage, todosPerPage, gestion } = this.state;

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

        <div className="row container mt-4 ">
          <div className="col-md-12 ">
            <ul>
              {gestion.accion === 7 || gestion.accion === 9 ? (
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
                      <th scope="col">MES</th>
                      <th scope="col">AÑO</th>
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
                        <td>{titular.mes}</td>
                        <td>{titular.ano}</td>

                        <td>
                          <Link
                            to={"#"}
                            className="btn btn-secondary"
                            data-toggle="modal"
                            data-target=".bd-example-modal2-lg"
                            onClick={() => this.selcaso(titular.idcaso)}
                          >
                            Informacion
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-info mt-4">No hay casos</div>
              )}
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
          className="modal fade bd-example-modal2-lg"
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
                )}

                <hr />

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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
)(ListadoCasosRecuperados);
