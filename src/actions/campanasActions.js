import {
  AT,
  POLICIA,
  AUX,
  CREAR_CAMP_AT,
  ESTADO_CAMP,
  CAMPANA_OPERADOR,
  GESTION_CASO,
  UPDATE_ACCION,
  CAMPANA_OPERADOR_TRAB,
  CERRAR_CASO,
  GET_GESTION_CASO,
  GET_RECUPERACION,
  GET_DEUDA,
  BUSCAR_CASO,
  BUSCAR_GESTION_CASO,
  REC,
  REIN,
  BLANQUEO,
  CAMPANA_OPERADOR_NOTI,
  CAMPANA_OPERADOR_HIST,
  BUSCAR_CAMPANAS,
  BUSCAR_CAMPANAS_REC,
  BUSCAR_CAMPANAS_REIN,
  BUSCAR_CAMPANAS_BLAN,
  BUSCAR_CAMPANAS_AUX,
  CERRAR_CAMPAÑAS
} from "./types";

import axios from "axios";
import toastr from "../utils/toastr";

export const atW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/atW`
  );
  dispatch({
    type: AT,
    payload: respuesta.data
  });
};

export const RecW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/recW`
  );
  dispatch({
    type: REC,
    payload: respuesta.data
  });
};

export const ReinW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/reinW`
  );
  dispatch({
    type: REIN,
    payload: respuesta.data
  });
};

export const BlanW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/blanW`
  );
  dispatch({
    type: BLANQUEO,
    payload: respuesta.data
  });
};

export const PoliW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/PoliW`
  );
  dispatch({
    type: POLICIA,
    payload: respuesta.data
  });
};

export const AuxW = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/AuxW`
  );
  dispatch({
    type: AUX,
    payload: respuesta.data
  });
};

export const buscarCaso = id => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanas/buscarcaso/${id}`)

    .then(res =>
      dispatch({
        type: BUSCAR_CASO,
        payload: res.data
      })
    )

    .catch(err => {
      console.log(err);
    });
};

export const buscarGestionCaso = id => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanas/buscargestioncaso/${id}`)

    .then(res =>
      dispatch({
        type: BUSCAR_GESTION_CASO,
        payload: res.data
      })
    )

    .catch(err => {
      console.log(err);
    });
};

export const crearCampAT = caso => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/campanas/crearcampat`,
    caso
  );
  dispatch({
    type: CREAR_CAMP_AT,
    payload: respuesta.data
  });
};

export const verificarEstadoCamp = contrato => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/estadocamp/${contrato}`
  );
  dispatch({
    type: ESTADO_CAMP,
    payload: respuesta.data
  });
};

export const campanaOperador = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperador/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorTrab = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrab/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaArchivo = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorhist/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_HIST,
    payload: respuesta.data
  });
};

export const campanaOperadorRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorrec/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrabrec/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaArchivoRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorhistrec/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_HIST,
    payload: respuesta.data
  });
};

export const campanaOperadorRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorrein/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorRecordatorio = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorrecordatorio/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrabrein/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorblan/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorPoli = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadorpoli/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrabblan/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabPoli = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrabpoli/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorTrabRecordatorio = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadortrabrecordatorio/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_TRAB,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiRein = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadornotirein/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiRec = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadornotirec/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiPoli = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadornotipoli/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiAt = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadornotiat/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const campanaOperadorNotiBlan = operador => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/campanaoperadornotiblan/${operador}`
  );
  dispatch({
    type: CAMPANA_OPERADOR_NOTI,
    payload: respuesta.data
  });
};

export const gestionCaso = datos => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/campanas/gestioncaso`,
    datos
  );
  dispatch({
    type: GESTION_CASO,
    payload: respuesta.data
  });
};

export const updateAccion = id => async dispatch => {
  const respuesta = await axios.put(
    `http://190.231.32.232:5002/api/sgi/campanas/updateaccion/${id}`
  );
  dispatch({
    type: UPDATE_ACCION,
    payload: respuesta.data
  });
};

export const cerrarCaso = id => async dispatch => {
  const respuesta = await axios.put(
    `http://190.231.32.232:5002/api/sgi/campanas/cerrarcaso/${id}`
  );
  dispatch({
    type: CERRAR_CASO,
    payload: respuesta.data
  });
};

export const getGestionCaso = id => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/getgestioncaso/${id}`
  );
  dispatch({
    type: GET_GESTION_CASO,
    payload: respuesta.data
  });
};
export const getRecuperacion = id => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/recuperacion/${id}`
  );
  dispatch({
    type: GET_RECUPERACION,
    payload: respuesta.data
  });
};

export const getDeuda = id => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/campanas/deuda/${id}`
  );
  dispatch({
    type: GET_DEUDA,
    payload: respuesta.data
  });
};

export const consultaCamp = (desde, hasta) => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sgi/campanas/consultacamp`, {
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
    .get(`http://190.231.32.232:5002/api/sgi/campanas/consultacamprec`, {
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
    .get(`http://190.231.32.232:5002/api/sgi/campanas/consultacamprein`, {
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
    .get(`http://190.231.32.232:5002/api/sgi/campanas/consultacampblan`, {
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
    .get(`http://190.231.32.232:5002/api/sgi/campanas/consultacampaux`, {
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
    .put(`http://190.231.32.232:5002/api/sgi/campanas/cerrarcamps`, array)
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
