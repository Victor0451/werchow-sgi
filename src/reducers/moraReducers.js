import {
  MCOBRADORES,
  MOFICINA,
  MTARJETA, 
  MBANCONV
} from "../actions/types";

const initialState = {
  mora: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOFICINA:
      return {
        ...state,
        moficina: action.payload
      };

    case MCOBRADORES:
      return {
        ...state,
        mcobradores: action.payload
      };

     
    case MTARJETA:
      return {
        ...state,
        mtarjeta: action.payload
      };
   

    case MBANCONV:
      return {
        ...state,
        mbanconv: action.payload
      };

    default:
      return state;
  }
}
