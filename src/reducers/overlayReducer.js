import { TOGGLE_OVERLAY } from "actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      // activate overlay
      return action.payload;

    default:
      return state;
  }
}
