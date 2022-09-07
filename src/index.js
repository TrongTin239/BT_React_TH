import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BaiTapThayKinh from "./BaiTapThayKinh/BaiTapThayKinh";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ExerciseCart from "./ExerciseCart/ExerciseCart";
import FormValidation from "./FormValidation/FormValidation";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import BookingTicket from "./BTBookingTicKet/BookingTicket";
import Tictactoe from "./Tictactoe/Tictactoe";

//redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}></Route>
        <Route path="testGlass" element={<BaiTapThayKinh />}></Route>
        <Route path="exercisecart" element={<ExerciseCart />}></Route>
        <Route path="formvalidate" element={<FormValidation />}></Route>
        <Route path="bookingticket" element={<BookingTicket />}></Route>
        <Route path="tictactoe" element={<Tictactoe />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
