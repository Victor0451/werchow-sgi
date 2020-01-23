import { CONSULTA_VENTAS, CONSULTA_VENTASM } from "../actions/types";

const initialState = {
  ventas: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSULTA_VENTAS:
      return {
        ...state,
        listadoventas: action.payload
      };
    case CONSULTA_VENTASM:
      return {
        ...state,
        listadoventasm: action.payload
      };

    default:
      return state;
  }
}
