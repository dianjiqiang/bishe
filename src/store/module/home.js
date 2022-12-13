import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    role: 'administrator',
    MenuItem: [
      {
        title: '问卷列表',
        id: '/questionnaire',
        path: '/questionnaire',
        children: [
          {
            title: '问卷汇总',
            path: '/home/questionnaire/summary',
            id: '/home/questionnaire/summary'
          },
          {
            title: '问卷填写',
            path: '/home/questionnaire/fill',
            id: '/home/questionnaire/fill'
          },
          {
            title: '收藏夹',
            path: '/home/questionnaire/favorites',
            id: '/home/questionnaire/favorites'
          },
          {
            title: '回收站',
            path: '/home/questionnaire/recycling',
            id: '/home/questionnaire/recycling'
          }
        ]
      },
      {
        title: '教师列表',
        id: '/teachers',
        path: '/teachers',
        children: [
          {
            title: '七年级组',
            id: '/home/techers/seventh',
            path: '/home/techers/seventh'
          },
          {
            title: '八年级组',
            id: '/home/techers/eighth',
            path: '/home/techers/eighth'
          },
          {
            title: '九年级组',
            id: '/home/techers/ninth',
            path: '/home/techers/ninth'
          }
        ]
      },
      {
        title: '学生列表',
        id: '/students',
        path: '/students',
        children: [
          {
            title: '七年级组',
            id: '/home/students/seventh',
            path: '/home/students/seventh'
          },
          {
            title: '八年级组',
            id: '/home/students/eighth',
            path: '/home/students/eighth'
          },
          {
            title: '九年级组',
            id: '/home/students/ninth',
            path: '/home/students/ninth'
          }
        ]
      }
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
    ]
  },
  reducers: {}
})

export default homeSlice.reducer

// export const {} = homeSlice.actions
