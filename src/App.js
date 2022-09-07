// import logo from './logo.svg';
// import './App.css';

import BaiTapThayKinh from "./BaiTapThayKinh/BaiTapThayKinh";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          BaiTapReact
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/testGlass">
                BaiTapThayKinh <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/exercisecart">
                Giỏ Hàng
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/formvalidate">
                Form Validation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bookingticket">
                Bài Tập Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/tictactoe
              "
              >
                Tictactoe
              </NavLink>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
