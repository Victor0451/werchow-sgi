import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA,
  RESPALCOBM,
  RESPERCOBM,
  RESSPCOBM,
  RESSSJCOBM,
  RESPALTARM,
  RESPERTARM,
  RESSPTARM,
  RESSSJTARM,
  RESPALOFIM,
  RESPEROFIM,
  RESSPOFIM,
  RESSSJOFIM
} from "../actions/types";

import axios from "axios";

export const eCobradores = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/ecobradores`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/eoficina`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetapalpala`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetaperico`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetassj`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/etarjetasanpedro`,
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
    `http://190.231.32.232:5002/api/sgi/efectividadm/epolicia`,
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

export const resPalCobM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/respalcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALCOBM,
    payload: respuesta.data
  });
};

export const resPerCobM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/respercob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERCOBM,
    payload: respuesta.data
  });
};

export const resSpCobM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resspcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPCOBM,
    payload: respuesta.data
  });
};

export const resSsjCobM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resssjcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJCOBM,
    payload: respuesta.data
  });
};

export const resPalOfiM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/respalofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALOFIM,
    payload: respuesta.data
  });
};

export const resPerOfiM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resperofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPEROFIM,
    payload: respuesta.data
  });
};

export const resSpOfiM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resspofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPOFIM,
    payload: respuesta.data
  });
};

export const resSsjOfiM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resssjofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJOFIM,
    payload: respuesta.data
  });
};

export const resPalTarM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/respaltar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALTARM,
    payload: respuesta.data
  });
};

export const resPerTarM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/respertar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERTARM,
    payload: respuesta.data
  });
};

export const resSpTarM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/ressptar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPTARM,
    payload: respuesta.data
  });
};

export const resSsjTarM = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadm/resssjtar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJTARM,
    payload: respuesta.data
  });
};
