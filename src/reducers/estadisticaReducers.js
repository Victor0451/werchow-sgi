import {
  LLAMADAS_INCONCLUSAS,
  COMPROMISO_PAGO,
  NO_PAGA,
  CUOTA_DIA,
  NOTIFICACION,
  CARTERA_ROJA,
  SOCIO_FALLECIDO,
  CASOS_ABIERTOS,
  CASOS_CERRADOS,
  CASOS_CON_ACCION,
  CASOS_SIN_ACCION
} from "../actions/types";

const initialState = {
  estadistica: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LLAMADAS_INCONCLUSAS:
      return {
        ...state,
        llamin: action.payload
      };

    case COMPROMISO_PAGO:
      return {
        ...state,
        compago: action.payload
      };

    case NO_PAGA:
      return {
        ...state,
        nopaga: action.payload
      };

    case CUOTA_DIA:
      return {
        ...state,
        cuotadia: action.payload
      };

    case NOTIFICACION:
      return {
        ...state,
        notif: action.payload
      };

    case CARTERA_ROJA:
      return {
        ...state,
        carteraroja: action.payload
      };

    case SOCIO_FALLECIDO:
      return {
        ...state,
        sociofallecido: action.payload
      };

    case CASOS_ABIERTOS:
      return {
        ...state,
        casosabiertos: action.payload
      };

    case CASOS_CERRADOS:
      return {
        ...state,
        casoscerrados: action.payload
      };

    case CASOS_CON_ACCION:
      return {
        ...state,
        casosconaccion: action.payload
      };

    case CASOS_SIN_ACCION:
      return {
        ...state,
        casossinaccion: action.payload
      };
    default:
      return state;
  }
}
