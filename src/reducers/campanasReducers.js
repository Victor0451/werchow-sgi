import {
  AT,
  CREAR_CAMP_AT,
  ESTADO_CAMP,
  CAMPANA_OPERADOR,
  UPDATE_ACCION,
  CAMPANA_OPERADOR_TRAB,
  CERRAR_CASO,
  CERRAR_GESTION,
  GET_GESTION_CASO,
  GET_RECUPERACION,
  GET_DEUDA,
  BUSCAR_CASO,
  REC,
  REIN,
  BLANQUEO,
  CAMPANA_OPERADOR_NOTI,
  CAMPANA_OPERADOR_HIST,
  POLICIA,
  AUX,
  BUSCAR_GESTION_CASO,
  BUSCAR_CAMPANAS,
  BUSCAR_CAMPANAS_REC,
  BUSCAR_CAMPANAS_REIN,
  BUSCAR_CAMPANAS_BLAN,
  BUSCAR_CAMPANAS_AUX
} from "../actions/types";

const initialState = {
  campanas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AT:
      return {
        ...state,
        at: action.payload
      };

    case BLANQUEO:
      return {
        ...state,
        blan: action.payload
      };
    case REC:
      return {
        ...state,
        rec: action.payload
      };
    case REIN:
      return {
        ...state,
        rein: action.payload
      };
    case POLICIA:
      return {
        ...state,
        poli: action.payload
      };
    case AUX:
      return {
        ...state,
        aux: action.payload
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

    case CAMPANA_OPERADOR_NOTI:
      return {
        ...state,
        campopnoti: action.payload
      };

    case CAMPANA_OPERADOR_HIST:
      return {
        ...state,
        campophist: action.payload
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

    case BUSCAR_GESTION_CASO:
      return {
        ...state,
        busgestcaso: action.payload
      };

    case BUSCAR_CAMPANAS:
      return {
        ...state,
        listcamp: action.payload
      };

    case BUSCAR_CAMPANAS_REC:
      return {
        ...state,
        listcamprec: action.payload
      };

    case BUSCAR_CAMPANAS_REIN:
      return {
        ...state,
        listcamprein: action.payload
      };
    case BUSCAR_CAMPANAS_BLAN:
      return {
        ...state,
        listcampblan: action.payload
      };
    case BUSCAR_CAMPANAS_AUX:
      return {
        ...state,
        listcampaux: action.payload
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

    case CERRAR_GESTION:
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
