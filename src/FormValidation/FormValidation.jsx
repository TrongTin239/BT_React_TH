import React, { Component } from "react";
import { connect } from "react-redux";
import InfoTable from "./InfoTable";
import StudentInfo from "./StudentInfo";

class FormValidation extends Component {
  render() {
    let {arrStudent,student} = this.props.studentInfo
    return (
      <div className="container">
        <StudentInfo student ={student} />
        <InfoTable arrStudent={arrStudent}  />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  studentInfo: state.studentInfo,
});

export default connect(mapStateToProps)(FormValidation);
