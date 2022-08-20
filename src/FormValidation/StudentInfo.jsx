import React, { Component } from "react";
import { connect } from "react-redux";

export class StudentInfo extends Component {
  render() {
    let { student, arrStudent } = this.props;
    // console.log(student, arrStudent);

    return (
      <div>
        <h3 className="bg-dark text-white">Thông tin sinh viên</h3>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const action = {
              type: "HANLDE_SUBMIT",
              student: student,
            };
            this.props.dispatch(action);
          }}
        >
          <div className="row">
            <div className="col-6 ">
              <p>Mã SV</p>
              <input
                type="text"
                style={{ width: "100%" }}
                id="id"
                value={student.id}
                onChange={(e) => {
                  const action = {
                    type: "GET_INFO",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <div className="col-6">
              <p>Họ Tên</p>
              <input
                id="fullName"
                type="text"
                style={{ width: "100%" }}
                value={student.fullName}
                onChange={(e) => {
                  const action = {
                    type: "GET_INFO",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <div className="col-6 mt-3">
              <p>Số điện thoại</p>
              <input
                type="text"
                id="phoneNumber"
                style={{ width: "100%" }}
                value={student.phoneNumber}
                onChange={(e) => {
                  const action = {
                    type: "GET_INFO",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <div className="col-6 mt-3">
              <p>Email</p>
              <input
                id="email"
                type="text"
                style={{ width: "100%" }}
                value={student.email}
                onChange={(e) => {
                  const action = {
                    type: "GET_INFO",
                    id: e.target.id,
                    value: e.target.value,
                  };
                  this.props.dispatch(action);
                }}
              />
            </div>
            <button
              className="btn btn-success ms-2  mt-3"
              style={{ width: "150px" }}
              type="submit"
              id="submit"
            >
              Thêm sinh viên
            </button>
            <button
              className="btn btn-success ms-2  mt-3"
              style={{ width: "150px", display: "none" }}
              type="button"
              id="button"
              onClick={() => {
                const action = {
                  type: "UPDATE_STUDENT",
                  student: student,
                };
                this.props.dispatch(action);
              }}
            >
              Cập Nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrStudent: state.studentInfo.arrStudent,
});

export default connect(mapStateToProps)(StudentInfo);
