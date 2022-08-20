import React, { Component } from "react";
// import style from "../assets/styles/style.css"

export default class Modal extends Component {
  render() {
    let { glassState } = this.props;
    // console.log(glassState)
    return (
      <div className="row justify-content-center">
        <div className="col-2 mt-5 text-center">
          <img
            className="img"
            src="./glassesImage/model.jpg"
            alt="..."
            width={250}
            
          />
          <div className="glass-test">
            <img src={glassState.url} alt="..." width={150} style={{opacity:"0.5"}}/>
          </div>
          <div
            className="card-body"
            style={{ background: "rgba(253,189,143,0.4)" }}
          >
            <div className="info-glass ">
              <h5 className="">{glassState.name}</h5>
              <p>{glassState.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
