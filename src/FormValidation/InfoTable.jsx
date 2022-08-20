import React, { Component } from "react";
import { connect } from "react-redux";

export class InfoTable extends Component {
  render() {
    let arrStudent = this.props.arrStudent;
    // console.log(arrStudent);

    return (
      <div className="w-100 mt-5">
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrStudent.map((st, index) => {
              return (
                <tr key={index}>
                  <td>{st.id} </td>
                  <td>{st.fullName} </td>
                  <td>{st.phoneNumber} </td>

                  <td>{st.email} </td>
                  <td>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => {
                        document.getElementById("submit").style.display =
                          "none";
                        document.getElementById("button").style.display =
                          "block";
                        document.getElementById("id").disabled = true;
                        const action = {
                          type: "EDIT_STUDENT",
                          student: st,
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        const action = {
                          type: "DELETE_STUDENT",
                          id: st.id,
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(InfoTable);
