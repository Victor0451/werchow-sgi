import { MCOBRADORES, MOFICINA, MTARJETA, MBANCONV } from "./types";
import axios from "axios";

export const mCobradores = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moram/mcobradores/${mes}`
  );
  dispatch({
    type: MCOBRADORES,
    payload: respuesta.data
  });
};

export const mOficina = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moram/moficina/${mes}`
  );
  dispatch({
    type: MOFICINA,
    payload: respuesta.data
  });
};

export const mTarjeta = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moram/mtarjetas/${mes}`
  );
  dispatch({
    type: MTARJETA,
    payload: respuesta.data
  });
};

export const mBanConv = mes => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/moram/mbanconv/${mes}`
  );
  dispatch({
    type: MBANCONV,
    payload: respuesta.data
  });
};
