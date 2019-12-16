import React, { Component } from "react";
import toastr from "../../utils/toastr";

import { connect } from "react-redux";
import { buscarCaso, buscarGestionCaso } from "../../actions/campanasActions";
import Noticias from "../noticias/Noticias";
import Gestiones from "./Gestiones";
import Campcaso from "./Campcaso";

class Home extends Component {
  state = {
    contrato: "",
    buscaso: {},
    busgestcaso: []
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
        this.props.buscarGestionCaso(contrato);

        setTimeout(() => {
          const { buscaso, busgestcaso } = this.props;

          if (buscaso) {
            this.setState({
              buscaso: buscaso,
              busgestcaso: busgestcaso
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
    const { buscaso, busgestcaso } = this.state;
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

          <div className="text-center mt-4 jumbotron" id="alert" hidden>
            <hr />
            <Campcaso buscaso={buscaso} />
            <hr />
            <h3>Ultimas Gestiones</h3>

            <Gestiones busgestcaso={busgestcaso} />
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  buscaso: state.campanas.buscaso,
  busgestcaso: state.campanas.busgestcaso,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  buscarCaso,
  buscarGestionCaso
})(Home);
