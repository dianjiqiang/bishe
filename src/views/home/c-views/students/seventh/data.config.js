export const dataKey = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    width: '7%'
  },
  {
    title: '学号',
    dataIndex: 'studentID',
    key: 'studentID',
    width: '12%'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '10%'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    width: '10%'
  },
  {
    title: '完成问卷数量',
    dataIndex: 'finished',
    key: 'finished',
    width: '15%',
    sorter: {
      compare: (a, b) => a.finished - b.finished,
      multiple: 1
    }
  },
  {
    title: '最近填写问卷',
    dataIndex: 'recently',
    key: 'recently',
    width: '28%'
  },
  {
    title: '问卷质量评定',
    dataIndex: 'quality',
    key: 'quality',
    render: (text) => {
      if (text === '差') {
        return <span style={{ color: '#f37335' }}>{text}</span>
      } else if (text === '中') {
        return <span style={{ color: '#fdbf2f' }}>{text}</span>
      } else {
        return <span>{text}</span>
      }
    },
    width: '15%'
  }
  // {
  //   title: '查看详情',
  //   dataIndex: 'detail',
  //   key: 'detail',
  //   render: (text) => {
  //     return <button>查看详情</button>
  //   }
  // }
]
