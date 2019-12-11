// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradosanpedro,
//   eTarjetaTotalsanpedro
// } from "../../../actions/efectividadMActions";

// import Eoficina from "../EoficinaM";
// import Ecobradores from "../EcobradoresM";
// import Ebanco from "../EbancoM";

// import {
//   total,
//   total1index,
//   total1indexfichas,
//   totalfichas,
//   totalcobrado,
//   totalfichascob,
//   efecparcial,
//   efectividad2,
//   efectividad
// } from "../funciones";

// class CobranzaSanPedro extends Component {
//   state = {
//     eoficina: "",
//     eoficinacob: "",
//     ecobradores: "",
//     ecobradorescob: "",
//     etarjetap: "",
//     etarjetacobp: ""
//   };
//   componentDidMount() {
//     this.props.eCobradoresCobrado();
//     this.props.eCobradoresTotal();
//     this.props.eOficinaCobrado();
//     this.props.eOficinaTotal();
//     this.props.eTarjetaCobradosanpedro();
//     this.props.eTarjetaTotalsanpedro();

//     setTimeout(() => {
//       const {
//         eoficinam,
//         eoficinacobm,
//         ecobradoresm,
//         ecobradorescobm,
//         etarjetapm,
//         etarjetacobpm
//       } = this.props;

//       this.setState({
//         eoficina: eoficinam,
//         eoficinacob: eoficinacobm,
//         ecobradores: ecobradoresm,
//         ecobradorescob: ecobradorescobm,
//         etarjetap: etarjetapm,
//         etarjetacobp: etarjetacobpm
//       });
//     }, 400);
//   }

//   imprimir = () => {
//     let contenido = document.getElementById("pm").innerHTML;
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
//       etarjetap,
//       etarjetacobp
//     } = this.state;

//     let acobrar =
//       total1index(ecobradores, 0) + total(etarjetap) + total1index(eoficina, 2);

//     let cobrado =
//       total1index(ecobradorescob, 0) +
//       total(etarjetacobp) +
//       total1index(eoficinacob, 2);

//     let efectividadt = (cobrado * 100) / acobrar;
//     let flag = 60;

//     return (
//       <div className="containes ">
//         <div id="pm">
//           <h1 className="mb-4 text-center">
//             Efectividad de Cobranza San Pedro
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
//             etarjeta={etarjetap}
//             etarjetacob={etarjetacobp}
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
//                   {total1index(ecobradores, 6) +
//                     total(etarjetap) +
//                     total1index(eoficina, 3)}{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {total1indexfichas(ecobradores, 6) +
//                     totalfichas(etarjetap) +
//                     total1indexfichas(eoficina, 3)}
//                 </strong>
//               </div>
//               <div className="col-2">
//                 <strong>
//                   ${" "}
//                   {total1index(ecobradorescob, 6) + total(etarjetacobp)
//                   // + total1index(eoficinacob, 2)
//                   }{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {" "}
//                   {total1indexfichas(ecobradorescob, 6) +
//                     totalfichas(etarjetacobp)
//                   // +
//                   // total1indexfichas(eoficinacob, 2)
//                   }
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
//   etarjetapm: state.efectividad.etarjetap,
//   etarjetacobpm: state.efectividad.etarjetacobp,
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradosanpedro,
//   eTarjetaTotalsanpedro
// })(CobranzaSanPedro);
