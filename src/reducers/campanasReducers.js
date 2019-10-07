import {
  AT_W,
  CREAR_CAMP_AT,
  ESTADO_CAMP,
  CAMPANA_OPERADOR,
  UPDATE_ACCION,
  CAMPANA_OPERADOR_TRAB,
  CERRAR_CASO,
  GET_GESTION_CASO,
  GET_RECUPERACION,
  GET_DEUDA,
  BUSCAR_CASO,
  REC_W
} from "../actions/types";

const initialState = {
  campanas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AT_W:
      return {
        ...state,
        atw: action.payload
      };
    case REC_W:
      return {
        ...state,
        recw: action.payload
      };
    case ESTADO_CAMP:
      return {
        ...state,
        estado: action.payload
      };
    case CAMPANA_OPERADOR:
      return {
        ...state,
        campop: action.payload
      };

    case CAMPANA_OPERADOR_TRAB:
      return {
        ...state,
        campoptrab: action.payload
      };

    case CREAR_CAMP_AT:
      return {
        ...state,
        campanas: [...state.campanas, action.payload]
      };

    case GET_GESTION_CASO:
      return {
        ...state,
        getcaso: action.payload
      };

    case GET_RECUPERACION:
      return {
        ...state,
        getrec: action.payload
      };

    case BUSCAR_CASO:
      return {
        ...state,
        buscaso: action.payload
      };

    case GET_DEUDA:
      return {
        ...state,
        getdeuda: action.payload
      };

    case UPDATE_ACCION:
      return {
        ...state,
        campanas: state.campanas.map(campana =>
          campana.CONTRATO === action.payload.id
            ? (campana = action.payload)
            : campana
        )
      };
    case CERRAR_CASO:
      return {
        ...state,
        campanas: state.campanas.map(campana =>
          campana.CONTRATO === action.payload.id
            ? (campana = action.payload)
            : campana
        )
      };
    default:
      return state;
  }
}
