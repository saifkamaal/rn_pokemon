import createReducer from "../lib/createReducer";
import * as actionTypes from "../actions/types";

export const pokemons = createReducer(
  {},
  {
    [actionTypes.POKEMONS_LIST](state, action) {
      let updatedState = action.pokemons;
      return updatedState;
    }
  }
);
