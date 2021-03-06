import React, { Component } from "react";
import { Link } from "react-router-dom";
import toastr from "../../utils/toastr";

import { connect } from "react-redux";
import {
  consultaCamp,
  consultaCampRec,
  consultaCampRein,
  consultaCampBlan,
  consultaCampAux,
  cerrarCamp
} from "../../actions/campanasActions";

class CerrarCampañas extends Component {
  desdeRef = React.createRef();
  hastaRef = React.createRef();

  state = {
    desde: "",
    hasta: ""
  };

  buscarCamp = () => {
    let desde = this.desdeRef.current.value;
    let hasta = this.hastaRef.current.value;

    if (desde > hasta) {
      toastr.warning("EL RANGO DE FECHAS ESTA MAL PUESTO", "ATENCION");
    }
    if (desde === "" || hasta === "") {
      toastr.warning(
        "LOS CAMPOS DESDE Y HASTA NO PUEDEN ESTAR VACIOS",
        "ATENCION"
      );
    } else {
      this.setState({
        desde: this.desdeRef.current.value,
        hasta: this.hastaRef.current.value
      });

      this.props.consultaCamp(desde, hasta);
      this.props.consultaCampRec(desde, hasta);
      this.props.consultaCampRein(desde, hasta);
      this.props.consultaCampBlan(desde, hasta);
      this.props.consultaCampAux(desde, hasta);
    }
  };

  cerrarCampañas = array => {
    this.props.cerrarCamp(array);
  };

  render() {
    const {
      listcamp,
      listcamprec,
      listcamprein,
      listcampblan,
      listcampaux
    } = this.props;

    console.log(this.props);

    return (
      <div className="form-style-8">
        <h2>Buscar Campañas Activas por periodo:</h2>
        <hr className="mt-4 mb-4" />
        <div className="mt-4 mb-4 row">
          <div className="form-group col-md-4">
            <p className="has-dynamic-label">
              <input
                type="date"
                className=""
                name="fecha"
                ref={this.desdeRef}
              />
              <label>Desde</label>
            </p>
          </div>
          <div className="form-group col-md-4">
            <p className="has-dynamic-label">
              <input
                type="date"
                className=""
                name="fecha"
                ref={this.hastaRef}
              />
              <label>Hasta</label>
            </p>
          </div>
          <div className="form-group col-md-4">
            <Link
              to={"#"}
              className="btn btn-primary btn-block"
              onClick={this.buscarCamp}
            >
              Buscar
            </Link>
          </div>
        </div>

        <hr />

        {!listcamp || listcamp.length === 0 ? null : (
          <div className="mt-4">
            <h2 className="mb-4 mt-4 ">Campañas de Atrasados</h2>

            <div className="row">
              <div className="col-md-6">
                {listcamp[0] && listcamp[0].idcampana === 11 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Galian Maria</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamp[0].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamp[1] && listcamp[1].idcampana === 12 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gimenez Gisela</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamp[1].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamp[2] && listcamp[2].idcampana === 13 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Carrizo Marissa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamp[2].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamp[3] && listcamp[3].idcampana === 14 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gorosito Vanesa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamp[3].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamp[4] && listcamp[4].idcampana === 15 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Juarez Silvia</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos: {listcamp[4].casos}</u>
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-block btn-primary "
                  onClick={() =>
                    this.cerrarCampañas([
                      listcamp[0].idcampana,
                      listcamp[1].idcampana,
                      listcamp[2].idcampana,
                      listcamp[3].idcampana,
                      listcamp[4].idcampana
                    ])
                  }
                >
                  Cerrar Campaña
                </button>
              </div>
            </div>
            <hr />
          </div>
        )}

        {!listcamprec || listcamprec.length === 0 ? null : (
          <div className="mt-4">
            <h2 className="mb-4 mt-4 d-flex justify-content-between">
              Campañas de Recuperaciones
            </h2>

            <div className="row">
              <div className="col-md-6">
                {listcamprec[0] && listcamprec[0].idcampana === 1 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Galian Maria</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprec[0].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprec[1] && listcamprec[1].idcampana === 2 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gimenez Gisela</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprec[1].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprec[2] && listcamprec[2].idcampana === 3 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Carrizo Marissa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprec[2].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprec[3] && listcamprec[3].idcampana === 4 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gorosito Vanesa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprec[3].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprec[4] && listcamprec[4].idcampana === 5 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Juarez Silvia</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos: {listcamprec[4].casos}</u>
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-block btn-primary "
                  onClick={() =>
                    this.cerrarCampañas([
                      listcamprec[0].idcampana,
                      listcamprec[1].idcampana,
                      listcamprec[2].idcampana,
                      listcamprec[3].idcampana,
                      listcamprec[4].idcampana
                    ])
                  }
                >
                  Cerrar Campaña
                </button>
              </div>
            </div>

            <hr />
          </div>
        )}

        {!listcamprein || listcamprein.length === 0 ? null : (
          <div className="mt-4">
            <h2 className="mb-4 mt-4 d-flex justify-content-between">
              Campañas de Reincidentes
            </h2>

            <div className="row">
              <div className="col-md-6">
                {listcamprein[0] && listcamprein[0].idcampana === 6 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Galian Maria</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprein[0].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprein[1] && listcamprein[1].idcampana === 7 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gimenez Gisela</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprein[1].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprein[2] && listcamprein[2].idcampana === 8 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Carrizo Marissa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprein[2].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprein[3] && listcamprein[3].idcampana === 9 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gorosito Vanesa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcamprein[3].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcamprein[4] && listcamprein[4].idcampana === 10 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Juarez Silvia</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos: {listcamprein[4].casos}</u>
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-block btn-primary "
                  onClick={() =>
                    this.cerrarCampañas([
                      listcamprein[0].idcampana,
                      listcamprein[1].idcampana,
                      listcamprein[2].idcampana,
                      listcamprein[3].idcampana,
                      listcamprein[4].idcampana
                    ])
                  }
                >
                  Cerrar Campaña
                </button>
              </div>
            </div>
            <hr />
          </div>
        )}
        {!listcampblan || listcampblan.length === 0 ? null : (
          <div className="mt-4">
            <h2 className="mb-4 mt-4 d-flex justify-content-between">
              Campañas de Blanqueo
            </h2>

            <div className="row">
              <div className="col-md-6">
                {listcampblan[0] && listcampblan[0].idcampana === 16 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Galian Maria</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampblan[0].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampblan[1] && listcampblan[1].idcampana === 17 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gimenez Gisela</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampblan[1].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampblan[2] && listcampblan[2].idcampana === 18 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Carrizo Marissa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampblan[2].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampblan[3] && listcampblan[3].idcampana === 19 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gorosito Vanesa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampblan[3].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampblan[4] && listcampblan[4].idcampana === 20 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Juarez Silvia</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos: {listcampblan[4].casos}</u>
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-block btn-primary "
                  onClick={() =>
                    this.cerrarCampañas([
                      listcampblan[0].idcampana,
                      listcampblan[1].idcampana,
                      listcampblan[2].idcampana,
                      listcampblan[3].idcampana,
                      listcampblan[4].idcampana
                    ])
                  }
                >
                  Cerrar Campaña
                </button>
              </div>
            </div>
            <hr />
          </div>
        )}

        {!listcampaux || listcampaux.length === 0 ? null : (
          <div className="mt-4">
            <h2 className="mb-4 mt-4 d-flex justify-content-between">
              Campañas de Auxiliar
            </h2>

            <div className="row">
              <div className="col-md-6">
                {listcampaux[0] && listcampaux[0].idcampana === 11 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Galian Maria</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampaux[0].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampaux[1] && listcampaux[1].idcampana === 22 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gimenez Gisela</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampaux[1].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampaux[2] && listcampaux[2].idcampana === 23 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Carrizo Marissa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampaux[2].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampaux[3] && listcampaux[3].idcampana === 24 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      {" "}
                      <strong>
                        <u>Gorosito Vanesa</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos</u>: {listcampaux[3].casos}
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}

                {listcampaux[4] && listcampaux[4].idcampana === 25 ? (
                  <div className="row">
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Juarez Silvia</u>
                      </strong>
                    </div>
                    <div className="col-md-4 border border-dark">
                      <strong>
                        <u>Casos: {listcampaux[4].casos}</u>
                      </strong>
                    </div>{" "}
                  </div>
                ) : null}
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-block btn-primary "
                  onClick={() =>
                    this.cerrarCampañas([
                      listcampaux[0].idcampana,
                      listcampaux[1].idcampana,
                      listcampaux[2].idcampana,
                      listcampaux[3].idcampana,
                      listcampaux[4].idcampana
                    ])
                  }
                >
                  Cerrar Campaña
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listcamp: state.campanas.listcamp,
  listcamprec: state.campanas.listcamprec,
  listcamprein: state.campanas.listcamprein,
  listcampblan: state.campanas.listcampblan,
  listcampaux: state.campanas.listcampaux
});

export default connect(mapStateToProps, {
  consultaCamp,
  consultaCampRec,
  consultaCampRein,
  consultaCampBlan,
  consultaCampAux,
  cerrarCamp
})(CerrarCampañas);
