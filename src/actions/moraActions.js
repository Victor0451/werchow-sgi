import {
  MCOBRADORES,  
  MOFICINA,
  MTARJETA,
  MBANCONV
} from "./types";
import axios from "axios";

export const mCobradores = (mes) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mcobradores/${mes}`
  );
  dispatch({
    type: MCOBRADORES,
    payload: respuesta.data
  });
};

export const mOficina = (mes) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/moficina/${mes}`
  );
  dispatch({
    type: MOFICINA,
    payload: respuesta.data
  });
};

export const mTarjeta = (mes) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mtarjetas/${mes}`
  );
  dispatch({
    type: MTARJETA,
    payload: respuesta.data
  });
};

export const mBanConv = (mes) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mbanconv/${mes}`
  );
  dispatch({
    type: MBANCONV,
    payload: respuesta.data
  });
};
