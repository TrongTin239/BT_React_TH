import { createStore, combineReducers } from "redux";
import {bookingTicketReducer} from "./reducers/bookingTicketReducer";

import { studentInfo } from "./reducers/studentInfoReducer";

const rootReducer = combineReducers({
  studentInfo,

  bookingTicketReducer
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
