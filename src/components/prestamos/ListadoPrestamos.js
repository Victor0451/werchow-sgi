import React, { Component } from "react";
import EstadoSelect from "react-select";
import { estadopres } from "../layouts/Arrays/arrays";
import { listadoPrestamos } from "../../actions/prestamosActions";

import { connect } from "react-redux";
import TablaPrestamos from "./TablaPrestamos";

class ListadoPrestamos extends Component {
  desdeRef = React.createRef();
  hastaRef = React.createRef();

  state = {
    estado: "",
    capitalprest: "",
    intereses: "",
    cuotas: "",
    cantprest: "",
    capconint: ""
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  buscarPrestamos = e => {
    e.preventDefault();

    const { estado } = this.state;

    let desde = this.desdeRef.current.value;
    let hasta = this.hastaRef.current.value;

    this.props.listadoPrestamos(desde, hasta, estado);

    setTimeout(() => {
      const { listado } = this.props;

      let capitalprest = 0;

      let intereses = 0;

      let cuotas = 0;

      let cantprest = listado.length;

      let capconint = 0;

      for (let i = 0; i < listado.length; i++) {
        capitalprest += listado[i].ptm_prestamo;
        intereses += listado[i].ptm_valcuota;
        cuotas += listado[i].ptm_cuotas;
        capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
      }

      this.setState({
        capitalprest: capitalprest,
        intereses: intereses,
        cuotas: cuotas,
        cantprest: cantprest,
        capconint: capconint
      });
    }, 100);
  };

  render() {
    const { listado } = this.props;
    const {
      capitalprest,
      intereses,
      cuotas,
      cantprest,
      capconint
    } = this.state;
    return (
      <div className="form-style-8">
        <h2>Listado de Prestamo</h2>

        <div className="">
          <h3 className="mt-4 mb-4">
            <u>Elija el Periodo</u>
          </h3>
          <div className="row mb-4">
            <div className="form-group col-md-3">
              <p className="has-dynamic-label">
                <input type="date" ref={this.desdeRef} />
                <label>Desde:</label>
              </p>
            </div>
            <div className="form-group col-md-3 ">
              <p className="has-dynamic-label">
                <input type="date" ref={this.hastaRef} />
                <label>Desde:</label>
              </p>
            </div>

            <div className="form-group col-md-3 ">
              <p className="has-dynamic-label">
                <EstadoSelect
                  options={estadopres}
                  placeholder={"Estado"}
                  onChange={value => this.handleChange(value, "estado")}
                />
                <label>estado:</label>
              </p>
            </div>

            <div className="form-group col-md-3">
              <button
                className="btn btn-primary btn-block mt-4"
                onClick={this.buscarPrestamos}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>

        {listado ? (
          <TablaPrestamos
            data={listado}
            capitalprest={capitalprest}
            cuotas={cuotas}
            intereses={intereses}
            cantprest={cantprest}
            capconint={capconint}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listado: state.prestamos.listado
});

export default connect(mapStateToProps, { listadoPrestamos })(ListadoPrestamos);
