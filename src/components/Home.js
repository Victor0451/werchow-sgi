import React, { Component } from "react";
import toastr from "../utils/toastr";

import { connect } from "react-redux";
import { buscarCaso } from "../actions/campanasActions";

class Home extends Component {
  state = {
    contrato: "",
    buscaso: {}
  };

  leerDatos = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buscarTitular = e => {
    e.preventDefault();

    const { contrato } = this.state;

    if (contrato === "") {
      toastr.warning("Debes ingresar un numero de socio", "ATENCION");
    } else {
      if (contrato) {
        this.props.buscarCaso(contrato);

        setTimeout(() => {
          const { buscaso } = this.props;

          if (buscaso) {
            this.setState({
              buscaso: buscaso
            });

            toastr.success(
              "El numero de socio ingresado esta en campaña",
              "ATENCION"
            );

            document.getElementById("alert").hidden = false;
          }
          if (!buscaso) {
            toastr.warning(
              "El numero de socio ingresado no existe",
              "ATENCION"
            );
            document.getElementById("alert").hidden = true;
          }
        }, 80);
      }
    }
  };

  render() {
    const { buscaso } = this.state;
    return (
      <div className="form-style-8">
        <h2>Buscar Socio</h2>

        <form className="border p-2" onSubmit={this.buscarTitular}>
          <div className="row">
            <div className="col-md-6">
              <p className="has-dynamic-label">
                <input
                  type="text"
                  className=""
                  id="dynamic-label-input"
                  name="contrato"
                  onChange={this.leerDatos}
                  placeholder="Ingresar N° de Socio"
                />
                <label>N° de Socio</label>
              </p>
            </div>

            <div className="col-md-6">
              <button className="btn btn-primary  btn-block mt-4">
                Buscar
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-4" id="alert" hidden>
          <hr />
          <div className=" alert alert-success mt-4">
            {buscaso.idcampana === 1
              ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION de MARIA GALIAN`
              : buscaso.idcampana === 2
              ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION de GISELA GIMENEZ`
              : buscaso.idcampana === 3
              ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION de MARISA CARRIZO`
              : buscaso.idcampana === 4
              ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION de VANESA GOROSITO`
              : buscaso.idcampana === 5
              ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION de SILVIA JUAREZ`
              : buscaso.idcampana === 6
              ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES de MARIA GALIAN`
              : buscaso.idcampana === 7
              ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES de GISELA GIMENEZ`
              : buscaso.idcampana === 8
              ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES de MARISA CARRIZO`
              : buscaso.idcampana === 9
              ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES de VANESA GOROSITO`
              : buscaso.idcampana === 10
              ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES de SILVIA JUAREZ`
              : buscaso.idcampana === 11
              ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS de MARIA GALIAN`
              : buscaso.idcampana === 12
              ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS de GISELA GIMENEZ`
              : buscaso.idcampana === 13
              ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS de MARISA CARRIZO`
              : buscaso.idcampana === 14
              ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS de VANESA GOROSITO`
              : buscaso.idcampana === 15
              ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS de SILVIA JUAREZ`
              : buscaso.idcampana === 16
              ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO de MARIA GALIAN`
              : buscaso.idcampana === 17
              ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO de GISELA GIMENEZ`
              : buscaso.idcampana === 18
              ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO de MARISA CARRIZO`
              : buscaso.idcampana === 19
              ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO de VANESA GOROSITO`
              : buscaso.idcampana === 20
              ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO de SILVIA JUAREZ`
              : ""}
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  buscaso: state.campanas.buscaso,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    buscarCaso
  }
)(Home);
