import React, { Component } from "react";
import AtW from "./Listado";
import AtL from "./Listado";
import AtR from "./Listado";
import AtP from "./Listado";

import Spinner from "../layouts/Spinner";
import toastr from "../../utils/toastr";

//redux
import { connect } from "react-redux";
import {
  atW,
  verificarEstadoCamp,
  crearCampAT
} from "../../actions/campanasActions";

class EstadoSocio extends Component {
  state = {
    AtPalpala: [],
    AtPerico: [],
    AtSanPedro: [],
    AtCasaCentralGG: [],
    AtCasaCentralMG: [],
    spinner: true
  };

  atDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.atW();

      setTimeout(() => {
        const { atw } = this.props;

        if (atw) {
          let atrasados = atw[0];

          let AtPerico = atrasados.filter(atw => {
            return atw.SUCURSAL === "R";
          });

          let AtPalpala = atrasados.filter(atw => {
            return atw.SUCURSAL === "L";
          });

          let AtSanPedro = atrasados.filter(atw => {
            return atw.SUCURSAL === "P";
          });

          let AtCasaCentral = atrasados.filter(atw => {
            return atw.SUCURSAL === "W";
          });

          let AtCCmitad = Math.floor(AtCasaCentral.length / 2);

          let AtCasaCentralGG = AtCasaCentral.slice(0, AtCCmitad);

          let AtCasaCentralMG = AtCasaCentral.slice(
            AtCCmitad,
            AtCasaCentral.length
          );

          this.setState({
            AtCasaCentralGG: AtCasaCentralGG,
            AtCasaCentralMG: AtCasaCentralMG,
            AtPalpala: AtPalpala,
            AtPerico: AtPerico,
            AtSanPedro: AtSanPedro
          });
        }
      }, 1000);
    }
  };

  crearCampana = (array, idcamp) => {
    let tmp = new Date(Date.now());
    let fecha = tmp.toISOString().split("T")[0];

    if (array.length === 0) {
      toastr.warning("No hay casos para asignar", "Atencion");
    } else {
      for (let i = 0; i < array.length; i++) {
        const caso = {
          idcampana: idcamp,
          fechacampana: fecha,
          mes: array[i].MES,
          ano: array[i].ANO,
          sucursal: array[i].SUCURSAL,
          contrato: array[i].CONTRATO,
          apellido: array[i].APELLIDOS,
          nombre: array[i].NOMBRES,
          dni: array[i].NRO_DOC,
          telefono: array[i].TELEFONO,
          movil: array[i].MOVIL,
          calle: array[i].CALLE,
          nro_calle: array[i].NRO_CALLE,
          barrio: array[i].BARRIO,
          localidad: array[i].LOCALIDAD,
          cuota: array[i].IMPORTE,
          cuotasadeudadas: 1,
          montoadeudado: array[i].IMPORTE * 1,
          estadocaso: true
        };

        this.props.crearCampAT(caso);
        toastr.success("Se asignaron los casos con exito", "Atencion");
      }
    }
  };

  render() {
    const {
      AtCasaCentralMG,
      AtCasaCentralGG,
      AtPalpala,
      AtPerico,
      AtSanPedro
    } = this.state;

    return (
      <div className="container mt-4">
        <div className="jumbotron row">
          <div className="col-md-6">
            <h2>Buscar Cartera Atrasada</h2>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-secondary btn-block"
              onClick={this.atDelMes}
            >
              Buscar
            </button>
          </div>
        </div>

        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Atrasados {""}
              <span className="badge badge-pill badge-dark text-white">
                {AtCasaCentralMG.length +
                  AtCasaCentralGG.length +
                  AtPalpala.length +
                  AtPerico.length +
                  AtSanPedro.length}
              </span>
            </a>
            <a
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Recuperaciones
            </a>
            <a
              className="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              OTRO
            </a>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          {/* ATRASADOS */}
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {AtCasaCentralMG.length === 0 ? (
              <div className=" border mt-4 p-2">
                <h3>
                  Atrasados Casa Central Magia Galian{" "}
                  <span className="badge badge-pill badge-dark text-white">
                    {AtCasaCentralMG.length}
                  </span>
                </h3>
                <Spinner />
              </div>
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h3>
                    Atrasados Casa Central Magia Galian{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtCasaCentralMG.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtCasaCentralMG, 11)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtW listado={AtCasaCentralMG} />
              </div>
            )}

            <hr />

            {AtCasaCentralGG.length === 0 ? (
              <div className="border mt-4 p-2">
                <h3>
                  Atrasados Casa Central Gisela Gimenez{" "}
                  <span className="badge badge-pill badge-dark text-white">
                    {AtCasaCentralMG.length}
                  </span>
                </h3>
                <Spinner />
              </div>
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h3>
                    Atrasados Casa Central Gisela Gimenez{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtCasaCentralGG.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtCasaCentralGG, 12)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtW listado={AtCasaCentralGG} />
              </div>
            )}

            <hr />

            {AtPalpala.length === 0 ? (
              <div className="border mt-4 p-2">
                <h3>
                  Atrasados Palpala{" "}
                  <span className="badge badge-pill badge-dark text-white">
                    {AtPalpala.length}
                  </span>
                </h3>
                <Spinner />
              </div>
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h3>
                    Atrasados Palpala{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtPalpala.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtPalpala, 13)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtL listado={AtPalpala} />
              </div>
            )}
            <hr />
            {AtPerico.length === 0 ? (
              <div className="border mt-4 p-2">
                <h3>
                  Atrasados Perico{" "}
                  <span className="badge badge-pill badge-dark text-white">
                    {AtPerico.length}
                  </span>
                </h3>
                <Spinner />
              </div>
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  {" "}
                  <h3>
                    Atrasados Perico{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtPerico.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtPerico, 14)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtR listado={AtPerico} />
              </div>
            )}

            <hr />
            {AtSanPedro.length === 0 ? (
              <div className="border mt-4 p-2 mb-4">
                <h3>
                  Atrasados San Pedro{" "}
                  <span className="badge badge-pill badge-dark text-white">
                    {AtSanPedro.length}
                  </span>
                </h3>
                <Spinner />
              </div>
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h3>
                    Atrasados San Pedro{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtSanPedro.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtSanPedro, 15)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtP listado={AtSanPedro} />
              </div>
            )}
          </div>

          {/* RECUPERACIONES */}
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            ...d
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            ...s
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  atw: state.campanas.atw,
  estado: state.campanas.estado
});

export default connect(
  mapStateToProps,
  { atW, verificarEstadoCamp, crearCampAT }
)(EstadoSocio);
