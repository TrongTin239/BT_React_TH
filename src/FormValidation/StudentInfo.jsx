import React, { Component } from "react";
import { connect } from "react-redux";

export class StudentInfo extends Component {
  state = {
    errors: {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: "",
    },
  };
  handleChange = (e) => {
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;
    // console.log(name, value);
    let errorMessage = "";
    if (value.trim() === "") {
      errorMessage = name + " không được bỏ trống";
    }
    // let values = {
    //   ...this.props.arrStudent.student,
    //   [name]: value,
    // };

    // Check Mail

    if (type === "email") {
      let regex = new RegExp(pattern);

      if (!regex.test(value.toString())) {
        errorMessage = name + " không đúng định dạng";
      }
    }
    if (name === "phoneNumber") {
      let regex = new RegExp(pattern);

      if (!regex.test(value)) {
        errorMessage = name + " không đúng định dạng";
      }
    }
    let errors = {
      ...this.state.errors,
      [name]: errorMessage,
    };
    this.setState({
      errors: errors,
    });
    const action = {
      type: "GET_INFO",
      id: e.target.id,
      value: e.target.value,
    };
    this.props.dispatch(action);
  };

  render() {
    let { student, arrStudent, errors } = this.props;

    // console.log(this.props.arrStudent);

    return (
      <div>
        <h3 className="bg-dark text-white">Thông tin sinh viên</h3>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            let arrStudent = this.props.arrStudent.arrStudent;
            console.log(arrStudent);
            for (let st of arrStudent) {
              if (st.id.toString() === student.id) {
                return alert("Mã SV đã tồn tại!!!");
              }
            }
            if (
              !student.id &
              !student.fullName &
              !student.phoneNumber &
              !student.email
            ) {
              return alert("Các ô input không được để trống");
            }
            const action = {
              type: "HANDLE_SUBMIT",
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
                name="id"
                value={student.id}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.errors.id}</span>
            </div>
            <div className="col-6">
              <p>Họ Tên</p>
              <input
                id="fullName"
                type="text"
                name="fullName"
                style={{ width: "100%" }}
                value={student.fullName}
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.errors.fullName}</span>
            </div>
            <div className="col-6 mt-3">
              <p>Số điện thoại</p>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                style={{ width: "100%" }}
                value={student.phoneNumber}
                pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                onChange={this.handleChange}
              />
              <span className="text-danger">
                {this.state.errors.phoneNumber}
              </span>
            </div>
            <div className="col-6 mt-3">
              <p>Email</p>
              <input
                id="email"
                type="email"
                name="email"
                style={{ width: "100%" }}
                value={student.email}
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                onChange={this.handleChange}
              />
              <span className="text-danger">{this.state.errors.email}</span>
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
                document.getElementById("submit").style.display = "block";
                document.getElementById("button").style.display = "none";
                document.getElementById("id").disabled = false;
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

          <input
            className="mt-4 w-50  "
            type="text"
            placeholder="Search...."
            style={{ display: "block" }}
            onChange={(e) => {
              const action = {
                type: "SEARCH",
                value: e.target.value,
              };
              this.props.dispatch(action);
            }}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrStudent: state.studentInfo,
});

export default connect(mapStateToProps)(StudentInfo);
