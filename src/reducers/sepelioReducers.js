import {
  NUEVA_CAJA,
  NUEVO_INGRESO,
  LISTADO_CAJAS,
  CAJA,
  NUEVO_GASTO,
  UPDATE_GASTO,
  LISTADO_GASTOS,
  LISTADO_INGRESOS,
  GASTO,
  UPDATE_TOTALES,
  ELIMINAR_GASTO,
  ELIMINAR_CAJA,
  ELIMINAR_INGRESO
} from "../actions/types";

const initialState = {
  sepelio: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LISTADO_CAJAS:
      return {
        ...state,
        listadocajas: action.payload
      };

    case CAJA:
      return {
        ...state,
        caja: action.payload
      };

    case GASTO:
      return {
        ...state,
        gasto: action.payload
      };

    case NUEVA_CAJA:
      return {
        ...state,
        nuevacaja: action.payload
      };

    case NUEVO_GASTO:
      return {
        ...state,
        nuevogasto: action.payload
      };

    case NUEVO_INGRESO:
      return {
        ...state,
        nuevoingreso: action.payload
      };

    case UPDATE_GASTO:
      return {
        ...state,
        sepelio: state.sepelio.map(gasto =>
          gasto.idgastos === action.payload.idgastos
            ? (gasto = action.payload)
            : gasto
        )
      };

    case UPDATE_TOTALES:
      return {
        ...state,
        sepelio: state.sepelio.map(caja =>
          caja.idcaja === action.payload.idcaja ? (caja = action.payload) : caja
        )
      };

    case LISTADO_GASTOS:
      return {
        ...state,
        listadogastos: action.payload
      };

    case LISTADO_INGRESOS:
      return {
        ...state,
        listadoingresos: action.payload
      };

    case ELIMINAR_GASTO:
      return {
        ...state,
        sepelio: state.sepelio.filter(gasto => gasto.id !== action.payload)
      };

    case ELIMINAR_INGRESO:
      return {
        ...state,
        sepelio: state.sepelio.filter(gasto => gasto.id !== action.payload)
      };

    case ELIMINAR_CAJA:
      return {
        ...state,
        sepelio: state.sepelio.filter(caja => caja.id !== action.payload)
      };

    default:
      return state;
  }
}
