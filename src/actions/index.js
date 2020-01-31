// MAIN ACTIONS FILE
import { ADD_NOTE, REMOVE_NOTE, TOGGLE_OVERLAY, NOTE_COMPLETED } from "./types";

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADD_NOTE, payload: note });
  };
};

export const removeNote = i => {
  return dispatch => {
    dispatch({ type: REMOVE_NOTE, payload: i });
  };
};

export const toggleOverlay = overlayStatus => {
  return dispatch => {
    dispatch({ type: TOGGLE_OVERLAY, payload: overlayStatus });
  };
};

export const noteCompleted = note => {
  return dispatch => {
    dispatch({ type: NOTE_COMPLETED, payload: note });
  };
};
