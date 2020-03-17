import React, { Component } from "react";

import { Link } from "react-router-dom";
import MesSelect from "react-select";
import AnoSelect from "react-select";
import { meses, anos } from "../layouts/Arrays/arrays";

import ReactToPrint from "react-to-print";

export default class ResumenTabla extends Component {
  render() {
    const {
      respalcob,
      respercob,
      resspcob,
      resssjcob,
      respalcobm,
      respercobm,
      resspcobm,
      resssjcobm,
      respaltar,
      respertar,
      ressptar,
      resssjtar,
      respalban,
      resperban,
      resspban,
      resssjban,
      respaltarm,
      respertarm,
      ressptarm,
      resssjtarm,
      respalpol,
      resperpol,
      ressppol,
      resssjpol,
      respalofi,
      resperofi,
      resspofi,
      resssjofi,
      respalofim,
      resperofim,
      resspofim,
      resssjofim,
      respalconv,
      resperconv,
      resspconv,
      resssjconv,
      mes,
      ano,
      efecmediopago,
      efecempresa,
      efecsucursal,
      efecempresam,
      efecsucursalm,
      handleChange,
      buscar,
      marca
    } = this.props;

    return (
      <div>
        <div className="form-style-8">
          <h2 className="mb-4 ">Seleccione el periodo de la cobranza</h2>
          <div className="mb-4 d-flex justify-content-beetwen">
            <div className="col-md-4">
              <MesSelect
                options={meses}
                placeholder={"Eliga un Mes"}
                onChange={value => handleChange(value, "mes")}
              />
            </div>
            <div className="col-md-4">
              <AnoSelect
                options={anos}
                placeholder={"Eliga el Año"}
                onChange={value => handleChange(value, "ano")}
              />
            </div>
            <div className="col-md-4 mt-4">
              <Link
                className="btn btn-block btn-primary"
                onClick={buscar}
                to="#"
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>

        {!marca ? null : (
          <div>
            <div className="form-style-8" ref={el => (this.componentRef = el)}>
              <h2 className="mb-4">
                Resumen de Efectividad de Cobranza Periodo: {mes}-{ano}
              </h2>

              <table className="table border border-dark text-center mt-4">
                <thead className="thead-dark">
                  <th className="border border-dark border-bottom" colspan="8">
                    WERCHOW
                  </th>
                  <tr>
                    <th className="border border-dark" scope="col">
                      SUCURSAL
                    </th>
                    <th className="border border-dark" scope="col">
                      COBRADORES
                    </th>
                    <th className="border border-dark" scope="col">
                      OFICINA
                    </th>
                    <th className="border border-dark" scope="col">
                      TARJETAS
                    </th>
                    <th className="border border-dark" scope="col">
                      BANCO
                    </th>
                    <th className="border border-dark" scope="col">
                      POLICIAS
                    </th>
                    <th className="border border-dark" scope="col">
                      EFECTIVIDAD TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      PALPALA
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalcob, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalofi, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respaltar, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalban, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalpol, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursal(
                          respalcob,
                          respalofi,
                          respaltar,
                          respalban,
                          respalpol,
                          respalconv
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      PERICO
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respercob, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resperofi, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respertar, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resperban, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resperpol, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursal(
                          respercob,
                          resperofi,
                          respertar,
                          resperban,
                          resperpol,
                          resperconv
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>

                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      SAN PEDRO
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resspcob, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resspofi, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(ressptar, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resspban, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(ressppol, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursal(
                          resspcob,
                          resspofi,
                          ressptar,
                          resspban,
                          ressppol,
                          resspconv
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      SAN SALVADOR
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjcob, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjofi, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjtar, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjban, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjpol, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursal(
                          resssjcob,
                          resssjofi,
                          resssjtar,
                          resssjban,
                          resssjpol,
                          resssjconv
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-dark" colspan="6">
                      <strong>TOTAL EFECTIVIDAD WERCHOW</strong>
                    </td>

                    <td className="border border-dark" colspan="2">
                      <strong>
                        {efecempresa(
                          respalcob,
                          respercob,
                          resspcob,
                          resssjcob,
                          respaltar,
                          respertar,
                          ressptar,
                          resssjtar,
                          respalban,
                          resperban,
                          resspban,
                          resssjban,
                          respalpol,
                          resperpol,
                          ressppol,
                          resssjpol,
                          respalofi,
                          resperofi,
                          resspofi,
                          resssjofi
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table border border-dark text-center mt-2">
                <thead className="thead-dark">
                  <th className="border border-dark border-bottom" colspan="8">
                    MUTUAL
                  </th>
                  <tr>
                    <th className="border border-dark" scope="col">
                      SUCURSAL
                    </th>
                    <th className="border border-dark" scope="col">
                      COBRADORES
                    </th>
                    <th className="border border-dark" scope="col">
                      OFICINA
                    </th>
                    <th className="border border-dark" scope="col">
                      TARJETAS
                    </th>
                    <th className="border border-dark" scope="col">
                      BANCO
                    </th>
                    <th className="border border-dark" scope="col">
                      POLICIAS
                    </th>
                    <th className="border border-dark" scope="col">
                      EFECTIVIDAD TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      PALPALA
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalcobm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respalofim, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respaltarm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursalm(respalcobm, respalofim, respaltarm)} %
                      </strong>
                    </td>
                  </tr>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      PERICO
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respercobm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resperofim, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(respertarm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursalm(respercobm, resperofim, respertarm)} %
                      </strong>
                    </td>
                  </tr>

                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      SAN PEDRO
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resspcobm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resspofim, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(ressptarm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursalm(resspcobm, resspofim, ressptarm)} %
                      </strong>
                    </td>
                  </tr>
                  <tr className="border border-dark">
                    <th className="border border-dark" scope="row">
                      SAN SALVADOR
                    </th>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjcobm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjofim, 0)} %</strong>
                    </td>
                    <td className="border border-dark">
                      <strong>{efecmediopago(resssjtarm, 0)} %</strong>
                    </td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">------</td>
                    <td className="border border-dark">
                      <strong>
                        {efecsucursalm(resssjcobm, resssjofim, resssjtarm)} %
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-dark" colspan="6">
                      <strong>TOTAL EFECTIVIDAD MUTUAL</strong>
                    </td>

                    <td className="border border-dark" colspan="2">
                      <strong>
                        {efecempresam(
                          respalcobm,
                          respercobm,
                          resspcobm,
                          resssjcobm,
                          respaltarm,
                          respertarm,
                          ressptarm,
                          resssjtarm,
                          respalofim,
                          resperofim,
                          resspofim,
                          resssjofim
                        )}{" "}
                        %
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="jumbotron container">
              <div className="mt-4 p-4 border">
                <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                <div className="d-flex justify-content-center">
                  <ReactToPrint
                    trigger={() => (
                      <Link className="btn btn-primary">imprimir </Link>
                    )}
                    content={() => this.componentRef}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
