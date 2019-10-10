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

export const llamadasIncoclusas = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/llamin/${operador}`
  );
  dispatch({
    type: LLAMADAS_INCONCLUSAS,
    payload: respuesta.data
  });
};

export const compromisoPago = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/compago/${operador}`
  );
  dispatch({
    type: COMPROMISO_PAGO,
    payload: respuesta.data
  });
};

export const noPaga = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/nopaga/${operador}`
  );
  dispatch({
    type: NO_PAGA,
    payload: respuesta.data
  });
};

export const cuotaAlDia = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/cuotadia/${operador}`
  );
  dispatch({
    type: CUOTA_DIA,
    payload: respuesta.data
  });
};

export const notificacion = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/notificacion/${operador}`
  );


  dispatch({
    type: NOTIFICACION,
    payload: respuesta.data
  });
};

export const carteraRoja = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/carteraroja/${operador}`
  );
  dispatch({
    type: CARTERA_ROJA,
    payload: respuesta.data
  });
};

export const socioFallecido = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/sociofallecido/${operador}`
  );
  dispatch({
    type: SOCIO_FALLECIDO,
    payload: respuesta.data
  });
};

export const casosAbiertos = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/casosabiertos/${operador}`
  );
  dispatch({
    type: CASOS_ABIERTOS,
    payload: respuesta.data
  });
};

export const casosCerrados = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/casoscerrados/${operador}`
  );
  dispatch({
    type: CASOS_CERRADOS,
    payload: respuesta.data
  });
};

export const casosConAccion = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/casosconaccion/${operador}`
  );
  dispatch({
    type: CASOS_CON_ACCION,
    payload: respuesta.data
  });
};

export const casosSinAccion = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/estadistica/werchow/casossinaccion/${operador}`
  );
  dispatch({
    type: CASOS_SIN_ACCION,
    payload: respuesta.data
  });
};
