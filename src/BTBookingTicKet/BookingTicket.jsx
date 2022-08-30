import React, { Component } from "react";
import { connect } from "react-redux";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "./BookingTicket.css";

export class BookingTicket extends Component {
  renderHangGhe = () => {
    return this.props.danhSachGhe.danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index} className=" mt-1 ">
          <HangGhe
            listBooking={this.props.danhSachGhe.listBooking}
            hangGhe={hangGhe}
            soHangGhe={index}
          />
        </div>
      );
    });
  };
  render() {
    // console.log(this.props)
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-light ">Bài Tập Đặt Vé CyberLearn</h1>
                <div className="text-light mt-1" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen ms-4"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4 ">
                <h1 className="text-light">Danh sách ghế bạn chọn</h1>
                <ThongTinDatGhe
                  listBooking={this.props.danhSachGhe.listBooking}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGhe: state.bookingTicketReducer,
});

export default connect(mapStateToProps)(BookingTicket);
