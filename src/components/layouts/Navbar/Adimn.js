import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Adimn extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Informes
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Mora
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/mora/werchow" className="dropdown-item text-dark">
                    Mora Werchow
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/mora/mutual" className="dropdown-item text-dark">
                    Mora Mutual
                  </Link>
                </li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Cobranza
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/cobranza/werchow"
                    className="dropdown-item text-dark"
                  >
                    Cobranza Werchow
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/cobranza/mutual"
                    className="dropdown-item text-dark"
                  >
                    Cobranza Mutual
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/cobranza/resumen"
                    className="dropdown-item text-dark"
                  >
                    Resumen Efectividad de Cobranza
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Prestamos
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/prestamos/nuevo" className="dropdown-item text-dark">
                Nuevo Prestamo
              </Link>
            </li>

            <hr />

            <li>
              <Link to="/prestamos/listado" className="dropdown-item text-dark">
                Listado de Prestamos
              </Link>
            </li>

            <hr />

            <li>
              <Link
                to="/prestamos/informes"
                className="dropdown-item text-dark"
              >
                Reportes
              </Link>
            </li>

            <hr />

            <li>
              <Link to="/prestamos/aprobar" className="dropdown-item text-dark">
                Aprobacion de Prestamos
              </Link>
            </li>

            <hr />

            <li>
              <Link
                to="/prestamos/imprimir"
                className="dropdown-item text-dark"
              >
                Imprimir Caratula
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Campañas
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Asignar Campañas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/estadosocioW" className="dropdown-item text-dark">
                    Werchow
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="/estadosocioM" className="dropdown-item text-dark">
                    Mutual
                  </Link>
                </li>
              </ul>
            </li>

            <hr />

            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Opciones
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/campanas/cerrar"
                    className="dropdown-item text-dark"
                  >
                    Cerrar Campañas Werchow
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/campanas/cerrarm"
                    className="dropdown-item text-dark"
                  >
                    Cerrar Campañas Mutual
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/campanas/resultados"
                    className="dropdown-item text-dark"
                  >
                    Resultados Campañas Activas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
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
            Noticias{" "}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/noticia" className="dropdown-item text-dark">
              Ingresar Noticia
            </Link>
          </div>
        </li>

        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Sepelio
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Caja
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/sepelio/nuevacaja"
                    className="dropdown-item text-dark"
                  >
                    Ingresar Caja
                  </Link>
                </li>
                <hr />
                <li>
                  <Link
                    to="/sepelio/listadocajas"
                    className="dropdown-item text-dark"
                  >
                    Listado Cajas Sepelio
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <Link
            to="#"
            role="button"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
          >
            Ventas
          </Link>
          <ul className="dropdown-menu">
            <li className="dropdown-submenu">
              <Link
                to="#"
                role="button"
                data-toggle="dropdown"
                className="  dropdown-toggle dropdown-item text-dark"
              >
                Consultas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/ventas/consultaventas"
                    className="dropdown-item text-dark"
                  >
                    Ventas por periodo
                  </Link>
                </li>
                <hr />
                <li>
                  {/* <Link
                            to="/sepelio/listadocajas"
                            className="dropdown-item text-dark"
                          >
                            Listado Cajas Sepelio
                          </Link> */}
                </li>
              </ul>
            </li>
          </ul>
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
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
    );
  }
}
