// main reducers file
import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import overlayReducer from "./overlayReducer";
import completedNotesReducer from "./completedNotesReducer";

export default combineReducers({
  // keys we provide here represent keys in state object
  notes: noteReducer,
  overlay: overlayReducer,
  completed: completedNotesReducer
});
