const stateDefault = {
  arrStudent: [
    {
      id: 1,
      fullName: "Nguyễn Bình An",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 2,
      fullName: "Lê Văn Thành",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 3,
      fullName: "Trần Thành Công",
      phoneNumber: "1234237572",
      email: "122313@gmail.com",
    },
  ],
  arrStudentSearch: [
    {
      id: 1,
      fullName: "Nguyễn Bình An",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 2,
      fullName: "Lê Văn Thành",
      phoneNumber: "1234987572",
      email: "123@gmail.com",
    },
    {
      id: 3,
      fullName: "Trần Thành Công",
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
    case "HANDLE_SUBMIT": {
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
      let arrStudentUpdate = [...state.arrStudent];
      // console.log(state.arrStudent);

      arrStudentUpdate.map((item, index) => {
        // arrStudentUpdate.filter((item) => item.id !== student.id);
        // console.log(arrStudentUpdate);

        // state.arrStudent = arrStudentUpdate;
        // return { ...state };
        if (student.id === item.id) {
          arrStudentUpdate.splice(index, 1, student);

          state.arrStudent = arrStudentUpdate;
          // console.log(state);
        }
      });
      state.arrStudent = arrStudentUpdate;
      return { ...state };
    }
    case "SEARCH": {
      let { value } = action;
      // console.log(value);

      let arrStudentSearch = [...state.arrStudentSearch];
      if (!value) {
        // console.log(arrStudentSearch);
        state.arrStudent = arrStudentSearch;
      }
      arrStudentSearch.map((item, index) => {
        if (
          item.id.toString() === value ||
          item.fullName.toString().toLowerCase() === value ||
          item.fullName.toString() === value
        ) {
          // let newArrStudentSearch = [...state.arrStudent];

          arrStudentSearch = arrStudentSearch.filter((it) => it === item);

          state.arrStudent = arrStudentSearch;
        }
      });
      // console.log(state);
      return { ...state };
    }
    default:
      return state;
  }
};
