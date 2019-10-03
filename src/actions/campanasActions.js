import {
  AT_W,
  CREAR_CAMP_AT,
  ESTADO_CAMP,
  CAMPANA_OPERADOR,
  GESTION_CASO,
  UPDATE_ACCION,
  CAMPANA_OPERADOR_TRAB,
  CERRAR_CASO,
  GET_GESTION_CASO,
  GET_RECUPERACION,
  GET_DEUDA
} from "./types";

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

export const campanaOperadorTrab = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrab/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const gestionCaso = datos => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/campanas/gestioncaso`,
    datos
  );
  dispatch({
    type: GESTION_CASO,
    payload: respuesta.data
  });
};

export const updateAccion = id => async dispatch => {
  const respuesta = await axios.put(
    `http://190.231.32.232:5002/api/sgi/campanas/updateaccion/${id}`
  );
  dispatch({
    type: UPDATE_ACCION,
    payload: respuesta.data
  });
};

export const cerrarCaso = id => async dispatch => {
  const respuesta = await axios.put(
    `http://190.231.32.232:5002/api/sgi/campanas/cerrarcaso/${id}`
  );
  dispatch({
    type: CERRAR_CASO,
    payload: respuesta.data
  });
};

export const getGestionCaso = id => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/getgestioncaso/${id}`
  );
  dispatch({
    type: GET_GESTION_CASO,
    payload: respuesta.data
  });
}
  export const getRecuperacion = id => async dispatch => {
    const respuesta = await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/recuperacion/${id}`
    );
    dispatch({
      type: GET_RECUPERACION,
      payload: respuesta.data
    });

  } 

  export const getDeuda = id => async dispatch => {
    const respuesta = await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/deuda/${id}`
    );
    dispatch({
      type: GET_DEUDA,
      payload: respuesta.data
    });

  } 
