import { createStore, combineReducers } from "redux";
import { studentInfo } from "./reducers/studentInfoReducer";

const rootReducer = combineReducers({
  studentInfo,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
