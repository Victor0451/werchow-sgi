import axios from "axios";
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
} from "./types";

export const llamadasIncoclusasM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/llamin/${operador}`
  );
  dispatch({
    type: LLAMADAS_INCONCLUSAS,
    payload: respuesta.data
  });
};

export const compromisoPagoM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/compago/${operador}`
  );
  dispatch({
    type: COMPROMISO_PAGO,
    payload: respuesta.data
  });
};

export const noPagaM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/nopaga/${operador}`
  );
  dispatch({
    type: NO_PAGA,
    payload: respuesta.data
  });
};

export const cuotaAlDiaM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/cuotadia/${operador}`
  );
  dispatch({
    type: CUOTA_DIA,
    payload: respuesta.data
  });
};

export const notificacionM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/notificacion/${operador}`
  );

  dispatch({
    type: NOTIFICACION,
    payload: respuesta.data
  });
};

export const carteraRojaM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/carteraroja/${operador}`
  );
  dispatch({
    type: CARTERA_ROJA,
    payload: respuesta.data
  });
};

export const socioFallecidoM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/sociofallecido/${operador}`
  );
  dispatch({
    type: SOCIO_FALLECIDO,
    payload: respuesta.data
  });
};

export const casosAbiertosM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/casosabiertos/${operador}`
  );
  dispatch({
    type: CASOS_ABIERTOS,
    payload: respuesta.data
  });
};

export const casosCerradosM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/casoscerrados/${operador}`
  );
  dispatch({
    type: CASOS_CERRADOS,
    payload: respuesta.data
  });
};

export const casosConAccionM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/casosconaccion/${operador}`
  );
  dispatch({
    type: CASOS_CON_ACCION,
    payload: respuesta.data
  });
};

export const casosSinAccionM = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/mutual/casossinaccion/${operador}`
  );
  dispatch({
    type: CASOS_SIN_ACCION,
    payload: respuesta.data
  });
};
