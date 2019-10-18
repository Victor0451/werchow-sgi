import React, { Component } from "react";
import moment from "moment";

import { connect } from "react-redux";
import { nuevaNoticia } from "../../actions/noticiaActions";

class NuevaNoticia extends Component {
  noticiaRef = React.createRef();
  fechaRef = React.createRef();
  operadorRef = React.createRef();

  state = {
    noticia: {}
  };

  crearNoticia = e => {
    e.preventDefault();
    const noti = {
      fecha: this.fechaRef.current.value,
      noticia: this.noticiaRef.current.value,
      operador: this.operadorRef.current.value
    };

    this.props.nuevaNoticia(noti);

    e.target.reset();
  };

  render() {
    const { user } = this.props.auth;
    let tmp = new Date(Date.now());
    let fecha = moment(tmp).format("DD-MM-YYYY HH:mm:ss");

    return (
      <div className="container">
        <div className="form-style-8">
          <h2>Ingresar Noticia</h2>
          <form onSubmit={this.crearNoticia}>
            <div className="row">
              <div className="col-md-6">
                <label>Fecha</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={fecha}
                  ref={this.fechaRef}
                />
              </div>
              <div className="col-md-6">
                <label>Operador</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  ref={this.operadorRef}
                  defaultValue={user.usuario}
                />
              </div>
              <div className="col-md-12 mt-4">
                <textarea
                  className="form-control"
                  placeholder="Nueva Noticia"
                  rows="3"
                  ref={this.noticiaRef}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4 btn-block">
              Registrar Noticia
            </button>
          </form>
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  noticia: state.noticia.noticia,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    nuevaNoticia
  }
)(NuevaNoticia);
