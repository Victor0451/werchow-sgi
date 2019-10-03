import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Logout from "../auth/Logout";

class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    //Links para usuarios logeados
    const authLinks = (
      <Fragment>
        {/* {user && user.perfil === 'admin' ? <RegisterModal /> : ''} */}
        <div
          className="collapse navbar-collapse d-flex justify-content-start"
          id="navbarColor02"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link to="/campanacaso" className="nav-link">
                Campañas
              </Link>
            </li>

            {isAuthenticated && user.perfil === 1 ? (
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link to="/estadosocio" className="nav-link">
                    Estado Socio
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Usuarios{" "}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/register" className="dropdown-item text-dark">
                      Registrar Usuario
                    </Link>

                    <hr />

                    <Link to="/edit" className="dropdown-item text-dark">
                      Modificacion de Usuario
                    </Link>
                  </div>
                </li>
              </ul>
            ) : (
              ""
            )}
          </ul>
        </div>

        <span className="badge badge-light text-uppercase mr-2">
          {user ? `Bienvenido  ${user.usuario}` : ""}
        </span>
        <Logout />
      </Fragment>
    );

    //Links para Visitantes
    const guestLinks = (
      <Fragment>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarColor02"
        >
          <span className="badge badge-danger text-uppercase">
            Debes iniciar sesion
          </span>
        </div>
      </Fragment>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Werchow{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
