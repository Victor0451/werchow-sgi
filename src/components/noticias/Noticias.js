import React, { Component } from "react";
import moment from "moment";

import { connect } from "react-redux";
import { mostraNoticia } from "../../actions/noticiaActions";

class Noticias extends Component {
  componentDidMount() {
    this.props.mostraNoticia();
  }

  render() {
    const { noticia } = this.props;
    console.log(noticia)

    if (!noticia) return null

    let fecha = moment.utc(noticia.fecha).format("DD/MM/YYYY HH:mm:ss");

    return (
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        <h3 className="alert-heading mb-4">
          <strong>
            <u>Novedades</u>
          </strong>
        </h3>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p>* {noticia.noticia}</p>
        <hr />
        <p className="mb-0 text-center">
          {noticia.operador} - {fecha}
        </p>
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
    mostraNoticia
  }
)(Noticias);
