import React, { Component } from "react";

import {
  resPalCob,
  resPerCob,
  resSpCob,
  resSsjCob,
  eOficina,
  resPalTar,
  resPerTar,
  resSpTar,
  resSsjTar,
  resPalBan,
  resPerBan,
  resSpBan,
  resSsjBan,
  resPalPol,
  resPerPol,
  resSpPol,
  resSsjPol,
  resPalOfi,
  resPerOfi,
  resSpOfi,
  resSsjOfi,
  resPalConv,
  resPerConv,
  resSpConv,
  resSsjConv
} from "../../actions/efectividadActions";

import {
  resPalCobM,
  resPerCobM,
  resSpCobM,
  resSsjCobM,
  resPalTarM,
  resPerTarM,
  resSpTarM,
  resSsjTarM,
  resPalOfiM,
  resPerOfiM,
  resSpOfiM,
  resSsjOfiM
} from "../../actions/efectividadMActions";

import { connect } from "react-redux";
import ResumenTabla from "./ResumenTabla";

class Resumen extends Component {
  state = {
    mes: "",
    ano: "",
    respalcob: {},
    respercob: {},
    resspcob: {},
    resssjcob: {},
    respalcobm: {},
    respercobm: {},
    resspcobm: {},
    resssjcobm: {},
    eoficina: {},
    etarjetal: {},
    respaltar: {},
    respertar: {},
    ressptar: {},
    resssjtar: {},
    respaltarm: {},
    respertarm: {},
    ressptarm: {},
    resssjtarm: {},
    respalban: {},
    resperban: {},
    resspban: {},
    resssjban: {},
    respalpol: {},
    resperpol: {},
    ressppol: {},
    resssjpol: {},
    respalofi: {},
    resperofi: {},
    resspofi: {},
    resssjofi: {},
    respalofim: {},
    resperofim: {},
    resspofim: {},
    resssjofim: {},
    respalconv: {},
    resperconv: {},
    resspconv: {},
    resssjconv: {}
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value.value });
  };

  buscar = () => {
    const { mes, ano } = this.state;

    this.props.resPalCob(mes, ano);
    this.props.resPerCob(mes, ano);
    this.props.resSpCob(mes, ano);
    this.props.resSsjCob(mes, ano);
    this.props.resPalCobM(mes, ano);
    this.props.resPerCobM(mes, ano);
    this.props.resSpCobM(mes, ano);
    this.props.resSsjCobM(mes, ano);
    this.props.resPalTar(mes, ano);
    this.props.resPerTar(mes, ano);
    this.props.resSpTar(mes, ano);
    this.props.resSsjTar(mes, ano);
    this.props.resPalTarM(mes, ano);
    this.props.resPerTarM(mes, ano);
    this.props.resSpTarM(mes, ano);
    this.props.resSsjTarM(mes, ano);
    this.props.resPalBan(mes, ano);
    this.props.resPerBan(mes, ano);
    this.props.resSpBan(mes, ano);
    this.props.resSsjBan(mes, ano);
    this.props.resPalPol(mes, ano);
    this.props.resPerPol(mes, ano);
    this.props.resSpPol(mes, ano);
    this.props.resSsjPol(mes, ano);
    this.props.resPalOfi(mes, ano);
    this.props.resPerOfi(mes, ano);
    this.props.resSpOfi(mes, ano);
    this.props.resSsjOfi(mes, ano);
    this.props.resPalOfiM(mes, ano);
    this.props.resPerOfiM(mes, ano);
    this.props.resSpOfiM(mes, ano);
    this.props.resSsjOfiM(mes, ano);
    // this.props.resPalConv(mes, ano);
    // this.props.resPerConv(mes, ano);
    // this.props.resSpConv(mes, ano);
    // this.props.resSsjConv(mes, ano);

    setTimeout(() => {
      const {
        respalcob,
        respercob,
        resspcob,
        resssjcob,
        respalcobm,
        respercobm,
        resspcobm,
        resssjcobm,
        eoficina,
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
        resssjofim
        // respalconv,
        // resperconv,
        // resspconv,
        // resssjconv
      } = this.props;

      this.setState({
        respalcob: respalcob,
        respercob: respercob,
        resspcob: resspcob,
        resssjcob: resssjcob,
        respalcobm: respalcobm,
        respercobm: respercobm,
        resspcobm: resspcobm,
        resssjcobm: resssjcobm,
        eoficina: eoficina,
        respaltar: respaltar,
        respertar: respertar,
        ressptar: ressptar,
        resssjtar: resssjtar,
        respalban: respalban,
        resperban: resperban,
        resspban: resspban,
        resssjban: resssjban,
        respaltarm: respaltarm,
        respertarm: respertarm,
        ressptarm: ressptarm,
        resssjtarm: resssjtarm,
        respalpol: respalpol,
        resperpol: resperpol,
        ressppol: ressppol,
        resssjpol: resssjpol,
        respalofi: respalofi,
        resperofi: resperofi,
        resspofi: resspofi,
        resssjofi: resssjofi,
        respalofim: respalofim,
        resperofim: resperofim,
        resspofim: resspofim,
        resssjofim: resssjofim
        // respalconv: respalconv,
        // resperconv: resperconv,
        // resspconv: resspconv,
        // resssjconv: resssjconv
      });
    }, 200);
  };

  efecmediopago = (array1, index) => {
    let total = 0;
    let cobrado = 0;

    if (array1) {
      for (let i = 0; i < array1.length; i++) {
        total = array1[index].total;
      }

      for (let i = 0; i < array1.length; i++) {
        cobrado = array1[index].cobrado;
      }

      let efectividad = (cobrado * 100) / total;
      let resultado = efectividad.toFixed(2);

      if (resultado === "NaN") {
        resultado = 0.00;
        return resultado;
      } else {
        return resultado;
      }
    }
  };

  efecsucursal = (array1, array2, array3, array4, array5, array6) => {
    let arrayconcat = [];

    let arraytotal = arrayconcat.concat(
      array1,
      array2,
      array3,
      array4,
      array5
      //array6
    );

    let total = 0;
    let cobrado = 0;

    if (arraytotal) {
      for (let i = 0; i < arraytotal.length; i++) {
        total += parseInt(arraytotal[i].total);
      }

      for (let i = 0; i < arraytotal.length; i++) {
        cobrado += parseInt(arraytotal[i].cobrado);
      }

      console.log(total, cobrado);

      let efectividad = (cobrado * 100) / total;
      let resultado = efectividad.toFixed(2);

      if (resultado === "NaN") {
        resultado = 0.00;
        return resultado;
      } else {
        return resultado;
      }
    }
  };

  efecsucursalm = (array1, array2, array3) => {
    let arrayconcat = [];

    let arraytotal = arrayconcat.concat(array1, array2);

    let total = 0;
    let cobrado = 0;

    if (arraytotal) {
      for (let i = 0; i < arraytotal.length; i++) {
        total += parseInt(arraytotal[i].total);
      }

      for (let i = 0; i < arraytotal.length; i++) {
        cobrado += parseInt(arraytotal[i].cobrado);
      }

      let efectividad = (cobrado * 100) / total;
      let resultado = efectividad.toFixed(2);

      if (resultado === "NaN") {
        resultado = 0.00;
        return resultado;
      } else {
        return resultado;
      }
    }
  };

  efecempresam = (
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
  ) => {
    let arrayconcat = [];

    let arraytotal = arrayconcat.concat(
      respalcobm,
      respercobm,
      resspcobm,
      resssjcobm,
      respaltarm,
      respertarm,
      // ressptarm,
      resssjtarm,
      respalofim,
      resperofim,
      resspofim,
      resssjofim
    );

    let total = 0;
    let cobrado = 0;

    if (arraytotal) {
      for (let i = 0; i < arraytotal.length; i++) {
        total += parseInt(arraytotal[i].total);
      }

      for (let i = 0; i < arraytotal.length; i++) {
        cobrado += parseInt(arraytotal[i].cobrado);
      }

      let efectividad = (cobrado * 100) / total;
      let resultado = efectividad.toFixed(2);

      return resultado;
    }
  };

  efecempresa = (
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
  ) => {
    let arrayconcat = [];

    let arraytotal = arrayconcat.concat(
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
    );

    let total = 0;
    let cobrado = 0;

    if (arraytotal) {
      for (let i = 0; i < arraytotal.length; i++) {
        total += parseInt(arraytotal[i].total);
      }

      for (let i = 0; i < arraytotal.length; i++) {
        cobrado += parseInt(arraytotal[i].cobrado);
      }

      let efectividad = (cobrado * 100) / total;
      let resultado = efectividad.toFixed(2);

      return resultado;
    }
  };

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
      ano
    } = this.state;
    console.log(this.props);
    return (
      <div>
        <ResumenTabla
          respalcob={respalcob}
          respercob={respercob}
          resspcob={resspcob}
          resssjcob={resssjcob}
          respalcobm={respalcobm}
          respercobm={respercobm}
          resspcobm={resspcobm}
          resssjcobm={resssjcobm}
          respaltar={respaltar}
          respertar={respertar}
          ressptar={ressptar}
          resssjtar={resssjtar}
          respalban={respalban}
          resperban={resperban}
          resspban={resspban}
          resssjban={resssjban}
          respaltarm={respaltarm}
          respertarm={respertarm}
          ressptarm={ressptarm}
          resssjtarm={resssjtarm}
          respalpol={respalpol}
          resperpol={resperpol}
          ressppol={ressppol}
          resssjpol={resssjpol}
          respalofi={respalofi}
          resperofi={resperofi}
          resspofi={resspofi}
          resssjofi={resssjofi}
          respalofim={respalofim}
          resperofim={resperofim}
          resspofim={resspofim}
          resssjofim={resssjofim}
          respalconv={respalconv}
          resperconv={resperconv}
          resspconv={resspconv}
          resssjconv={resssjconv}
          mes={mes}
          ano={ano}
          handleChange={this.handleChange}
          efecempresa={this.efecempresa}
          efecempresam={this.efecempresam}
          efecmediopago={this.efecmediopago}
          efecsucursal={this.efecsucursal}
          efecsucursalm={this.efecsucursalm}
          buscar={this.buscar}
          marca={this.props.respalcob}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  respalcob: state.efectividad.respalcob,
  respercob: state.efectividad.respercob,
  resspcob: state.efectividad.resspcob,
  resssjcob: state.efectividad.resssjcob,
  respalcobm: state.efectividad.respalcobm,
  respercobm: state.efectividad.respercobm,
  resspcobm: state.efectividad.resspcobm,
  resssjcobm: state.efectividad.resssjcobm,
  eoficina: state.efectividad.eoficina,
  respaltar: state.efectividad.respaltar,
  respertar: state.efectividad.respertar,
  ressptar: state.efectividad.ressptar,
  resssjtar: state.efectividad.resssjtar,
  respalban: state.efectividad.respalban,
  resperban: state.efectividad.resperban,
  resspban: state.efectividad.resspban,
  resssjban: state.efectividad.resssjban,
  respaltarm: state.efectividad.respaltarm,
  respertarm: state.efectividad.respertarm,
  ressptarm: state.efectividad.ressptarm,
  resssjtarm: state.efectividad.resssjtarm,
  respalpol: state.efectividad.respalpol,
  resperpol: state.efectividad.resperpol,
  ressppol: state.efectividad.ressppol,
  resssjpol: state.efectividad.resssjpol,
  respalofi: state.efectividad.respalofi,
  resperofi: state.efectividad.resperofi,
  resspofi: state.efectividad.resspofi,
  resssjofi: state.efectividad.resssjofi,
  respalofim: state.efectividad.respalofim,
  resperofim: state.efectividad.resperofim,
  resspofim: state.efectividad.resspofim,
  resssjofim: state.efectividad.resssjofim,
  respalconv: state.efectividad.respalconv,
  resperconv: state.efectividad.resperconv,
  resspconv: state.efectividad.resspconv,
  resssjconv: state.efectividad.resssjconv,
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  resPalCob,
  resPerCob,
  resSpCob,
  resSsjCob,
  eOficina,
  resPalTar,
  resPerTar,
  resSpTar,
  resSsjTar,
  resPalBan,
  resPerBan,
  resSpBan,
  resSsjBan,
  resPalPol,
  resPerPol,
  resSpPol,
  resSsjPol,
  resPalOfi,
  resPerOfi,
  resSpOfi,
  resSsjOfi,
  resPalConv,
  resPerConv,
  resSpConv,
  resSsjConv,
  resPalCobM,
  resPerCobM,
  resSpCobM,
  resSsjCobM,
  resPalTarM,
  resPerTarM,
  resSpTarM,
  resSsjTarM,
  resPalOfiM,
  resPerOfiM,
  resSpOfiM,
  resSsjOfiM
})(Resumen);
