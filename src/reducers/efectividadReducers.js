import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA,
  ECONVENIOS,
  EBANCO
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

    default:
      return state;
  }
}
