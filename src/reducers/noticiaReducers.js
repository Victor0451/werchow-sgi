import { MOSTRAR_NOTICIA, NUEVA_NOTICIA } from "../actions/types";

const initialState = {
  noticia: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_NOTICIA:
      return {
        ...state,
        noticia: action.payload
      };

    case NUEVA_NOTICIA:
      return {
        ...state,
        noticia: [...state.noticia, action.payload]
      };

    default:
      return state;
  }
}
