const stateDefault = {
  arrStudent: [
    {
      id: 1,
      fullName: "Nguyễn Văn A",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 2,
      fullName: "Nguyễn Văn B",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 3,
      fullName: "Nguyễn Văn C",
      phoneNumber: "1234237572",
      email: "122313@gmail.com",
    },
  ],
  student: {
    id: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  },
};

export const studentInfo = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_INFO": {
      let { id, value } = action;

      state.student = { ...state.student };
      state.student[id] = value;
      return { ...state };
    }
    case "HANLDE_SUBMIT": {
      let { student } = action;

      let arrStudentUpdate = [...state.arrStudent];

      arrStudentUpdate.push(student);
      // console.log(arrStudentUpdate);
      state.arrStudent = arrStudentUpdate;
      return { ...state };
    }
    case "DELETE_STUDENT": {
      let { id } = action;
      let arrStudentUpdate = [...state.arrStudent];
      arrStudentUpdate = arrStudentUpdate.filter((sp) => sp.id !== id);
      state.arrStudent = arrStudentUpdate;
      return { ...state };
    }
    case "EDIT_STUDENT": {
      let { student } = action;
      let editStudent = { ...state.student };
      editStudent.id = student.id;
      editStudent.fullName = student.fullName;
      editStudent.email = student.email;
      editStudent.phoneNumber = student.phoneNumber;
      state.student = editStudent;
      return { ...state };
    }
    case "UPDATE_STUDENT": {
      let { student } = action;
      // console.log(student);
      let arrStudent = [...state.arrStudent];
      // console.log(state.arrStudent);
      arrStudent.map((item, index) => {
        if (student.id === item.id) {
          // console.log("true");
          // console.log(item.fullName);
          arrStudent = { ...item, fullName: student.fullName };
          console.log(arrStudent);
          // return (state.arrStudent = arrStudent);
        }
      });
     
    }
    default:
      return state;
  }
};
