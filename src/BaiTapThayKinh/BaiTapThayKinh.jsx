import React, { Component } from "react";
import Modal from "./Modal";
import Nav from "./Nav";
import GlassList from "./GlassList";
export default class BaiTapThayKinh extends Component {
  state = {
    glassState: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  testGlass = (glassPicked) => {
    this.setState({
      glassState: glassPicked,
    });
  };
  render() {
    // console.log(this.state.glassState);
    return (
      <div className=" content w-100">
        <div
          className="inner-background"
          style={{ background: "rgba(0,0,0,.2)", height: "100vh" }}
        >
          <Nav />
          <Modal glassState={this.state.glassState} />
          <GlassList testGlass={this.testGlass} />
        </div>
      </div>
    );
  }
}
