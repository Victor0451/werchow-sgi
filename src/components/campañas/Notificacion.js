import React, { Component } from "react";
import werchowlogo from "../../img/logo.png";

export default class Notificacion extends Component {
  imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload(true);
  };

  reload = () => {
    document.location.reload();
  };

  render() {
    const { caso } = this.props;

    return (
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={this.imprimir}>
            Imprimir Solicitud
          </button>
        </div>

        <div className="container " id="solicitud">
          <div className="row  mt-4 mb-4 p-2">
            <div className="col-md-6 d-flex justify-content-start mt-4">
              <img
                className="werchowlogo"
                src={werchowlogo}
                alt="werchowlogo"
              />
            </div>

            <div className="col-md-6 d-flex justify-content-end mt-4">
              San Salvador de Jujuy, ______________________{" "}
            </div>

            <div className="row col-md-12 mt-4">
              <div className="col-md-6 mt-2">
                <strong>
                  <u>Sr/A. Afiliado: {""}</u>
                </strong>
                {caso.apellido}, {caso.nombre}
              </div>

              <div className="col-md-6 mt-2 d-flex justify-content-end">
                <strong>
                  <u>Legajo: </u>
                </strong>{" "}
                {caso.contrato}
              </div>

              <div className="col-md-12 mt-2 d-flex justify-content-start">
                <strong>
                  <u>Domicilio: {""}</u>
                </strong>
                {caso.calle} N° {caso.nro_calle} - B° {caso.barrio} -{" "}
                {caso.localidad}
              </div>

              <div className="col-md-12 mt-2 d-flex justify-content-start ">
                <strong>
                  <u>Telefono - Celular: {""}</u>
                </strong>
                {caso.telefono} - {caso.movil}
              </div>
              <p className="text-justify mt-2 p-2">
                Por medio de la presente se le informa que se encuentra con los
                servicios de seperlios atrasados. Por este motivo lo invitamos a
                concurrir a nuestras oficinas, ubicadas en la calle Lavalle 123,
                para regularizar su situación. Si al momento de recibir esta
                nota ud ya abono las cuotas pendientes, rogamos que nos
                disculpe. Sin otro particular y a la espera de solucionar este
                inconveniente, nos despedimos atentamente.
              </p>

              <div className="col-md-12 mt-2">
                <strong>Departamento de Cobranza</strong>
              </div>
              <div className="col-md-12 mt-2">
                <strong>
                  <u>Tel.</u>: 388-4225555
                </strong>
              </div>
              <div className="col-md-12 mt-2 mb-4">
                <strong>
                  <u>Celulares</u>: 388-4301465 - 388-4176871 (Whatsapp)
                </strong>
              </div>
            </div>
          </div>

          <hr />

          <div className="row  mt-4 p-2">
            <div className="col-md-6 d-flex justify-content-start mt-4">
              <img
                className="werchowlogo"
                src={werchowlogo}
                alt="werchowlogo"
              />
            </div>

            <div className="col-md-6 d-flex justify-content-end mt-4">
              San Salvador de Jujuy, ______________________{" "}
            </div>

            <div className="row col-md-12 mt-4">
              <div className="col-md-6 mt-2">
                <strong>
                  <u>Sr/A. Afiliado: {""}</u>
                </strong>
                {caso.apellido}, {caso.nombre}
              </div>

              <div className="col-md-6 mt-2 d-flex justify-content-end">
                <strong>
                  <u>Legajo: </u>
                </strong>{" "}
                {caso.contrato}
              </div>

              <div className="col-md-12 mt-2 d-flex justify-content-start">
                <strong>
                  <u>Domicilio: {""}</u>
                </strong>
                {caso.calle} N° {caso.nro_calle} - B° {caso.barrio} -{" "}
                {caso.localidad}
              </div>

              <div className="col-md-12 mt-2 d-flex justify-content-start ">
                <strong>
                  <u>Telefono - Celular: {""}</u>
                </strong>
                {caso.telefono} - {caso.movil}
              </div>
              <p className="text-justify mt-2 p-2">
                Por medio de la presente se le informa que se encuentra con los
                servicios de seperlios atrasados. Por este motivo lo invitamos a
                concurrir a nuestras oficinas, ubicadas en la calle Lavalle 123,
                para regularizar su situación. Si al momento de recibir esta
                nota ud ya abono las cuotas pendientes, rogamos que nos
                disculpe. Sin otro particular y a la espera de solucionar este
                inconveniente, nos despedimos atentamente.
              </p>

              <div className="col-md-12 mt-2">
                <strong>Departamento de Cobranza</strong>
              </div>
              <div className="col-md-12 mt-2">
                <strong>
                  <u>Tel.</u>: 388-4225555
                </strong>
              </div>
              <div className="col-md-12 mt-2 mb-4">
                <strong>
                  <u>Celulares</u>: 388-4301465 - 388-4176871 (Whatsapp)
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
