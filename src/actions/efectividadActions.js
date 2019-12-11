import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA,
  ECONVENIOS,
  EBANCO
} from "../actions/types";

import axios from "axios";

export const eCobradores = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ecobradores/${mes}`
  );
  dispatch({
    type: ECOBRADORES,
    payload: respuesta.data
  });
};

export const eOficina = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/eoficina/${mes}`
  );
  dispatch({
    type: EOFICINA,
    payload: respuesta.data
  });
};

export const eTarjetaPalpala = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapalpala/${mes}`
  );
  dispatch({
    type: ETARJETA_L,
    payload: respuesta.data
  });
};

export const eTarjetaPerico = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetaperico/${mes}`
  );
  dispatch({
    type: ETARJETA_R,
    payload: respuesta.data
  });
};

export const eTarjetaSsj = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetassj/${mes}`
  );
  dispatch({
    type: ETARJETA_W,
    payload: respuesta.data
  });
};

export const eTarjetaSanPedro = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetasanpedro/${mes}`
  );
  dispatch({
    type: ETARJETA_P,
    payload: respuesta.data
  });
};

export const ePolicia = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epolicia/${mes}`
  );
  dispatch({
    type: EPOLICIA,
    payload: respuesta.data
  });
};

export const eConvenios = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/econvenios/${mes}`
  );
  dispatch({
    type: ECONVENIOS,
    payload: respuesta.data
  });
};

export const eBanco = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ebanco/${mes}`
  );
  dispatch({
    type: EBANCO,
    payload: respuesta.data
  });
};
