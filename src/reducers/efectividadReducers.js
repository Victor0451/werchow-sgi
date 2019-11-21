import {
  ECOBRADORES,
  EOFICINA,
  EOFICINA_COBRADO,
  ECOBRADORES_COBRADO,
  ETARJETA_W,
  ETARJETA_COBRADO_W,
  ETARJETA_L,
  ETARJETA_COBRADO_L,
  ETARJETA_R,
  ETARJETA_COBRADO_R,
  ETARJETA_P,
  ETARJETA_COBRADO_P
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

    case EOFICINA_COBRADO:
      return {
        ...state,
        eoficinacob: action.payload
      };

    case ECOBRADORES:
      return {
        ...state,
        ecobradores: action.payload
      };

    case ECOBRADORES_COBRADO:
      return {
        ...state,
        ecobradorescob: action.payload
      };

    case ETARJETA_W:
      return {
        ...state,
        etarjetaw: action.payload
      };

    case ETARJETA_COBRADO_W:
      return {
        ...state,
        etarjetacobw: action.payload
      };

    case ETARJETA_L:
      return {
        ...state,
        etarjetal: action.payload
      };

    case ETARJETA_COBRADO_L:
      return {
        ...state,
        etarjetacobl: action.payload
      };
    case ETARJETA_R:
      return {
        ...state,
        etarjetar: action.payload
      };

    case ETARJETA_COBRADO_R:
      return {
        ...state,
        etarjetacobr: action.payload
      };
    case ETARJETA_P:
      return {
        ...state,
        etarjetap: action.payload
      };

    case ETARJETA_COBRADO_P:
      return {
        ...state,
        etarjetacobp: action.payload
      };

    default:
      return state;
  }
}
