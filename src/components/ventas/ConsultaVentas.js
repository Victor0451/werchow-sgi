import React, { Component } from "react";
import { Link } from "react-router-dom";
import toastr from "../../utils/toastr";

import { connect } from "react-redux";
import { consultaVentas, consultaVentasM } from "../../actions/ventasActions";
import ListadoConsulta from "./ListadoConsulta";

class ConsultaVentas extends Component {
  desdeRef = React.createRef();
  hastaRef = React.createRef();

  state = {
    desde: "",
    hasta: ""
  };

  buscarVentas = () => {
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

      this.props.consultaVentas(desde, hasta);
      this.props.consultaVentasM(desde, hasta);
    }
  };

  render() {
    const { listadoventas, listadoventasm } = this.props;
    const { desde, hasta } = this.state;

    return (
      <div>
        <div className="form-style-8">
          <h2>Consutas de ventas realizadas por periodo:</h2>
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
                onClick={this.buscarVentas}
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>

        <div>
          <ListadoConsulta
            listadoventas={listadoventas}
            listadoventasm={listadoventasm}
            desde={desde}
            hasta={hasta}
          />
        </div>
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  listadoventas: state.ventas.listadoventas,
  listadoventasm: state.ventas.listadoventasm
});

export default connect(mapStateToProps, {
  consultaVentas,
  consultaVentasM
})(ConsultaVentas);
