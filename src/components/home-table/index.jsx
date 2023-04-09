import React, { memo } from 'react'
import { HomeTableStyle } from './style'
// import Card from '@/base-ui/card'
import { Table } from 'antd'

const HomeTable = memo((props) => {
  const { tableData = [], dataKey = [] } = props

  // const [copyTabData, setCopyData] = useState(tableData)
  // useEffect(() => {
  //   setCopyData(tableData)
  // }, [tableData])
  return (
    <HomeTableStyle>
      <Table
        className="tabs"
        dataSource={tableData}
        columns={dataKey}
        pagination={{
          pageSize: 10
        }}
      ></Table>
    </HomeTableStyle>
  )
})

export default HomeTable
