import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from './style'
import Card from '@/base-ui/card'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login = memo(() => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const changeUser = useCallback((newVal, flag) => {
    if (flag) {
      setUser(newVal.target.value)
    } else {
      setPassword(newVal.target.value)
    }
  }, [])
  const gotoPath = useCallback(
    (path) => {
      navigate(path)
    },
    [navigate]
  )
  return (
    <LoginStyle>
      <div className="wrapper">
        <Card>
          <div className="title">
            <h2>智能投票管理系统</h2>
          </div>
          <div className="logins">
            <label>
              <span className="ch-user">账号: </span>
              <TextField
                className="user"
                label="请输入您的账号"
                variant="outlined"
                size="small"
                value={user}
                onChange={(e) => changeUser(e, true)}
              />
            </label>
            <label>
              <span className="ch-password">密码: </span>
              <TextField
                className="user"
                label="请输入您的密码"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                onChange={(e) => changeUser(e, false)}
              />
            </label>
          </div>
          <div className="btns">
            <span className="forget" onClick={() => gotoPath('/forgetps')}>
              忘记密码?
            </span>
            <Button variant="outlined" size="large" onClick={() => gotoPath('/register')}>
              注册
            </Button>
            <Button variant="contained" size="large" onClick={() => gotoPath('/home')}>
              登录
            </Button>
          </div>
        </Card>
      </div>
    </LoginStyle>
  )
})

export default Login
