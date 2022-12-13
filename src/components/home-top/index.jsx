import React, { memo, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeTopStyle } from './style'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'

import { Select } from 'antd'

const HomeTop = memo((props) => {
  const {
    title = '问卷列表',
    sort1 = '发放数量',
    sort2 = '完成数量',
    addText = '新增问卷',
    placeholderSearch = '请输入姓名',
    options = [],
    optionsTootip = '请选择',
    changeOption,
    defaultValue = '七一班',
    plus = '',
    searchUser
  } = props
  const navigate = useNavigate()

  // 筛选小选项
  const handleChange = useCallback(
    (value) => {
      if (changeOption) {
        changeOption(value)
      }
    },
    [changeOption]
  )

  // 改变搜索框的值
  const searchValRef = useRef('')
  const setValueChange = useCallback((e) => {
    searchValRef.current = e.target.value
  }, [])

  // 获取搜索框的值
  const handleSearchClick = useCallback(() => {
    if (searchUser) {
      searchUser(searchValRef.current)
    }
  }, [searchUser])

  // 点击了新增问卷
  const handleAddQuestionnaire = useCallback(() => {
    navigate('/home/add')
  }, [navigate])
  return (
    <HomeTopStyle>
      <div className="left">
        <h2 className="title">{title}</h2>
        {options.length ? (
          <Select
            placeholder={optionsTootip}
            style={{ width: 120, position: 'relative', top: '-3px', paddingLeft: '6px' }}
            onChange={handleChange}
            defaultValue={defaultValue}
            options={options}
          />
        ) : (
          ''
        )}
        <span className="plus">{plus ? plus.map((item, index) => <span key={index}>{item}</span>) : ''}</span>
      </div>
      <div className="right">
        <div className="sort sort-v1">
          <span className="name">{sort1}</span>
          <img className="sx" src={require('@/assets/image/sx_dx_f1.png')} alt="" />
        </div>
        <div className="sort sort-v2">
          <span className="name">{sort2}</span>
          <img className="sx" src={require('@/assets/image/sx_dx_f1.png')} alt="" />
        </div>
        <div className="search">
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 180,
              height: 24,
              borderRadius: 10
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholderSearch} onChange={(e) => setValueChange(e)} />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => handleSearchClick()}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="add-btn" onClick={() => handleAddQuestionnaire()}>
          <Button variant="contained">{addText}</Button>
        </div>
      </div>
    </HomeTopStyle>
  )
})

export default HomeTop
