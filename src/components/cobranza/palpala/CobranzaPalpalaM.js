// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradopalpala,
//   eTarjetaTotalpalpala
// } from "../../../actions/efectividadMActions";

// import Eoficina from "../EoficinaM";
// import Ecobradores from "../EcobradoresM";
// import Ebanco from "../EbancoM";

// import {
//   total,
//   total1index,
//   total1indexfichas,
//   total2indexfichas,
//   totalfichas,
//   totalcobrado,
//   totalfichascob,
//   efecparcial,
//   total2index,
//   efectividad2,
//   efectividad
// } from "../funciones";

// class CobranzaPalpalaM extends Component {
//   state = {
//     eoficina: "",
//     eoficinacob: "",
//     ecobradores: "",
//     ecobradorescob: "",
//     etarjetal: "",
//     etarjetacobl: ""
//   };
//   componentDidMount() {
//     this.props.eCobradoresCobrado();
//     this.props.eCobradoresTotal();
//     this.props.eOficinaCobrado();
//     this.props.eOficinaTotal();
//     this.props.eTarjetaCobradopalpala();
//     this.props.eTarjetaTotalpalpala();

//     setTimeout(() => {
//       const {
//         eoficina,
//         eoficinacob,
//         ecobradores,
//         ecobradorescob,
//         etarjetal,
//         etarjetacobl
//       } = this.props;

//       this.setState({
//         eoficina: eoficina,
//         eoficinacob: eoficinacob,
//         ecobradores: ecobradores,
//         ecobradorescob: ecobradorescob,
//         etarjetal: etarjetal,
//         etarjetacobl: etarjetacobl
//       });
//     }, 300);
//   }

//   imprimir = () => {
//     let contenido = document.getElementById("lm").innerHTML;
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
//       etarjetal,
//       etarjetacobl
//     } = this.state;

//     let acobrar =
//       total2index(ecobradores, 1, 2) +
//       total(etarjetal) +
//       total1index(eoficina, 1);

//     let cobrado =
//       total2index(ecobradorescob, 1, 2) +
//       total(etarjetacobl) +
//       total1index(eoficinacob, 1);

//     let efectividadt = (cobrado * 100) / acobrar;
//     let flag = 3;

//     return (
//       <div className="containes ">
//         <div id="lm">
//           <h1 className="mb-4 text-center">Efectividad de Cobranza Palpala</h1>

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
//             etarjeta={etarjetal}
//             etarjetacob={etarjetacobl}
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
//                   {total2index(ecobradores, 1, 2) +
//                     total(etarjetal) +
//                     total1index(eoficina, 1)}{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {total2indexfichas(ecobradores, 1, 2) +
//                     totalfichas(etarjetal) +
//                     total1indexfichas(eoficina, 1)}
//                 </strong>
//               </div>
//               <div className="col-2">
//                 <strong>
//                   ${" "}
//                   {total2index(ecobradorescob, 1, 2) +
//                     total(etarjetacobl) +
//                     total1index(eoficinacob, 1)}{" "}
//                 </strong>
//               </div>
//               <div className="col-1">
//                 <strong>
//                   {" "}
//                   {total2indexfichas(ecobradorescob, 1, 2) +
//                     totalfichas(etarjetacobl) +
//                     total1indexfichas(eoficinacob, 1)}
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
//   eoficina: state.efectividad.eoficina,
//   eoficinacob: state.efectividad.eoficinacob,
//   ecobradores: state.efectividad.ecobradores,
//   ecobradorescob: state.efectividad.ecobradorescob,
//   etarjetal: state.efectividad.etarjetal,
//   etarjetacobl: state.efectividad.etarjetacobl,
//   auth: state.auth,
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, {
//   eCobradoresCobrado,
//   eCobradoresTotal,
//   eOficinaCobrado,
//   eOficinaTotal,
//   eTarjetaCobradopalpala,
//   eTarjetaTotalpalpala
// })(CobranzaPalpalaM);
