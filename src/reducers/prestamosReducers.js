import {
  CONSULTAR_FICHA,
  ALTA_PRESTAMO,
  LISTADO_PRESTAMOS,
  PRESTAMOR_POR_OP,
  PRESTAMOR_POR_ESTADO,
  APROBAR_PRESTAMOS
} from "../actions/types";

const initialState = {
  prestamos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONSULTAR_FICHA:
      return {
        ...state,
        ficha: action.payload
      };

    case ALTA_PRESTAMO:
      return {
        ...state,
        pretamo: action.payload
      };

    case LISTADO_PRESTAMOS:
      return {
        ...state,
        listado: action.payload
      };

    case PRESTAMOR_POR_OP:
      return {
        ...state,
        prestporop: action.payload
      };

    case PRESTAMOR_POR_ESTADO:
      return {
        ...state,
        prestporestado: action.payload
      };

    case APROBAR_PRESTAMOS:
      return {
        ...state,
        prestamos: state.prestamos.map(prestamo =>
          prestamo.ptm_id === action.payload.ptm_id
            ? (prestamo = action.payload)
            : prestamo
        )
      };

    default:
      return state;
  }
}
