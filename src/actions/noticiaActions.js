import { NUEVA_NOTICIA, MOSTRAR_NOTICIA } from "./types";
import axios from "axios";

export const nuevaNoticia = noti => async dispatch => {
  const respuesta = await axios.post(
    `http://190.231.32.232:5002/api/sgi/noticia/nuevanoticia`,
    noti
  );
  dispatch({
    type: NUEVA_NOTICIA,
    payload: respuesta.data
  });
};

export const mostraNoticia = () => async dispatch => {
  const respuesta = await axios.get(
    `http://190.231.32.232:5002/api/sgi/noticia/noticias`
  );
  dispatch({
    type: MOSTRAR_NOTICIA,
    payload: respuesta.data
  });
};
