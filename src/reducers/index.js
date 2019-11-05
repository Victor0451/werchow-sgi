import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import campanasReducers from "./campanasReducers";
import estadisticaReducers from "./estadisticaReducers";
import noticiaReducers from "./noticiaReducers";
import moraReducers from './moraReducers'

export default combineReducers({
  auth: authReducers,
  operadores: authReducers,
  error: errorReducers,
  campanas: campanasReducers,
  estadistica: estadisticaReducers,
  noticia: noticiaReducers,
  mora: moraReducers
});
