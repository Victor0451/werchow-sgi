import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA
} from "../actions/types";

import axios from "axios";

export const eCobradores = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/ecobradores/${mes}`
  );
  dispatch({
    type: ECOBRADORES,
    payload: respuesta.data
  });
};

export const eOficina = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/eoficina/${mes}`
  );
  dispatch({
    type: EOFICINA,
    payload: respuesta.data
  });
};

export const eTarjetaPalpala = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapalpala/${mes}`
  );
  dispatch({
    type: ETARJETA_L,
    payload: respuesta.data
  });
};

export const eTarjetaPerico = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetaperico/${mes}`
  );
  dispatch({
    type: ETARJETA_R,
    payload: respuesta.data
  });
};

export const eTarjetaSsj = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetassj/${mes}`
  );
  dispatch({
    type: ETARJETA_W,
    payload: respuesta.data
  });
};

export const eTarjetaSanPedro = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetasanpedro/${mes}`
  );
  dispatch({
    type: ETARJETA_P,
    payload: respuesta.data
  });
};

export const ePolicia = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/epolicia/${mes}`
  );
  dispatch({
    type: EPOLICIA,
    payload: respuesta.data
  });
};
