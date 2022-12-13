import React, { memo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FractionStyle } from './style'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Button } from '@mui/material'

import TheAnswer from '@/components/the-answer'
import TheChoice from '@/components/the-choice'
import TheFill from '@/components/the-fill'
import TheRadio from '@/components/the-radio'
import EditAnswer from '@/components/edit-answer'
import EditChoice from '@/components/edit-choice'
import EditFill from '@/components/edit-fill'
import EditRadio from '@/components/edit-radio'
import { Input, TreeSelect } from 'antd'

import { classData } from './class.data.config'

const { SHOW_PARENT } = TreeSelect

const Fraction = memo(() => {
  // 问卷标题

  // 班级选择
  const [value, setValue] = useState(['全体学生'])
  const onChange = (newValue) => {
    setValue(newValue)
  }
  const tProps = {
    treeData: classData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: '请选择班级'
  }

  // 控制新增题目出现选项
  const [topicType, setTopicType] = useState(false)

  // 题目的类型
  const [tmType, setTmType] = useState('')

  //点击了新增题目
  const handleAddClick = useCallback(() => {
    setTopicType(!topicType)
  }, [topicType])

  // 切换了题目类型
  const handleChangeClick = useCallback(
    (e) => {
      setTmType(e.target.value)
      setTopicType(!topicType)
    },
    [topicType]
  )

  // 具体题目列表
  const [topicList, setTopicList] = useState([
    {
      qid: 1,
      type: 'radio',
      title: '您认为现在青少年最普遍的问题是什么?',
      score: 20,
      options: [
        {
          value: '早熟',
          label: '早熟',
          score: 10
        },
        {
          value: '看片多',
          label: '看片多',
          score: 20
        },
        {
          value: '晚睡',
          label: '晚睡',
          score: 0
        }
      ]
    },
    {
      qid: 2,
      type: 'choice',
      title: '您认为现在青少年最普遍的问题是什么?',
      score: 20,
      options: [
        {
          value: '早熟',
          label: '早熟',
          score: 10
        },
        {
          value: '看片多',
          label: '看片多',
          score: 10
        },
        {
          value: '晚睡',
          label: '晚睡',
          score: 0
        },
        {
          value: '谈恋爱',
          label: '谈恋爱',
          score: 0
        }
      ]
    },
    {
      qid: 3,
      type: 'fill',
      title: '您认为现在青少年最普遍的问题是什么?',
      score: 20,
      value: ''
    },
    {
      qid: 4,
      type: 'answer',
      title: '您认为现在青少年最普遍的问题是什么?',
      score: 20,
      value: ''
    }
  ])

  // 获取到子组件传递过来的值
  const handleSubmitClick = useCallback(
    (payload) => {
      const newTopicList = [...topicList]
      payload.qid = newTopicList.length + 1
      newTopicList.push(payload)
      setTopicList(newTopicList)

      //清空数据
      setTopicType(false)
      setTmType('')
    },
    [topicList]
  )

  // 监听新增题目切换
  const [editElement, setEditElement] = useState('')
  useEffect(() => {
    switch (tmType) {
      case 'answer':
        setEditElement(<EditAnswer />)
        break
      case 'radio':
        setEditElement(<EditRadio handleSubmitClick={handleSubmitClick}></EditRadio>)
        break
      case 'fill':
        setEditElement(<EditFill></EditFill>)
        break
      case 'choice':
        setEditElement(<EditChoice></EditChoice>)
        break
      default:
        setEditElement(<span></span>)
    }
  }, [tmType, handleSubmitClick])

  return (
    <FractionStyle>
      <div className="title">
        <span>问卷标题 : </span>
        <Input className="title-input" placeholder="请输入问卷标题"></Input>
        <span style={{ paddingLeft: '10px' }}>发布班级:</span>
        <TreeSelect className="tree-select" {...tProps} />
      </div>
      <div className="topic">
        {topicList.map((item) => {
          switch (item.type) {
            case 'answer':
              return <TheAnswer key={item.qid} itemData={item} />
            case 'radio':
              return <TheRadio key={item.qid} itemData={item}></TheRadio>
            case 'fill':
              return <TheFill key={item.qid} itemData={item}></TheFill>
            case 'choice':
              return <TheChoice key={item.qid} itemData={item}></TheChoice>
            default:
              return <span key={item.qid}></span>
          }
        })}
      </div>
      <div className="edit">{editElement}</div>
      <div className="xuanx">
        {topicType === true ? (
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={tmType}
            onChange={(e) => handleChangeClick(e)}
          >
            <FormControlLabel value="radio" control={<Radio />} label="单选题" />
            <FormControlLabel value="choice" control={<Radio />} label="多选题" />
            <FormControlLabel value="fill" control={<Radio />} label="填空题" />
            <FormControlLabel value="answer" control={<Radio />} label="简答题" />
          </RadioGroup>
        ) : (
          ''
        )}
      </div>
      <div className="btn">
        <Button variant="contained" onClick={() => handleAddClick()} sx={{ marginTop: '20px' }}>
          +
        </Button>
      </div>
    </FractionStyle>
  )
})

export default Fraction
