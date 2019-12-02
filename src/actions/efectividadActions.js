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
  ETARJETA_COBRADO_P,
  EPOLICIA_L,
  EPOLICIA_R,
  EPOLICIA_P,
  EPOLICIA_W,
  ECONVENIOS_P
} from "../actions/types";
import axios from "axios";

export const eCobradoresTotal = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ecobradorestotal`
  );
  dispatch({
    type: ECOBRADORES,
    payload: respuesta.data
  });
};

export const eCobradoresCobrado = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ecobradorescobrado`
  );
  dispatch({
    type: ECOBRADORES_COBRADO,
    payload: respuesta.data
  });
};

export const eOficinaTotal = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/eoficinatotal`
  );
  dispatch({
    type: EOFICINA,
    payload: respuesta.data
  });
};

export const eOficinaCobrado = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/eoficinacobrado`
  );
  dispatch({
    type: EOFICINA_COBRADO,
    payload: respuesta.data
  });
};

export const eTarjetaTotalSsj = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetassjtotal`
  );
  dispatch({
    type: ETARJETA_W,
    payload: respuesta.data
  });
};

export const eTarjetaCobradoSsj = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetassjcobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_W,
    payload: respuesta.data
  });
};

export const eTarjetaTotalpalpala = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapalpalatotal`
  );
  dispatch({
    type: ETARJETA_L,
    payload: respuesta.data
  });
};

export const eTarjetaCobradopalpala = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapalpalacobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_L,
    payload: respuesta.data
  });
};

export const eTarjetaTotalperico = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapericototal`
  );
  dispatch({
    type: ETARJETA_R,
    payload: respuesta.data
  });
};

export const eTarjetaCobradoperico = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetapericocobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_R,
    payload: respuesta.data
  });
};

export const eTarjetaTotalsanpedro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetasanpedrototal`
  );
  dispatch({
    type: ETARJETA_P,
    payload: respuesta.data
  });
};

export const eTarjetaCobradosanpedro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/etarjetasanpedrocobrado`
  );
  dispatch({
    type: ETARJETA_COBRADO_P,
    payload: respuesta.data
  });
};

export const ePoliciaTotalPalpala = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epoliciapalpalatotal`
  );
  dispatch({
    type: EPOLICIA_L,
    payload: respuesta.data
  });
};

export const ePoliciaTotalPerico = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epoliciapericototal`
  );
  dispatch({
    type: EPOLICIA_R,
    payload: respuesta.data
  });
};

export const ePoliciaTotalSanSalvador = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epoliciassjtotal`
  );
  dispatch({
    type: EPOLICIA_W,
    payload: respuesta.data
  });
};

export const ePoliciaTotalSanPerdro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/epoliciasanpedrototal`
  );
  dispatch({
    type: EPOLICIA_P,
    payload: respuesta.data
  });
};

export const eConveniosTotalSanPerdro = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/econveniosanpedrototal`
  );
  dispatch({
    type: ECONVENIOS_P,
    payload: respuesta.data
  });
};
