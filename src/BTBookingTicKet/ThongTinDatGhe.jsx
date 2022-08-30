import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatGhe extends Component {
  renderInfo = () => {
    return this.props.listBooking.map((ghe, index) => {
      return (
        <tr className="text-white" key={index}>
          <td> {ghe.soGhe} </td>
          <td> {ghe.gia} </td>
          <td>
            <a
              style={{ textDecoration: "none", cursor: "pointer" }}
              className=" text-danger"
              onClick={() => {
                const action = {
                  type: "CANCLE_CHAIR",
                  soGhe: ghe.soGhe,
                };
                this.props.dispatch(action);
              }}
            >
              Hủy
            </a>
          </td>
        </tr>
      );
    });
  };

  render() {
    // console.log(this.props.listBooking)
    return (
      <div className="text-right mt-5">
        <button className="gheDuocChon mt-1"></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế đã đặt
        </span>
        <br />
        <button className="gheDangChon mt-1"></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế đang đặt
        </span>
        <br />

        <button className="ghe" style={{ marginLeft: 0 }}></button>
        <span className="text-light" style={{ fontSize: "20px" }}>
          Ghế chưa đặt
        </span>

        <div className="mt-5">
          <table className="table  " border="2">
            <thead>
              <tr className="text-light " style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th> Giá </th>
                <th>Hủy </th>
              </tr>
            </thead>
            <tbody>{this.renderInfo()}</tbody>
            <tfoot>
              <tr className="text-white">
                <td></td>
                <td>Thành tiền</td>
                <td>
                  {this.props.listBooking.reduce(
                    (total, bookingChair, index) => {
                      return (total += bookingChair.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ThongTinDatGhe);
