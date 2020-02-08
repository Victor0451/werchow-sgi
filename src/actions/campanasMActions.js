import {
  AT,
  CAMPANA_OPERADOR,
  CAMPANA_OPERADOR_TRAB,
  CAMPANA_OPERADOR_NOTI,
  REC,
  REIN,
  BLANQUEO,
  BUSCAR_CAMPANAS,
  BUSCAR_CAMPANAS_REC,
  BUSCAR_CAMPANAS_REIN,
  BUSCAR_CAMPANAS_BLAN,
  BUSCAR_CAMPANAS_AUX,
  CERRAR_CAMPAÑAS
} from "./types";

import axios from "axios";
import toastr from "../utils/toastr";

export const atM = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/atM`
  );
  dispatch({
    type: AT,
    payload: respuesta.data
  });
};

export const RecM = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/recM`
  );
  dispatch({
    type: REC,
    payload: respuesta.data
  });
};

export const ReinM = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/reinM`
  );
  dispatch({
    type: REIN,
    payload: respuesta.data
  });
};

export const BlanM = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/blanM`
  );
  dispatch({
    type: BLANQUEO,
    payload: respuesta.data
  });
};

export const campanaOperador = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadorM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadorrecM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadorreinM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadorblanM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorTrab = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadortrabM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadortrabrecM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadortrabreinM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadortrabblanM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadornotireinM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadornotirecM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiAt = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadornotiatM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanasM/campanaoperadornotiblanM/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const consultaCamp = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanasM/consultacamp`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: BUSCAR_CAMPANAS,
        payload: res.data
      })
    );
};

export const consultaCampRec = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanasM/consultacamprec`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: BUSCAR_CAMPANAS_REC,
        payload: res.data
      })
    );
};
export const consultaCampRein = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanasM/consultacamprein`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: BUSCAR_CAMPANAS_REIN,
        payload: res.data
      })
    );
};
export const consultaCampBlan = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanasM/consultacampblan`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: BUSCAR_CAMPANAS_BLAN,
        payload: res.data
      })
    );
};

export const consultaCampAux = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanasM/consultacampaux`, {
      params: {
        desde: desde,
        hasta: hasta
      }
    })
    .then(res =>
      dispatch({
        type: BUSCAR_CAMPANAS_AUX,
        payload: res.data
      })
    );
};

export const cerrarCamp = array => async dispatch => {
  await axios
    .put(`http://190.231.32.232:5002/api/sgi/campanasM/cerrarcamps`, array)
    .then(
      res =>
        dispatch({
          type: CERRAR_CAMPAÑAS,
          payload: res.data
        }),
      toastr.success("Campaña Cerrada", "ATENCION")
    )
    .catch(err => {
      toastr.error(`Se producion un error ${err}`, "ATENCION");
    });
};
