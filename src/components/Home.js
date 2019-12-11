import React, { Component } from "react";
import toastr from "../utils/toastr";

import { connect } from "react-redux";
import { buscarCaso } from "../actions/campanasActions";
import Noticias from "./noticias/Noticias";

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
    const { user } = this.props.auth;
    console.log(buscaso);

    return (
      <div className="">
        {user.usuario === "ggimenez" ||
        user.usuario === "mgalian" ||
        user.usuario === "vgorosito" ||
        user.usuario === "mcarrizo" ||
        user.usuario === "vlongo" ||
        user.usuario === "sjuarez" ? (
          <div className="container  d-flex justify-content-center">
            <div className="row">
              <div className=" mt-4 mb-4 ">
                <Noticias />
              </div>
            </div>
          </div>
        ) : null}

        <div className="form-style-8">
          <h2>Buscar Socio</h2>
          <form className=" border p-2" onSubmit={this.buscarTitular}>
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
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARIA GALIAN`
                : buscaso.idcampana === 2
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de GISELA GIMENEZ`
                : buscaso.idcampana === 3
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARISA CARRIZO`
                : buscaso.idcampana === 4
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de VANESA GOROSITO`
                : buscaso.idcampana === 5
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de SILVIA JUAREZ`
                : buscaso.idcampana === 6
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARIA GALIAN`
                : buscaso.idcampana === 7
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de GISELA GIMENEZ`
                : buscaso.idcampana === 8
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARISA CARRIZO`
                : buscaso.idcampana === 9
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de VANESA GOROSITO`
                : buscaso.idcampana === 10
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de SILVIA JUAREZ`
                : buscaso.idcampana === 11
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARIA GALIAN`
                : buscaso.idcampana === 12
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de GISELA GIMENEZ`
                : buscaso.idcampana === 13
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARISA CARRIZO`
                : buscaso.idcampana === 14
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de VANESA GOROSITO`
                : buscaso.idcampana === 15
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SILVIA JUAREZ`
                : buscaso.idcampana === 16
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARIA GALIAN`
                : buscaso.idcampana === 17
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de GISELA GIMENEZ`
                : buscaso.idcampana === 18
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARISA CARRIZO`
                : buscaso.idcampana === 19
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de VANESA GOROSITO`
                : buscaso.idcampana === 20
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de SILVIA JUAREZ`
                : buscaso.idcampana === 21
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de ALEJANDRA TEJERINA`
                : buscaso.idcampana === 28
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARIA GALIAN`
                : buscaso.idcampana === 29
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de GISELA GIMENEZ`
                : buscaso.idcampana === 30
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARISA CARRIZO`
                : buscaso.idcampana === 31
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de VANESA GOROSITO`
                : buscaso.idcampana === 32
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de SILVIA JUAREZ`
                : buscaso.idcampana === 33
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARIA GALIAN`
                : buscaso.idcampana === 34
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de GISELA GIMENEZ`
                : buscaso.idcampana === 35
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARISA CARRIZO`
                : buscaso.idcampana === 36
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de VANESA GOROSITO`
                : buscaso.idcampana === 37
                ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de SILVIA JUAREZ`
                : buscaso.idcampana === 38
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARIA GALIAN`
                : buscaso.idcampana === 39
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de GISELA GIMENEZ`
                : buscaso.idcampana === 40
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARISA CARRIZO`
                : buscaso.idcampana === 41
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de VANESA GOROSITO`
                : buscaso.idcampana === 42
                ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de SILVIA JUAREZ`
                : buscaso.idcampana === 43
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARIA GALIAN`
                : buscaso.idcampana === 44
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de GISELA GIMENEZ`
                : buscaso.idcampana === 45
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARISA CARRIZO`
                : buscaso.idcampana === 46
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de VANESA GOROSITO`
                : buscaso.idcampana === 47
                ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de SILVIA JUAREZ`
                : buscaso.idcampana === 48
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de ALEJANDRA TEJERINA`
                : buscaso.idcampana === 49
                ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de ALEJANDRA TEJERINA`
                : buscaso.idcampana === 50
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARIA GALIAN`
                : buscaso.idcampana === 51
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de GISELA GIMENEZ`
                : buscaso.idcampana === 52
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de ALEJANDRA TEJERINA`
                : buscaso.idcampana === 53
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARISA CARRIZO`
                : buscaso.idcampana === 54
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de VANESA GOROSITO`
                : buscaso.idcampana === 55
                ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de SILVIA JUAREZ`
                : null}
            </div>
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

export default connect(mapStateToProps, {
  buscarCaso
})(Home);
