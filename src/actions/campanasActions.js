import { AT_W, CREAR_CAMP_AT, ESTADO_CAMP, CAMPANA_OPERADOR } from "./types";

import axios from "axios";

export const atW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/atW`
  );
  dispatch({
    type: AT_W,
    payload: respuesta.data
  });
};


export const crearCampAT = caso => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/campanas/crearcampat`,
    caso
  );
  dispatch({
    type: CREAR_CAMP_AT,
    payload: respuesta.data
  });
};

export const verificarEstadoCamp = contrato => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/estadocamp/${contrato}`
  );
  dispatch({
    type: ESTADO_CAMP,
    payload: respuesta.data
  });
};

export const campanaOperador = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperador/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};