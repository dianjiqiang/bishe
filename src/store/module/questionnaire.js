import { createSlice } from '@reduxjs/toolkit'

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    questions: [
      {
        id: '001',
        name: '大学生恋爱观调查问卷',
        involve: '八一班, 八二班, 七一班',
        type: '问卷类型',
        status: true,
        reply: '30',
        author: '李平',
        star: true,
        date: new Date()
      },
      {
        id: '002',
        name: '嗨呀,好想要刘云龙啊',
        involve: '全体学生',
        status: false,
        reply: '30',
        author: '富从意',
        date: new Date()
      },
      {
        id: '003',
        name: '我薛剪学历到底是不是小学',
        involve: '八年级组, 九年级组',
        status: false,
        reply: '30',
        author: '薛剪',
        date: new Date()
      },
      {
        id: '004',
        name: '不确定是不是这里',
        involve: '八年级组',
        status: false,
        reply: '30',
        author: '薛剪',
        date: new Date()
      },
      {
        id: '005',
        name: '我看到几个人站在一起',
        involve: '八年级组',
        status: false,
        reply: '30',
        author: '薛剪',
        date: new Date()
      },
      {
        id: '006',
        name: '他们拿着剪刀',
        involve: '八年级组',
        status: false,
        reply: '30',
        author: '薛剪',
        date: new Date()
      },
      {
        id: '007',
        name: '摘走我的行李',
        involve: '八年级组',
        status: false,
        reply: '30',
        author: '薛剪',
        date: new Date()
      }
    ]
  },
  action: {
    changeQuestionsAction(state, { payload }) {
      state.questions = payload
    }
  }
})

export default questionnaireSlice.reducer
