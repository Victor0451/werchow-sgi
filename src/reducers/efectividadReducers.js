import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA,
  ECONVENIOS,
  EBANCO,
  RESPALCOB,
  RESPERCOB,
  RESSPCOB,
  RESSSJCOB,
  RESPALTAR,
  RESPERTAR,
  RESSPTAR,
  RESSSJTAR,
  RESPALBAN,
  RESPERBAN,
  RESSPBAN,
  RESSSJBAN,
  RESPALPOL,
  RESPERPOL,
  RESSPPOL,
  RESSSJPOL,
  RESPALOFI,
  RESPEROFI,
  RESSPOFI,
  RESSSJOFI,
  RESPALCONV,
  RESPERCONV,
  RESSPCONV,
  RESSSJCONV,
  RESPALCOBM,
  RESPERCOBM,
  RESSPCOBM,
  RESSSJCOBM,
  RESPALTARM,
  RESPERTARM,
  RESSPTARM,
  RESSSJTARM,
  RESPALOFIM,
  RESPEROFIM,
  RESSPOFIM,
  RESSSJOFIM
} from "../actions/types";

const initialState = {
  efectividad: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EOFICINA:
      return {
        ...state,
        eoficina: action.payload
      };

    case ECOBRADORES:
      return {
        ...state,
        ecobradores: action.payload
      };

    case ETARJETA_W:
      return {
        ...state,
        etarjetaw: action.payload
      };

    case ETARJETA_L:
      return {
        ...state,
        etarjetal: action.payload
      };

    case ETARJETA_R:
      return {
        ...state,
        etarjetar: action.payload
      };

    case ETARJETA_P:
      return {
        ...state,
        etarjetap: action.payload
      };

    case EPOLICIA:
      return {
        ...state,
        epolicia: action.payload
      };

    case ECONVENIOS:
      return {
        ...state,
        econvenio: action.payload
      };
    case EBANCO:
      return {
        ...state,
        ebanco: action.payload
      };
    case RESPALCOB:
      return {
        ...state,
        respalcob: action.payload
      };
    case RESPERCOB:
      return {
        ...state,
        respercob: action.payload
      };
    case RESSPCOB:
      return {
        ...state,
        resspcob: action.payload
      };
    case RESSSJCOB:
      return {
        ...state,
        resssjcob: action.payload
      };

    case RESPALCOBM:
      return {
        ...state,
        respalcobm: action.payload
      };
    case RESPERCOBM:
      return {
        ...state,
        respercobm: action.payload
      };
    case RESSPCOBM:
      return {
        ...state,
        resspcobm: action.payload
      };
    case RESSSJCOBM:
      return {
        ...state,
        resssjcobm: action.payload
      };

    case RESPALOFI:
      return {
        ...state,
        respalofi: action.payload
      };
    case RESPEROFI:
      return {
        ...state,
        resperofi: action.payload
      };
    case RESSPOFI:
      return {
        ...state,
        resspofi: action.payload
      };
    case RESSSJOFI:
      return {
        ...state,
        resssjofi: action.payload
      };

    case RESPALOFIM:
      return {
        ...state,
        respalofim: action.payload
      };
    case RESPEROFIM:
      return {
        ...state,
        resperofim: action.payload
      };
    case RESSPOFIM:
      return {
        ...state,
        resspofim: action.payload
      };
    case RESSSJOFIM:
      return {
        ...state,
        resssjofim: action.payload
      };

    case RESPALTAR:
      return {
        ...state,
        respaltar: action.payload
      };

    case RESPERTAR:
      return {
        ...state,
        respertar: action.payload
      };
    case RESSPTAR:
      return {
        ...state,
        ressptar: action.payload
      };

    case RESSSJTAR:
      return {
        ...state,
        resssjtar: action.payload
      };

    case RESPALTARM:
      return {
        ...state,
        respaltarm: action.payload
      };

    case RESPERTARM:
      return {
        ...state,
        respertarm: action.payload
      };
    case RESSPTARM:
      return {
        ...state,
        ressptarm: action.payload
      };

    case RESSSJTARM:
      return {
        ...state,
        resssjtarm: action.payload
      };

    case RESPALBAN:
      return {
        ...state,
        respalban: action.payload
      };

    case RESPERBAN:
      return {
        ...state,
        resperban: action.payload
      };
    case RESSPBAN:
      return {
        ...state,
        resspban: action.payload
      };

    case RESSSJBAN:
      return {
        ...state,
        resssjban: action.payload
      };

    case RESPALPOL:
      return {
        ...state,
        respalpol: action.payload
      };

    case RESPERPOL:
      return {
        ...state,
        resperpol: action.payload
      };
    case RESSPPOL:
      return {
        ...state,
        ressppol: action.payload
      };

    case RESSSJPOL:
      return {
        ...state,
        resssjpol: action.payload
      };

    case RESPALCONV:
      return {
        ...state,
        respalconv: action.payload
      };

    case RESPERCONV:
      return {
        ...state,
        resperconv: action.payload
      };
    case RESSPCONV:
      return {
        ...state,
        resspconv: action.payload
      };

    case RESSSJCONV:
      return {
        ...state,
        resssjconv: action.payload
      };

    default:
      return state;
  }
}
