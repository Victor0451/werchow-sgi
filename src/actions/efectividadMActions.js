import {
  ECOBRADORES,
  EOFICINA,
  ECOBRADORES_COBRADO,
  EOFICINA_COBRADO,
  ETARJETA_W,
  ETARJETA_COBRADO_W,
  ETARJETA_L,
  ETARJETA_COBRADO_L,
  ETARJETA_R,
  ETARJETA_COBRADO_R,
  ETARJETA_P,
  ETARJETA_COBRADO_P
} from "./types";
import axios from "axios";

export const eCobradoresTotal = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/ecobradorestotal`
  );
  dispatch({
    type: ECOBRADORES,
    payload: respuesta.data
  });
};

export const eCobradoresCobrado = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/ecobradorescobrado`
  );
  dispatch({
    type: ECOBRADORES_COBRADO,
    payload: respuesta.data
  });
};

export const eOficinaTotal = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/eoficinatotal`
  );
  dispatch({
    type: EOFICINA,
    payload: respuesta.data
  });
};

export const eOficinaCobrado = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/eoficinacobrado`
  );
  dispatch({
    type: EOFICINA_COBRADO,
    payload: respuesta.data
  });
};

export const eTarjetaTotalSsj = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetassjtotal`
  );
  dispatch({
    type: ETARJETA_W,
    payload: respuesta.data
  });
};

export const eTarjetaCobradoSsj = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetassjcobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_W,
    payload: respuesta.data
  });
};

export const eTarjetaTotalpalpala = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapalpalatotal`
  );
  dispatch({
    type: ETARJETA_L,
    payload: respuesta.data
  });
};

export const eTarjetaCobradopalpala = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapalpalacobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_L,
    payload: respuesta.data
  });
};

export const eTarjetaTotalperico = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapericototal`
  );
  dispatch({
    type: ETARJETA_R,
    payload: respuesta.data
  });
};

export const eTarjetaCobradoperico = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapericocobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_R,
    payload: respuesta.data
  });
};

export const eTarjetaTotalsanpedro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetasanpedrototal`
  );
  dispatch({
    type: ETARJETA_P,
    payload: respuesta.data
  });
};

export const eTarjetaCobradosanpedro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetasanpedrocobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_P,
    payload: respuesta.data
  });
};
