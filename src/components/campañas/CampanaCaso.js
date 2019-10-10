import React, { Component } from "react";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { atW, RecW, ReinW, BlanW } from "../../actions/campanasActions";
import Estadistica from "./estadistica/Estadistica";

class CampanaCaso extends Component {
  state = {
    atw: {},
    recw: {},
    reinw: {},
    blanw: {}
  };

  render() {
    return (
      <div className="container">
        <h1>Gestion de Campañas</h1>

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
              WERCHOW
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
              MUTUAL
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
              ESTADISTICA
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      className="btn btn-primary"
                      to={`/gestioncaso/Atrasados`}
                    >
                      Abrir Campaña
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">RECUPERACIONES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      className="btn btn-primary"
                      to={`/gestioncaso/Recuperacion`}
                    >
                      Abrir Campaña
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">REINCIDENTES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      className="btn btn-primary"
                      to={`/gestioncaso/Reincidencia`}
                    >
                      Abrir Campaña
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">BLANQUEOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      className="btn btn-primary"
                      to={`/gestioncaso/Blanqueo`}
                    >
                      Abrir Campaña
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            EN PROCESO...
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <Estadistica />
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
  { atW, RecW, ReinW, BlanW }
)(CampanaCaso);
