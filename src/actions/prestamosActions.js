import {
  CONSULTAR_FICHA,
  ALTA_PRESTAMO,
  LISTADO_PRESTAMOS,
  PRESTAMOR_POR_OP,
  PRESTAMOR_POR_ESTADO,
  APROBAR_PRESTAMOS
} from "./types";
import axios from "axios";

import toastr from "../utils/toastr";

export const consultarFicha = contrato => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/consultarficha/${contrato}`
  );
  dispatch({
    type: CONSULTAR_FICHA,
    payload: respuesta.data
  });
};

export const altaPrestamo = prestamo => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/prestamos/altaprestamo`,
    prestamo
  );
  dispatch({
    type: ALTA_PRESTAMO,
    payload: respuesta.data
  });
};

export const listadoPrestamos = (desde, hasta, estado) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/listadoprestamos`,
    {
      params: {
        desde: desde,
        hasta: hasta,
        estado: estado
      }
    }
  );
  dispatch({
    type: LISTADO_PRESTAMOS,
    payload: respuesta.data
  });
};

export const listadoPrestamosPendientes = (desde, hasta) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/listadoprestamospendientes`,
    {
      params: {
        desde: desde,
        hasta: hasta
      }
    }
  );
  dispatch({
    type: LISTADO_PRESTAMOS,
    payload: respuesta.data
  });
};

export const listadoPrestamos2 = (desde, hasta) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/listadoprestamos2`,
    {
      params: {
        desde: desde,
        hasta: hasta
      }
    }
  );
  dispatch({
    type: LISTADO_PRESTAMOS,
    payload: respuesta.data
  });
};

export const prestamosPorOp = (desde, hasta) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/prestamosporop`,
    {
      params: {
        desde: desde,
        hasta: hasta
      }
    }
  );
  dispatch({
    type: PRESTAMOR_POR_OP,
    payload: respuesta.data
  });
};

export const prestamosPorCodigo = codigo => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/prestamosporcodigo`,
    {
      params: {
        id: codigo
      }
    }
  );
  dispatch({
    type: PRESTAMOR_POR_OP,
    payload: respuesta.data
  });
};

export const prestamosPorId = id => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/prestamosporid/${id}`
  );
  dispatch({
    type: PRESTAMOR_POR_OP,
    payload: respuesta.data
  });
};

export const prestamosPorEstado = (desde, hasta) => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/prestamos/prestamosporestado`,
    {
      params: {
        desde: desde,
        hasta: hasta
      }
    }
  );
  dispatch({
    type: PRESTAMOR_POR_ESTADO,
    payload: respuesta.data
  });
};

export const aprobarPrestamos = id => async dispatch => {
  await axios
    .put(`http://190.231.32.232:5002/api/sgi/prestamos/aprobarprestamo/${id}`)

    .then(
      respuesta =>
        dispatch({
          type: APROBAR_PRESTAMOS,
          payload: respuesta.data
        }),
      toastr.success("El prestamo se aprobo con exito!", "ATENCION")
    )
    .catch(err => {
      toastr.error(`Se producion un error ${err}`, "ATENCION");
    });
};
