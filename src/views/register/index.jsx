import React, { memo, useCallback, useState } from 'react'
import { RegisterStyle } from './style'
import { useNavigate } from 'react-router-dom'

import Card from '@/base-ui/card'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Registre = memo(() => {
  // 表单逻辑
  let [studentMessage, setStudentMessage] = useState({
    name: '',
    password: '',
    classname: '',
    studentId: '',
    idCard: ''
  })
  const changeStudent = useCallback(
    (e, type) => {
      switch (type) {
        case 'name':
          setStudentMessage({ ...studentMessage, name: e.target.value })
          break
        case 'password':
          setStudentMessage({ ...studentMessage, password: e.target.value })
          break
        case 'classname':
          setStudentMessage({ ...studentMessage, classname: e.target.value })
          break
        case 'studentId':
          setStudentMessage({ ...studentMessage, studentId: e.target.value })
          break
        case 'idCard':
          setStudentMessage({ ...studentMessage, idCard: e.target.value })
          break
        default:
          break
      }
    },
    [studentMessage]
  )
  //跳转
  const navigate = useNavigate()
  const regiserClick = useCallback(() => {
    navigate('/login')
  }, [navigate])
  return (
    <RegisterStyle>
      <div className="wrapper">
        <Card>
          <div className="title">
            <h2>注册</h2>
          </div>
          <div className="logins">
            <label>
              <span className="ch-password">姓名: </span>
              <TextField
                className="user"
                label="请输入您的姓名"
                variant="outlined"
                value={studentMessage.name}
                onChange={(e) => changeStudent(e, 'name')}
                size="small"
              />
            </label>
            <label>
              <span className="ch-password">班级: </span>
              <TextField
                className="user"
                label="请输入您的班级"
                variant="outlined"
                value={studentMessage.classname}
                onChange={(e) => changeStudent(e, 'classname')}
                size="small"
              />
            </label>
            <label>
              <span className="ch-user">学号: </span>
              <TextField
                className="user"
                label="请输入您的学号"
                variant="outlined"
                value={studentMessage.studentId}
                onChange={(e) => changeStudent(e, 'studentId')}
                size="small"
              />
            </label>
            <label>
              <span className="ch-password">密码: </span>
              <TextField
                className="user"
                label="请输入您的密码"
                variant="outlined"
                value={studentMessage.password}
                onChange={(e) => changeStudent(e, 'password')}
                type="password"
                size="small"
              />
            </label>
            <label>
              <span className="ch-password">身份证: </span>
              <TextField
                className="user"
                label="请输入您的身份证"
                variant="outlined"
                value={studentMessage.idCard}
                onChange={(e) => changeStudent(e, 'idCard')}
                size="small"
              />
            </label>
          </div>
          <div className="btns">
            <Button variant="outlined" size="large" onClick={regiserClick}>
              确认注册
            </Button>
          </div>
        </Card>
      </div>
    </RegisterStyle>
  )
})

export default Registre
