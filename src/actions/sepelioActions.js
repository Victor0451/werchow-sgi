import {
  NUEVA_CAJA,
  NUEVO_INGRESO,
  LISTADO_CAJAS,
  CAJA,
  GASTO,
  NUEVO_GASTO,
  LISTADO_INGRESOS,
  UPDATE_GASTO,
  LISTADO_GASTOS,
  UPDATE_TOTALES,
  ELIMINAR_GASTO,
  ELIMINAR_CAJA,
  ELIMINAR_INGRESO,
  UPDATE_CIERRE_CAJA
} from "./types";
import axios from "axios";
import toastr from "../utils/toastr";

export const nuevaCaja = caja => async dispatch => {
  await axios
    .post(`http://190.231.32.232:5002/api/sepelio/cajasepelio/nuevacaja`, caja)
    .then(
      res =>
        dispatch({
          type: NUEVA_CAJA,
          payload: res.data
        }),
      toastr.success(
        "La caja de sepelio se resgistro correctamente",
        "ATENCION"
      )
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se cargo la caja de sepelio",
        "ATENCION"
      );
    });
};

export const listadoCajas = () => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/listadocajas`)
    .then(res =>
      dispatch({
        type: LISTADO_CAJAS,
        payload: res.data
      })
    );
};

export const caja = id => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/caja/${id}`)
    .then(res =>
      dispatch({
        type: CAJA,
        payload: res.data
      })
    );
};

export const gasto = id => async dispatch => {
  await axios
    .get(`http://190.231.32.232:5002/api/sepelio/cajasepelio/gasto/${id}`)
    .then(res =>
      dispatch({
        type: GASTO,
        payload: res.data
      })
    );
};

export const nuevoGasto = gasto => async dispatch => {
  await axios
    .post(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/gastocaja/`,
      gasto
    )
    .then(
      res =>
        dispatch({
          type: NUEVO_GASTO,
          payload: res.data
        }),

      toastr.success("El gasto se resgistro correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning("Ocurrio un error, no se cargo el gasto", "ATENCION");
    });
};

export const nuevoIngreso = ingreso => async dispatch => {
  await axios
    .post(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/ingresocaja/`,
      ingreso
    )
    .then(
      res =>
        dispatch({
          type: NUEVO_INGRESO,
          payload: res.data
        }),

      toastr.success("El ingreso se resgistro correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning("Ocurrio un error, no se cargo el ingreso", "ATENCION");
    });
};

export const updateTotales = (valores, idcaja) => async dispatch => {
  await axios
    .put(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatetotales/${idcaja}`,
      valores
    )
    .then(res =>
      dispatch({
        type: UPDATE_TOTALES,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      toastr.warning("Ocurrio un error", err, "ATENCION");
    });
};

export const updateTotalesIng = (valores, idcaja) => async dispatch => {
  await axios
    .put(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatetotalesing/${idcaja}`,
      valores
    )
    .then(res =>
      dispatch({
        type: UPDATE_TOTALES,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
      toastr.warning("Ocurrio un error", err, "ATENCION");
    });
};

export const updateGasto = (gasto, idgastos) => async dispatch => {
  await axios
    .put(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/updategasto/${idgastos}`,
      gasto
    )
    .then(
      res =>
        dispatch({
          type: UPDATE_GASTO,
          payload: res.data
        }),

      toastr.success("El gasto se modifico correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se regitro la modificacion",
        err,
        "ATENCION"
      );
    });
};

export const updateCierreCaja = idcaja => async dispatch => {
  await axios
    .put(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/updatecierrecaja/${idcaja}`
    )
    .then(
      res =>
        dispatch({
          type: UPDATE_CIERRE_CAJA,
          payload: res.data
        }),

      toastr.success("La caja se cerro correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se regitro el cierre",
        err,
        "ATENCION"
      );
    });
};

export const listadoGastos = id => async dispatch => {
  await axios
    .get(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/listadogastos/${id}`
    )
    .then(res =>
      dispatch({
        type: LISTADO_GASTOS,
        payload: res.data
      })
    );
};

export const listadoIngresos = id => async dispatch => {
  await axios
    .get(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/listadoingresos/${id}`
    )
    .then(res =>
      dispatch({
        type: LISTADO_INGRESOS,
        payload: res.data
      })
    );
};

export const eliminarGasto = id => async dispatch => {
  await axios
    .delete(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/eliminargasto/${id}`
    )
    .then(
      res =>
        dispatch({
          type: ELIMINAR_GASTO,
          payload: res.id
        }),
      toastr.success("El gasto se elimino correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se elimino el gasto",
        err,
        "ATENCION"
      );
    });
};

export const eliminarIngreso = id => async dispatch => {
  await axios
    .delete(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/eliminaringreso/${id}`
    )
    .then(
      res =>
        dispatch({
          type: ELIMINAR_INGRESO,
          payload: res.id
        }),
      toastr.success("El gasto se elimino correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se elimino el gasto",
        err,
        "ATENCION"
      );
    });
};

export const eliminarCaja = id => async dispatch => {
  await axios
    .delete(
      `http://190.231.32.232:5002/api/sepelio/cajasepelio/eliminarcaja/${id}`
    )
    .then(
      res =>
        dispatch({
          type: ELIMINAR_CAJA,
          payload: res.id
        }),
      toastr.success("La caja se elimino correctamente", "ATENCION")
    )
    .catch(err => {
      console.log(err);
      toastr.warning(
        "Ocurrio un error, no se elimino la caja",
        err,
        "ATENCION"
      );
    });
};
