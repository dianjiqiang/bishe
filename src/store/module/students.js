import { createSlice } from '@reduxjs/toolkit'

const studentsSlice = createSlice({
  name: 'student',
  initialState: {
    seven: [
      {
        name: '七一班',
        headTeacher: '李平',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: '旅行者',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            studentID: '2019108107',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          },
          {
            key: '12',
            studentID: '2019108107',
            name: '奎爷',
            gender: '男',
            finished: 22,
            recently: '哥哥猛不猛',
            quality: '差'
          },
          {
            key: '13',
            studentID: '2019108107',
            name: '刘云龙',
            gender: '男',
            finished: 21,
            recently: '妈的,摆',
            quality: '差'
          },
          {
            key: '14',
            studentID: '2019108107',
            name: '李云龙',
            gender: '男',
            finished: 23,
            recently: '谁他妈和我名字这么像',
            quality: '差'
          }
        ]
      },
      {
        name: '七二班',
        headTeacher: '薛检',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: '高海千歌',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          }
        ]
      },
      {
        name: '七三班',
        headTeacher: '富从意',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: 'Miku',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            studentID: '2019108107',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          }
        ]
      }
    ],
    eight: [
      {
        name: '八一班',
        headTeacher: '刘云龙',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: '旅行者',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            studentID: '2019108107',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          },
          {
            key: '12',
            studentID: '2019108107',
            name: '奎爷',
            gender: '男',
            finished: 22,
            recently: '哥哥猛不猛',
            quality: '差'
          },
          {
            key: '13',
            studentID: '2019108107',
            name: '刘云龙',
            gender: '男',
            finished: 21,
            recently: '妈的,摆',
            quality: '差'
          },
          {
            key: '14',
            studentID: '2019108107',
            name: '李云龙',
            gender: '男',
            finished: 23,
            recently: '谁他妈和我名字这么像',
            quality: '差'
          }
        ]
      },
      {
        name: '八二班',
        headTeacher: '薛检',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: '高海千歌',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          }
        ]
      },
      {
        name: '八三班',
        headTeacher: '富从意',
        distributed: 31,
        allNumber: 15,
        students: [
          {
            key: '1',
            studentID: '2019108107',
            name: 'Miku',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '2',
            studentID: '2019108107',
            name: '莫娜',
            gender: '女',
            finished: 30,
            recently: '你是妹妹还是哥哥',
            quality: '优'
          },
          {
            key: '3',
            studentID: '2019108107',
            name: '琴',
            gender: '女',
            finished: 29,
            recently: '弹琴是不是吹箫',
            quality: '中'
          },
          {
            key: '4',
            studentID: '2019108107',
            name: '派蒙',
            gender: '女',
            finished: 27,
            recently: '我不是应急食品',
            quality: '差'
          },
          {
            key: '5',
            studentID: '2019108107',
            name: '迪卢克',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '6',
            studentID: '2019108107',
            name: '温迪',
            gender: '男',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '7',
            studentID: '2019108107',
            name: '可莉',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '8',
            studentID: '2019108107',
            name: '阿贝多',
            gender: '男',
            finished: 15,
            recently: '听说我是废物',
            quality: '差'
          },
          {
            key: '9',
            studentID: '2019108107',
            name: '优菈',
            gender: '女',
            finished: 31,
            recently: '暴雪到底是不是傻逼',
            quality: '优'
          },
          {
            key: '10',
            studentID: '2019108107',
            name: '申鹤',
            gender: '女',
            finished: 20,
            recently: '你穿着暴露吗?',
            quality: '差'
          },
          {
            key: '11',
            studentID: '2019108107',
            name: '甘雨',
            gender: '女',
            finished: 22,
            recently: '你和申鹤是不是传的一条裤子',
            quality: '差'
          }
        ]
      }
    ]
  },
  action: {
    changeSevenAction(state, { payload }) {
      state.seven = payload
    }
  }
})

export default studentsSlice.reducer

export const { changeSevenAction } = studentsSlice.actions
