import { CONSULTA_VENTAS, CONSULTA_VENTASM } from "./types";
import axios from "axios";
//import toastr from "../utils/toastr";

export const consultaVentas = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/ventas/consultas/consultaventas`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: CONSULTA_VENTAS,
        payload: res.data
      })
    );
};

export const consultaVentasM = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/ventas/consultas/consultaventasm`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: CONSULTA_VENTASM,
        payload: res.data
      })
    );
};
