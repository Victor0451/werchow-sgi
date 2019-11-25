import {
  MCOBRADORES,  
  MOFICINA,
  MTARJETA,
  MBANCONV
} from "./types";
import axios from "axios";

export const mCobradores = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mcobradores`
  );
  dispatch({
    type: MCOBRADORES,
    payload: respuesta.data
  });
};

export const mOficina = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/moficina`
  );
  dispatch({
    type: MOFICINA,
    payload: respuesta.data
  });
};

export const mTarjeta = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mtarjetas`
  );
  dispatch({
    type: MTARJETA,
    payload: respuesta.data
  });
};

export const mBanConv = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moraw/mbanconv`
  );
  dispatch({
    type: MBANCONV,
    payload: respuesta.data
  });
};
