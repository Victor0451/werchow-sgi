import {
  AT_W,
  CREAR_CAMP_AT,
  ESTADO_CAMP,
  CAMPANA_OPERADOR
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
    case CREAR_CAMP_AT:
      return {
        ...state,
        campanas: [...state.campanas, action.payload]
      };
    default:
      return state;
  }
}
