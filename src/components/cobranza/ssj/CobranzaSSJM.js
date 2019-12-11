// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradoSsj,
//   eTarjetaTotalSsj
// } from "../../../actions/efectividadMActions";

// import Eoficina from "../EoficinaM";
// import Ecobradores from "../EcobradoresM";
// import Ebanco from "../EbancoM";

// import {
//   total,
//   total1index,
//   total1indexfichas,
//   totalcobssjM,
//   totalfichas,
//   totalcobrado,
//   totalfichascob,
//   efecparcial,
//   efectividad3M,
//   efectividad2,
//   efectividad
// } from "../funciones";

// class CobranzaSSJM extends Component {
//   state = {
//     eoficina: "",
//     eoficinacob: "",
//     ecobradores: "",
//     ecobradorescob: "",
//     etarjetaw: "",
//     etarjetacobw: ""
//   };
//   componentDidMount() {
//     this.props.eCobradoresCobrado();
//     this.props.eCobradoresTotal();
//     this.props.eOficinaCobrado();
//     this.props.eOficinaTotal();
//     this.props.eTarjetaCobradoSsj();
//     this.props.eTarjetaTotalSsj();

//     setTimeout(() => {
//       const {
//         eoficinam,
//         eoficinacobm,
//         ecobradoresm,
//         ecobradorescobm,
//         etarjetawm,
//         etarjetacobwm
//       } = this.props;

//       this.setState({
//         eoficina: eoficinam,
//         eoficinacob: eoficinacobm,
//         ecobradores: ecobradoresm,
//         ecobradorescob: ecobradorescobm,
//         etarjetaw: etarjetawm,
//         etarjetacobw: etarjetacobwm
//       });
//     }, 400);
//   }

//   imprimir = () => {
//     let contenido = document.getElementById("ssjm").innerHTML;
//     let contenidoOrg = document.body.innerHTML;

//     document.body.innerHTML = contenido;

//     window.print();

//     document.body.innerHTML = contenidoOrg;

//     window.location.reload(true);
//   };

//   render() {
//     const {
//       eoficina,
//       eoficinacob,
//       ecobradores,
//       ecobradorescob,
//       etarjetaw,
//       etarjetacobw
//     } = this.state;

//     let acobrar =
//       totalcobssjM(ecobradores, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//       total(etarjetaw) +
//       total1index(eoficina, 0);

//     let cobrado =
//       totalcobssjM(ecobradorescob, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//       total(etarjetacobw) +
//       total1index(eoficinacob, 0);

//     let efectividadt = (cobrado * 100) / acobrar;

//     let flag = 1;
//     return (
//       <div className="containes ">
//         <div id="ssjm">
//           <h1 className="mb-4 text-center">
//             Efectividad de Cobranza San Salvador
//           </h1>

//           <hr />
//           <Ecobradores
//             flag={flag}
//             ecobradores={ecobradores}
//             ecobradorescob={ecobradorescob}
//             total={total}
//             totalfichas={totalfichas}
//             totalcobrado={totalcobrado}
//             totalfichascob={totalfichascob}
//             efecparcial={efecparcial}
//             efectividad={efectividad}
//             efectividad3M={efectividad3M}
//           />

//           <hr />

//           <Eoficina
//             flag={flag}
//             eoficina={eoficina}
//             eoficinacob={eoficinacob}
//             total={total}
//             totalfichas={totalfichas}
//             totalcobrado={totalcobrado}
//             totalfichascob={totalfichascob}
//             efecparcial={efecparcial}
//             efectividad={efectividad}
//           />

//           <hr />

//           <Ebanco
//             flag={flag}
//             etarjeta={etarjetaw}
//             etarjetacob={etarjetacobw}
//             total={total}
//             totalfichas={totalfichas}
//             totalcobrado={totalcobrado}
//             totalfichascob={totalfichascob}
//             efecparcial={efecparcial}
//             efectividad2={efectividad2}
//           />

//           <div className="container mb-4">
//             <div className="d-flex justify-content-between text-center border  border-dark mt-4 mb-4 ">
//               <div className="col-4">
//                 {" "}
//                 <strong>TOTAL GENERAL</strong>
//               </div>

//               <div className="col-2">
//                 <strong>
//                   ${" "}
//                   {totalcobssjM(ecobradores, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//                     total(etarjetaw) +
//                     total1index(eoficina, 0)}{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {totalcobssjM(ecobradores, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//                     totalfichas(etarjetaw) +
//                     total1indexfichas(eoficina, 0)}
//                 </strong>
//               </div>
//               <div className="col-2">
//                 <strong>
//                   ${" "}
//                   {totalcobssjM(ecobradorescob, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//                     total(etarjetacobw) +
//                     total1index(eoficinacob, 0)}{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {" "}
//                   {totalcobssjM(ecobradorescob, [2, 3, 5, 6, 7, 8, 9, 10, 11]) +
//                     totalfichas(etarjetacobw) +
//                     total1indexfichas(eoficinacob, 0)}
//                 </strong>
//               </div>
//               <div className="col-2">
//                 <strong>{efectividadt.toFixed(2)}%</strong>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="jumbotron">
//           <div className="mt-4 p-4 border">
//             <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
//             <div className="d-flex justify-content-center">
//               <Link
//                 to="#"
//                 className="btn btn-info col-md-3 mr-1"
//                 onClick={this.imprimir}
//               >
//                 Imprimir Solicitud
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   eoficinam: state.efectividad.eoficina,
//   eoficinacobm: state.efectividad.eoficinacob,
//   ecobradoresm: state.efectividad.ecobradores,
//   ecobradorescobm: state.efectividad.ecobradorescob,
//   etarjetawm: state.efectividad.etarjetaw,
//   etarjetacobwm: state.efectividad.etarjetacobw,
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradoSsj,
//   eTarjetaTotalSsj
// })(CobranzaSSJM);
