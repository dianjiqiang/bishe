import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    role: "administrator",
    MenuItem: [
      {
        title: "问卷列表",
        id: "/questionnaire",
        path: "/questionnaire",
        children: [
          {
            title: "问卷汇总",
            path: "/home/questionnaire/summary",
            id: "/home/questionnaire/summary",
          },
          {
            title: "问卷填写",
            path: "/home/questionnaire/fill",
            id: "/home/questionnaire/fill",
          },
          {
            title: "收藏夹",
            path: "/home/questionnaire/favorites",
            id: "/home/questionnaire/favorites",
          },
          {
            title: "回收站",
            path: "/home/questionnaire/recycling",
            id: "/home/questionnaire/recycling",
          },
        ],
      },
      {
        title: "教师列表",
        id: "/teachers",
        path: "/teachers",
        children: [
          {
            title: "七年级组",
            id: "/home/techers/seventh",
            path: "/home/techers/seventh",
          },
          {
            title: "八年级组",
            id: "/home/techers/eighth",
            path: "/home/techers/eighth",
          },
          {
            title: "九年级组",
            id: "/home/techers/ninth",
            path: "/home/techers/ninth",
          },
        ],
      },
      {
        title: "学生列表",
        id: "/students",
        path: "/students",
        children: [
          {
            title: "七年级组",
            id: "/home/students/seventh",
            path: "/home/students/seventh",
          },
          {
            title: "八年级组",
            id: "/home/students/eighth",
            path: "/home/students/eighth",
          },
          {
            title: "九年级组",
            id: "/home/students/ninth",
            path: "/home/students/ninth",
          },
        ],
      },
      // {
      //   title: '问卷操作',
      //   id: '/add',
      //   path: '/add',
      //   children: [
      //     {
      //       title: '添加问卷',
      //       path: '/home/add',
      //       id: '/home/add'
      //     }
      //   ]
      // }
    ],
    userMessage: {},
  },
  reducers: {
    changeUserMessage(state, { payload }) {
      state.MenuItem = payload.MenuItem;
      window.localStorage.setItem("MenuItem", JSON.stringify(payload.MenuItem));
      state.userMessage.charge = payload?.charge;
      window.localStorage.setItem("charge", JSON.stringify(payload.charge));
      state.userMessage.class_id = payload?.class_id;
      window.localStorage.setItem("class_id", JSON.stringify(payload.class_id));
      state.userMessage.employee = payload?.employee;
      window.localStorage.setItem("employee", JSON.stringify(payload.employee));
      state.userMessage.studentId = payload?.studentId;
      window.localStorage.setItem(
        "studentId",
        JSON.stringify(payload.studentId)
      );
      state.userMessage.id = payload?.id;
      window.localStorage.setItem("id", JSON.stringify(payload.id));
      state.userMessage.name = payload?.name;
      window.localStorage.setItem("name", JSON.stringify(payload.name));
      state.userMessage.phone = payload?.phone;
      window.localStorage.setItem("phone", JSON.stringify(payload.phone));
      state.userMessage.role = payload?.role;
      window.localStorage.setItem("role", JSON.stringify(payload.role));
      state.userMessage.token = payload?.token;
      window.localStorage.setItem("token", JSON.stringify(payload.token));
    },
  },
});

export default homeSlice.reducer;

export const { changeUserMessage } = homeSlice.actions;
