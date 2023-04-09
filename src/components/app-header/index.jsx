import React, { memo } from 'react'
import { AppHeaderStyle } from './style'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Avatar } from '@mui/material'
import Link from '@mui/material/Link'

const AppHeader = memo(() => {
  return (
    <AppHeaderStyle>
      <div className="left">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            问卷列表
          </Link>
          <Typography color="text.primary">问卷汇总</Typography>
        </Breadcrumbs>
      </div>
      <div className="center">智能问卷系统</div>
      <div className="right">
        <Avatar className="user" src={require('@/assets/image/user_icon.jpeg')} alt="" />
        <span className="name">刘云龙</span>
      </div>
    </AppHeaderStyle>
  )
})

export default AppHeader
