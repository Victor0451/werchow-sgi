import React, { Component } from "react";

import AtCC from "./werchow/atCC";
import AtPal from "./werchow/atPalpala";
import AtPer from "./werchow/atPer";
import RecCC from "./werchow/recCC";
import RecPal from "./werchow/recPal";
import RecPer from "./werchow/recPer";
import RecSP from "./werchow/recSP";
import ReinCC from "./werchow/reinCC";
import ReinPal from "./werchow/reinPal";
import ReinPer from "./werchow/reinPer";
import ReinSP from "./werchow/reinSP";
import BlanqueoCC from "./werchow/blanqueoCC";
import BlanqueoPal from "./werchow/blanqueoPal";
import BlanqueoPer from "./werchow/blanqueoPer";
import BlanqueoSP from "./werchow/blanqueoSP";

import toastr from "../../../utils/toastr";

//redux
import { connect } from "react-redux";
import {
  atW,
  RecW,
  ReinW,
  BlanW,
  verificarEstadoCamp,
  crearCampAT
} from "../../../actions/campanasActions";
import AtSP from "./werchow/atSP";

class EstadoSocio extends Component {
  state = {
    AtPalpala: [],
    AtPerico: [],
    AtSanPedro: [],
    AtCasaCentralGG: [],
    AtCasaCentralMG: [],
    RecCasaCentralGG: [],
    RecCasaCentralMG: [],
    RecPalpala: [],
    RecPerico: [],
    RecSanPedro: [],
    ReinCasaCentralGG: [],
    ReinCasaCentralMG: [],
    ReinPalpala: [],
    ReinPerico: [],
    ReinSanPedro: [],
    BlanCasaCentralGG: [],
    BlanCasaCentralMG: [],
    BlanPalpala: [],
    BlanPerico: [],
    BlanSanPedro: []
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

  recDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.RecW();

      setTimeout(() => {
        const { recw } = this.props;
        console.log(this.props);
        if (recw) {
          let recuperacion = recw[0];

          let RecPerico = recuperacion.filter(recw => {
            return recw.SUCURSAL === "R";
          });

          let RecPalpala = recuperacion.filter(recw => {
            return recw.SUCURSAL === "L";
          });

          let RecSanPedro = recuperacion.filter(recw => {
            return recw.SUCURSAL === "P";
          });

          let RecCasaCentral = recuperacion.filter(recw => {
            return recw.SUCURSAL === "W";
          });

          let RecCCmitad = Math.floor(RecCasaCentral.length / 2);

          let RecCasaCentralGG = RecCasaCentral.slice(0, RecCCmitad);

          let RecCasaCentralMG = RecCasaCentral.slice(
            RecCCmitad,
            RecCasaCentral.length
          );

          this.setState({
            RecCasaCentralGG: RecCasaCentralGG,
            RecCasaCentralMG: RecCasaCentralMG,
            RecPalpala: RecPalpala,
            RecPerico: RecPerico,
            RecSanPedro: RecSanPedro
          });
        }
      }, 1000);
    }
  };

  reinDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.ReinW();

      setTimeout(() => {
        const { reinw } = this.props;
        console.log(this.props);
        if (reinw) {
          let reincidente = reinw[0];

          let ReinPerico = reincidente.filter(reinw => {
            return reinw.SUCURSAL === "R";
          });

          let ReinPalpala = reincidente.filter(reinw => {
            return reinw.SUCURSAL === "L";
          });

          let ReinSanPedro = reincidente.filter(reinw => {
            return reinw.SUCURSAL === "P";
          });

          let ReinCasaCentral = reincidente.filter(reinw => {
            return reinw.SUCURSAL === "W";
          });

          let ReinCCmitad = Math.floor(ReinCasaCentral.length / 2);

          let ReinCasaCentralGG = ReinCasaCentral.slice(0, ReinCCmitad);

          let ReinCasaCentralMG = ReinCasaCentral.slice(
            ReinCCmitad,
            ReinCasaCentral.length
          );

          this.setState({
            ReinCasaCentralGG: ReinCasaCentralGG,
            ReinCasaCentralMG: ReinCasaCentralMG,
            ReinPalpala: ReinPalpala,
            ReinPerico: ReinPerico,
            ReinSanPedro: ReinSanPedro
          });
        }
      }, 1000);
    }
  };

  blanDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.BlanW();

      setTimeout(() => {
        const { blanw } = this.props;
        console.log(this.props);
        if (blanw) {
          let blanqueo = blanw[0];

          let BlanPerico = blanqueo.filter(blanw => {
            return blanw.SUCURSAL === "R";
          });

          let BlanPalpala = blanqueo.filter(blanw => {
            return blanw.SUCURSAL === "L";
          });

          let BlanSanPedro = blanqueo.filter(blanw => {
            return blanw.SUCURSAL === "P";
          });

          let BlanCasaCentral = blanqueo.filter(blanw => {
            return blanw.SUCURSAL === "W";
          });

          let BlanCCmitad = Math.floor(BlanCasaCentral.length / 2);

          let BlanCasaCentralGG = BlanCasaCentral.slice(0, BlanCCmitad);

          let BlanCasaCentralMG = BlanCasaCentral.slice(
            BlanCCmitad,
            BlanCasaCentral.length
          );

          this.setState({
            BlanCasaCentralGG: BlanCasaCentralGG,
            BlanCasaCentralMG: BlanCasaCentralMG,
            BlanPalpala: BlanPalpala,
            BlanPerico: BlanPerico,
            BlanSanPedro: BlanSanPedro
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
          montoadeudado: array[i].IMPORTE * 3,
          estadocaso: true
        };
        console.log(caso);
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
      AtSanPedro,
      RecCasaCentralGG,
      RecCasaCentralMG,
      RecPalpala,
      RecPerico,
      RecSanPedro,
      ReinCasaCentralGG,
      ReinCasaCentralMG,
      ReinPalpala,
      ReinPerico,
      ReinSanPedro,
      BlanCasaCentralGG,
      BlanCasaCentralMG,
      BlanPalpala,
      BlanPerico,
      BlanSanPedro
    } = this.state;

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
              Recuperaciones {""}
              <span className="badge badge-pill badge-dark text-white">
                {RecCasaCentralMG.length +
                  RecCasaCentralGG.length +
                  RecPalpala.length +
                  RecPerico.length +
                  RecSanPedro.length}
              </span>
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
              Reincidentes {""}
              <span className="badge badge-pill badge-dark text-white">
                {ReinCasaCentralMG.length +
                  ReinCasaCentralGG.length +
                  ReinPalpala.length +
                  ReinPerico.length +
                  ReinSanPedro.length}
              </span>
            </a>

            <a
              className="nav-item nav-link"
              id="nav-blanqueo-tab"
              data-toggle="tab"
              href="#nav-blanqueo"
              role="tab"
              aria-controls="nav-blanqueo"
              aria-selected="false"
            >
              Blanqueo {""}
              <span className="badge badge-pill badge-dark text-white">
                {BlanCasaCentralMG.length +
                  BlanCasaCentralGG.length +
                  BlanPalpala.length +
                  BlanPerico.length +
                  BlanSanPedro.length}
              </span>
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
            <div className="jumbotron row mt-4">
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

            <AtCC
              AtCasaCentralMG={AtCasaCentralMG}
              AtCasaCentralGG={AtCasaCentralGG}
              crearCampana={this.crearCampana}
            />

            <hr />

            <AtPal AtPalpala={AtPalpala} crearCampana={this.crearCampana} />

            <hr />

            <AtPer AtPerico={AtPerico} crearCampana={this.crearCampana} />

            <hr />
            <AtSP AtSanPedro={AtSanPedro} crearCampana={this.crearCampana} />
          </div>

          {/* RECUPERACIONES */}
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="jumbotron row mt-4">
              <div className="col-md-6">
                <h2>Buscar Cartera Morosa</h2>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.recDelMes}
                >
                  Buscar
                </button>
              </div>
            </div>

            <RecCC
              RecCasaCentralGG={RecCasaCentralGG}
              RecCasaCentralMG={RecCasaCentralMG}
              crearCampana={this.crearCampana}
            />

            <hr />

            <RecPal RecPalpala={RecPalpala} crearCampana={this.crearCampana} />

            <hr />

            <RecPer RecPerico={RecPerico} crearCampana={this.crearCampana} />

            <hr />
            <RecSP RecSanPedro={RecSanPedro} crearCampana={this.crearCampana} />
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="jumbotron row mt-4">
              <div className="col-md-6">
                <h2>Buscar Cartera Morosa</h2>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.reinDelMes}
                >
                  Buscar
                </button>
              </div>
            </div>

            <ReinCC
              ReinCasaCentralGG={ReinCasaCentralGG}
              ReinCasaCentralMG={ReinCasaCentralMG}
              crearCampana={this.crearCampana}
            />

            <hr />

            <ReinPal
              ReinPalpala={ReinPalpala}
              crearCampana={this.crearCampana}
            />

            <hr />

            <ReinPer ReinPerico={ReinPerico} crearCampana={this.crearCampana} />

            <hr />
            <ReinSP
              ReinSanPedro={ReinSanPedro}
              crearCampana={this.crearCampana}
            />
          </div>

          <div
            className="tab-pane fade"
            id="nav-blanqueo"
            role="tabpanel"
            aria-labelledby="nav-blanqueo-tab"
          >
            <div className="jumbotron row mt-4">
              <div className="col-md-6">
                <h2>Buscar Cartera para Blanqueo</h2>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.blanDelMes}
                >
                  Buscar
                </button>
              </div>
            </div>

            <BlanqueoCC
              BlanCasaCentralGG={BlanCasaCentralGG}
              BlanCasaCentralMG={BlanCasaCentralMG}
              crearCampana={this.crearCampana}
            />

            <hr />

            <BlanqueoPal
              BlanPalpala={BlanPalpala}
              crearCampana={this.crearCampana}
            />

            <hr />

            <BlanqueoPer
              BlanPerico={BlanPerico}
              crearCampana={this.crearCampana}
            />

            <hr />
            <BlanqueoSP
              BlanSanPedro={BlanSanPedro}
              crearCampana={this.crearCampana}
            />
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  atw: state.campanas.atw,
  recw: state.campanas.recw,
  reinw: state.campanas.reinw,
  blanw: state.campanas.blanw,
  estado: state.campanas.estado
});

export default connect(
  mapStateToProps,
  { atW, RecW, ReinW, BlanW, verificarEstadoCamp, crearCampAT }
)(EstadoSocio);
