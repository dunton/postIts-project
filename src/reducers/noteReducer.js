import { ADD_NOTE, REMOVE_NOTE } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      // add new note to array
      return [...state, action.payload];
    case REMOVE_NOTE:
      // remove note from array
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
