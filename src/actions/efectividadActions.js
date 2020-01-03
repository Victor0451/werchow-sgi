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

export const eCobradores = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ecobradores`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ECOBRADORES,
    payload: respuesta.data
  });
};

export const eOficina = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/eoficina`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: EOFICINA,
    payload: respuesta.data
  });
};

export const eTarjetaPalpala = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapalpala`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ETARJETA_L,
    payload: respuesta.data
  });
};

export const eTarjetaPerico = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetaperico`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ETARJETA_R,
    payload: respuesta.data
  });
};

export const eTarjetaSsj = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetassj`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ETARJETA_W,
    payload: respuesta.data
  });
};

export const eTarjetaSanPedro = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetasanpedro`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ETARJETA_P,
    payload: respuesta.data
  });
};

export const ePolicia = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epolicia`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: EPOLICIA,
    payload: respuesta.data
  });
};

export const eConvenios = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/econvenios`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: ECONVENIOS,
    payload: respuesta.data
  });
};

export const eBanco = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ebanco`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: EBANCO,
    payload: respuesta.data
  });
};
