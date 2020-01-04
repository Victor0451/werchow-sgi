import React, { Component } from "react";

import AtCC from "./estados/atCC";
import AtPal from "./estados/atPalpala";
import AtPer from "./estados/atPer";
import RecCC from "./estados/recCC";
import RecPal from "./estados/recPal";
import RecPer from "./estados/recPer";
import RecSP from "./estados/recSP";
import ReinCC from "./estados/reinCC";
import ReinPal from "./estados/reinPal";
import ReinPer from "./estados/reinPer";
import ReinSP from "./estados/reinSP";
import BlanqueoCC from "./estados/blanqueoCC";
import BlanqueoPal from "./estados/blanqueoPal";
import BlanqueoPer from "./estados/blanqueoPer";
import BlanqueoSP from "./estados/blanqueoSP";
import PoliCC from "./estados/poliCC";
import PoliPer from "./estados/poliPer";
import PoliPal from "./estados/poliPalpala";
import PoliSP from "./estados/poliSP";
import AuxCC from "./estados/auxCC";
import AuxPer from "./estados/auxPer";
import AuxPal from "./estados/auxPalpala";
import AuxSP from "./estados/auxSP";

import toastr from "../../../utils/toastr";

//redux
import { connect } from "react-redux";
import {
  atW,
  RecW,
  ReinW,
  BlanW,
  PoliW,
  AuxW,
  verificarEstadoCamp,
  crearCampAT
} from "../../../actions/campanasActions";
import AtSP from "./estados/atSP";

class EstadoSocio extends Component {
  state = {
    AtPalpala: [],
    AtPerico: [],
    AtSanPedro: [],
    AtCasaCentralAT: [],
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
    BlanSanPedro: [],
    PoliPalpala: [],
    PoliPerico: [],
    PoliSanPedro: [],
    PoliCasaCentralAT: [],
    PoliCasaCentralGG: [],
    PoliCasaCentralMG: [],
    AuxCasaCentralGG: [],
    AuxCasaCentralMG: [],
    AuxPalpala: [],
    AuxPerico: [],
    AuxSanPedro: []
  };

  atDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.atW();

      setTimeout(() => {
        const { at } = this.props;
        console.log(this.props);
        if (at) {
          let atrasados = at[0];

          let AtPerico = atrasados.filter(at => {
            return at.SUCURSAL === "R";
          });

          let AtPalpala = atrasados.filter(at => {
            return at.SUCURSAL === "L";
          });

          let AtSanPedro = atrasados.filter(at => {
            return at.SUCURSAL === "P";
          });

          let AtCasaCentral = atrasados.filter(at => {
            return at.SUCURSAL === "W";
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
        const { rec } = this.props;
        console.log(this.props);
        if (rec) {
          let recuperacion = rec[0];

          let RecPerico = recuperacion.filter(rec => {
            return rec.SUCURSAL === "R";
          });

          let RecPalpala = recuperacion.filter(rec => {
            return rec.SUCURSAL === "L";
          });

          let RecSanPedro = recuperacion.filter(rec => {
            return rec.SUCURSAL === "P";
          });

          let RecCasaCentral = recuperacion.filter(rec => {
            return rec.SUCURSAL === "W";
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
        const { rein } = this.props;
        console.log(this.props);
        if (rein) {
          let reincidente = rein[0];

          let ReinPerico = reincidente.filter(rein => {
            return rein.SUCURSAL === "R";
          });

          let ReinPalpala = reincidente.filter(rein => {
            return rein.SUCURSAL === "L";
          });

          let ReinSanPedro = reincidente.filter(rein => {
            return rein.SUCURSAL === "P";
          });

          let ReinCasaCentral = reincidente.filter(rein => {
            return rein.SUCURSAL === "W";
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
        const { blan } = this.props;
        console.log(this.props);
        if (blan) {
          let blanqueo = blan[0];

          let BlanPerico = blanqueo.filter(blan => {
            return blan.SUCURSAL === "R";
          });

          let BlanPalpala = blanqueo.filter(blan => {
            return blan.SUCURSAL === "L";
          });

          let BlanSanPedro = blanqueo.filter(blan => {
            return blan.SUCURSAL === "P";
          });

          let BlanCasaCentral = blanqueo.filter(blan => {
            return blan.SUCURSAL === "W";
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

  polisDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.PoliW();

      setTimeout(() => {
        const { poli } = this.props;
        console.log(this.props);
        if (poli) {
          let policias = poli[0];

          let PoliPerico = policias.filter(rec => {
            return rec.SUCURSAL === "R";
          });

          let PoliPalpala = policias.filter(rec => {
            return rec.SUCURSAL === "L";
          });

          let PoliSanPedro = policias.filter(rec => {
            return rec.SUCURSAL === "P";
          });

          let PoliCasaCentral = policias.filter(rec => {
            return rec.SUCURSAL === "W";
          });

          let PoliCCmitad = Math.floor(PoliCasaCentral.length / 2);

          let PoliCasaCentralGG = PoliCasaCentral.slice(0, PoliCCmitad);

          let PoliCasaCentralMG = PoliCasaCentral.slice(
            PoliCCmitad,
            PoliCasaCentral.length
          );

          this.setState({
            PoliCasaCentralGG: PoliCasaCentralGG,
            PoliCasaCentralMG: PoliCasaCentralMG,
            PoliPalpala: PoliPalpala,
            PoliPerico: PoliPerico,
            PoliSanPedro: PoliSanPedro
          });
        }
      }, 1000);
    }
  };

  auxDelMes = () => {
    let newDate = new Date();
    let date = newDate.getDate();

    if (date) {
      this.props.AuxW();

      setTimeout(() => {
        const { aux } = this.props;
        console.log(this.props);
        if (aux) {
          let auxiliar = aux[0];

          let AuxPerico = auxiliar.filter(aux => {
            return aux.SUCURSAL === "R";
          });

          let AuxPalpala = auxiliar.filter(aux => {
            return aux.SUCURSAL === "L";
          });

          let AuxSanPedro = auxiliar.filter(aux => {
            return aux.SUCURSAL === "P";
          });

          let AuxCasaCentral = auxiliar.filter(aux => {
            return aux.SUCURSAL === "W";
          });

          let AuxCCmitad = Math.floor(AuxCasaCentral.length / 2);

          let AuxCasaCentralGG = AuxCasaCentral.slice(0, AuxCCmitad);

          let AuxCasaCentralMG = AuxCasaCentral.slice(
            AuxCCmitad,
            AuxCasaCentral.length
          );

          this.setState({
            AuxCasaCentralGG: AuxCasaCentralGG,
            AuxCasaCentralMG: AuxCasaCentralMG,
            AuxPalpala: AuxPalpala,
            AuxPerico: AuxPerico,
            AuxSanPedro: AuxSanPedro
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
      AtCasaCentralAT,
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
      BlanSanPedro,
      PoliCasaCentralAT,
      PoliCasaCentralMG,
      PoliCasaCentralGG,
      PoliPalpala,
      PoliPerico,
      PoliSanPedro,
      AuxCasaCentralGG,
      AuxCasaCentralMG,
      AuxPalpala,
      AuxPerico,
      AuxSanPedro
    } = this.state;
    let flag = 1;
    return (
      <div className="container mt-4">
        <h1 className="mt-4 mb-4 text-center">
          <u>Estado Socio Werchow</u>
        </h1>
        <nav>
          <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
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

            <a
              className="nav-item nav-link"
              id="nav-poli-tab"
              data-toggle="tab"
              href="#nav-poli"
              role="tab"
              aria-controls="nav-poli"
              aria-selected="false"
            >
              Policia {""}
              <span className="badge badge-pill badge-dark text-white">
                {PoliCasaCentralMG.length +
                  PoliCasaCentralAT.length +
                  PoliCasaCentralGG.length +
                  PoliPalpala.length +
                  PoliPerico.length +
                  PoliSanPedro.length}
              </span>
            </a>

            <a
              className="nav-item nav-link"
              id="nav-aux-tab"
              data-toggle="tab"
              href="#nav-aux"
              role="tab"
              aria-controls="nav-aux"
              aria-selected="false"
            >
              Auxiliar {""}
              <span className="badge badge-pill badge-dark text-white">
                {AuxCasaCentralMG.length +
                  AuxCasaCentralGG.length +
                  AuxPalpala.length +
                  AuxPerico.length +
                  AuxSanPedro.length}
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
              flag={flag}
              AtCasaCentralAT={AtCasaCentralAT}
              AtCasaCentralMG={AtCasaCentralMG}
              AtCasaCentralGG={AtCasaCentralGG}
              crearCampana={this.crearCampana}
            />

            <hr />

            <AtPal
              AtPalpala={AtPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <AtPer
              AtPerico={AtPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <AtSP
              AtSanPedro={AtSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
            />
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
              flag={flag}
            />

            <hr />

            <RecPal
              RecPalpala={RecPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <RecPer
              RecPerico={RecPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <RecSP
              RecSanPedro={RecSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
            />
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
              flag={flag}
            />

            <hr />

            <ReinPal
              ReinPalpala={ReinPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <ReinPer
              ReinPerico={ReinPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <ReinSP
              ReinSanPedro={ReinSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
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
              flag={flag}
            />

            <hr />

            <BlanqueoPal
              BlanPalpala={BlanPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <BlanqueoPer
              BlanPerico={BlanPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <BlanqueoSP
              BlanSanPedro={BlanSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
            />
          </div>
          <div
            className="tab-pane fade"
            id="nav-poli"
            role="tabpanel"
            aria-labelledby="nav-poli-tab"
          >
            <div className="jumbotron row mt-4">
              <div className="col-md-6">
                <h2>Buscar Cartera para Policias</h2>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.polisDelMes}
                >
                  Buscar
                </button>
              </div>
            </div>

            <PoliCC
              PoliCasaCentralGG={PoliCasaCentralGG}
              PoliCasaCentralMG={PoliCasaCentralMG}
              PoliCasaCentralAT={PoliCasaCentralAT}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <PoliPal
              PoliPalpala={PoliPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <PoliPer
              PoliPerico={PoliPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <PoliSP
              PoliSanPedro={PoliSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
            />
          </div>

          <div
            className="tab-pane fade"
            id="nav-aux"
            role="tabpanel"
            aria-labelledby="nav-aux-tab"
          >
            <div className="jumbotron row mt-4">
              <div className="col-md-6">
                <h2>Buscar Cartera para campaña auxiliar</h2>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-secondary btn-block"
                  onClick={this.auxDelMes}
                >
                  Buscar
                </button>
              </div>
            </div>

            <AuxCC
              AuxCasaCentralGG={AuxCasaCentralGG}
              AuxCasaCentralMG={AuxCasaCentralMG}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <AuxPal
              AuxPalpala={AuxPalpala}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />

            <AuxPer
              AuxPerico={AuxPerico}
              crearCampana={this.crearCampana}
              flag={flag}
            />

            <hr />
            <AuxSP
              AuxSanPedro={AuxSanPedro}
              crearCampana={this.crearCampana}
              flag={flag}
            />
          </div>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  at: state.campanas.at,
  rec: state.campanas.rec,
  rein: state.campanas.rein,
  blan: state.campanas.blan,
  poli: state.campanas.poli,
  aux: state.campanas.aux,
  estado: state.campanas.estado
});

export default connect(mapStateToProps, {
  atW,
  RecW,
  ReinW,
  BlanW,
  PoliW,
  AuxW,
  verificarEstadoCamp,
  crearCampAT
})(EstadoSocio);
