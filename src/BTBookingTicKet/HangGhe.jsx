import React, { Component } from "react";
import { connect } from "react-redux";
class HangGhe extends Component {
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      return (
        <button className="rowNumber" key={index}>
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ms-2">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // console.log(ghe)
      let cssGheDaDat = "";
      let disable = false;
      let cssGheDangChon = "";

      let indexGheDangChon = this.props.listBooking.findIndex(
        (gb) => gb.soGhe === ghe.soGhe
      );
      // console.log(indexGheDangChon)
      if (indexGheDangChon !== -1) {
        cssGheDangChon = "gheDangChon";
      }
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      return (
        <button
          className={`ghe ${cssGheDaDat} ${cssGheDangChon} `}
          disabled={disable}
          key={index}
          onClick={() => {
            const action = {
              type: "BOOKING_CHAIR",
              ghe: ghe,
            };
            this.props.dispatch(action);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    // console.log(this.props.dispatch);
    return (
      <div className="text-light text-start mt-2 ms-3 ">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(HangGhe);
