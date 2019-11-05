import { MCOBRADORES, MOFICINA, MTARJETA, MPOLICA } from "./types";
import axios from "axios";

export const mCobradores = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/mora/mcobradores`
  );
  dispatch({
    type: MCOBRADORES,
    payload: respuesta.data
  });
};

export const mOficina = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/mora/moficina`
  );
  dispatch({
    type: MOFICINA,
    payload: respuesta.data
  });
};

export const mTarjeta = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/mora/mtarjeta`
  );
  dispatch({
    type: MTARJETA,
    payload: respuesta.data
  });
};

export const mPolicia = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/mora/mpolicia`
  );
  dispatch({
    type: MPOLICA,
    payload: respuesta.data
  });
};
