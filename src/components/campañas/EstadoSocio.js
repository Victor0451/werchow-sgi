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
    AtCasaCentral: [],
    spinner: true
  };

  componentDidMount() {
    this.atDelMes();
  }

  atDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date >= 15) {
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

          this.setState({
            AtCasaCentral: AtCasaCentral,
            AtPalpala: AtPalpala,
            AtPerico: AtPerico,
            AtSanPedro: AtSanPedro,
            spinner: false
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
          sucursal: array[i].SUCURSAL,
          contrato: array[i].CONTRATO,
          apellido: array[i].APELLIDOS,
          nombre: array[i].NOMBRES,
          dni: array[i].NRO_DOC,
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
        this.componentDidMount();
      }
    }
  };

  render() {
    const {
      AtCasaCentral,
      AtPalpala,
      AtPerico,
      AtSanPedro,
      spinner
    } = this.state;

    if (spinner === true) return <Spinner />;

    return (
      <div className="container mt-4">
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
                {AtCasaCentral.length +
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
            {!AtCasaCentral ? (
              <Spinner />
            ) : (
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h3>
                    Atrasados Casa Central{" "}
                    <span className="badge badge-pill badge-dark text-white">
                      {AtCasaCentral.length}
                    </span>
                  </h3>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.crearCampana(AtCasaCentral, 12)}
                  >
                    Crear Campaña
                  </button>
                </div>
                <AtW listado={AtCasaCentral} />
              </div>
            )}
            <hr />
            {!AtPalpala ? (
              <Spinner />
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
            {!AtPerico ? (
              <Spinner />
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
            {!AtSanPedro ? (
              <Spinner />
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
