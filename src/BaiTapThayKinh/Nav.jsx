import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="main" >
        <div
          className="header"
          style={{ backgroundColor: "rgba(52, 52, 52, 0.8" }}
        >
          <div className="container  text-light py-2 text-center">
            <h1>TRY GLASSES APP ONLINE</h1>
          </div>
        </div>
      </div>
    );
  }
}
