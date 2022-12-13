import React, { memo, useState } from 'react'
import { EditRadioStyle } from './style'

import { Button, Input } from 'antd'
import { useCallback } from 'react'
import classNames from 'classnames'

const EditRadio = memo((props) => {
  const { handleSubmitClick, noFraction } = props
  const [options, setOptions] = useState([{ value: '', label: '' }])

  //修改了标题
  const [titleVal, setTitleVal] = useState('')
  const changeTitle = useCallback((e) => {
    setTitleVal(e.target.value)
  }, [])

  // 修改了分值
  const [scoreVal, setScoreVal] = useState(0)
  const changeScore = useCallback((e) => {
    setScoreVal(e.target.value)
  }, [])

  // 点击了添加选项
  const handleAddClick = useCallback(() => {
    const newOptions = [...options]
    if (noFraction) {
      newOptions.push({ value: '', label: '' })
    } else {
      newOptions.push({ value: '', score: 0, label: '' })
    }
    setOptions(newOptions)
  }, [options, noFraction])

  // 改变了题目选项
  const changeVal = useCallback(
    (e, index) => {
      const newOptions = [...options]
      newOptions[index].value = e.target.value
      newOptions[index].label = e.target.value
      setOptions(newOptions)
    },
    [options]
  )

  // 改变了题目分值
  const changeValScore = useCallback(
    (e, index) => {
      const newOptions = [...options]
      newOptions[index].score = e.target.value
      setOptions(newOptions)
    },
    [options]
  )

  //提交了表单
  const handleClick = useCallback(() => {
    let newObj = {}
    if (noFraction) {
      newObj = {
        title: titleVal,
        options,
        type: 'radio'
      }
    } else {
      newObj = {
        title: titleVal,
        score: scoreVal,
        options,
        type: 'radio'
      }
    }
    console.log(newObj)
    handleSubmitClick(newObj)
  }, [titleVal, scoreVal, options, handleSubmitClick, noFraction])
  return (
    <EditRadioStyle>
      <div className="title">
        <label>
          <span>题目 : </span>
          <Input
            className={classNames({ inputs: !noFraction, input: noFraction })}
            placeholder="请输入题目"
            value={titleVal}
            onChange={(e) => changeTitle(e)}
          />
        </label>
        {!noFraction ? (
          <label>
            <span style={{ paddingLeft: '20px' }}>分值 : </span>
            <Input className="inputs-scro" type="number" value={scoreVal} onChange={(e) => changeScore(e)} />
          </label>
        ) : (
          ''
        )}
      </div>
      <div className="options">
        {options.map((item, index) => (
          <div className="option" key={index}>
            <span className="text">选项{index + 1}、</span>
            <Input
              className={classNames({ inputs: !noFraction, input: noFraction })}
              placeholder="选项"
              value={item.value}
              onChange={(e) => changeVal(e, index)}
            />
            {!noFraction ? (
              <Input
                className="inputs-scro"
                type="number"
                placeholder="分值"
                defaultValue={item.score}
                value={item.score}
                onChange={(e) => changeValScore(e, index)}
              />
            ) : (
              ''
            )}
            {index + 1 === options.length ? (
              <Button onClick={() => handleAddClick()} className="xxxx">
                {' '}
                + 添加选项
              </Button>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
      <div className="qd">
        <Button onClick={() => handleClick()}>确定添加</Button>
      </div>
    </EditRadioStyle>
  )
})

export default EditRadio
