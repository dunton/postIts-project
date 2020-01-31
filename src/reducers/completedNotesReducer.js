import { NOTE_COMPLETED } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case NOTE_COMPLETED:
      // add note
      return [...state, action.payload];
    default:
      return state;
  }
}
