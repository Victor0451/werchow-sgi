import {
  ECOBRADORES,
  EOFICINA,
  ETARJETA_W,
  ETARJETA_L,
  ETARJETA_R,
  ETARJETA_P,
  EPOLICIA,
  ECONVENIOS,
  EBANCO,
  RESPALCOB,
  RESPERCOB,
  RESSPCOB,
  RESSSJCOB,
  RESPALTAR,
  RESPERTAR,
  RESSPTAR,
  RESSSJTAR,
  RESPALBAN,
  RESPERBAN,
  RESSPBAN,
  RESSSJBAN,
  RESPALPOL,
  RESPERPOL,
  RESSPPOL,
  RESSSJPOL,
  RESPALOFI,
  RESPEROFI,
  RESSPOFI,
  RESSSJOFI,
  RESPALCONV,
  RESPERCONV,
  RESSPCONV,
  RESSSJCONV
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

export const resPalCob = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respalcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALCOB,
    payload: respuesta.data
  });
};

export const resPerCob = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respercob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERCOB,
    payload: respuesta.data
  });
};

export const resSpCob = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resspcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPCOB,
    payload: respuesta.data
  });
};

export const resSsjCob = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjcob`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJCOB,
    payload: respuesta.data
  });
};

export const resPalOfi = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respalofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALOFI,
    payload: respuesta.data
  });
};

export const resPerOfi = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resperofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPEROFI,
    payload: respuesta.data
  });
};

export const resSpOfi = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resspofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPOFI,
    payload: respuesta.data
  });
};

export const resSsjOfi = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjofi`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJOFI,
    payload: respuesta.data
  });
};

export const resPalTar = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respaltar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALTAR,
    payload: respuesta.data
  });
};

export const resPerTar = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respertar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERTAR,
    payload: respuesta.data
  });
};

export const resSpTar = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ressptar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPTAR,
    payload: respuesta.data
  });
};

export const resSsjTar = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjtar`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJTAR,
    payload: respuesta.data
  });
};

export const resPalBan = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respalban`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALBAN,
    payload: respuesta.data
  });
};

export const resPerBan = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resperban`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERBAN,
    payload: respuesta.data
  });
};

export const resSpBan = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resspban`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPBAN,
    payload: respuesta.data
  });
};

export const resSsjBan = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjban`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJBAN,
    payload: respuesta.data
  });
};

export const resPalPol = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respalpol`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALPOL,
    payload: respuesta.data
  });
};

export const resPerPol = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resperpol`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERPOL,
    payload: respuesta.data
  });
};

export const resSpPol = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/ressppol`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPPOL,
    payload: respuesta.data
  });
};

export const resSsjPol = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjpol`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJPOL,
    payload: respuesta.data
  });
};

export const resPalConv = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/respalconv`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPALCONV,
    payload: respuesta.data
  });
};

export const resPerConv = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resperconv`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESPERCONV,
    payload: respuesta.data
  });
};

export const resSpConv = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resspconv`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSPCONV,
    payload: respuesta.data
  });
};

export const resSsjConv = (mes, ano) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/efectividadw/resssjconv`,
    {
      params: {
        mes: mes,
        ano: ano
      }
    }
  );
  dispatch({
    type: RESSSJCONV,
    payload: respuesta.data
  });
};
