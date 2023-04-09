import React, { memo, useCallback, useState } from 'react'
import { StudentFillStyle } from './styled'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'

import TheAnswer from '@/components/the-answer'
import TheChoice from '@/components/the-choice'
import TheFill from '@/components/the-fill'
import TheRadio from '@/components/the-radio'

const StudentFill = memo(() => {
  const navigate = useNavigate()
  const [topicList, setTopicList] = useState([
    {
      qid: 1,
      type: 'radio',
      title: '您认为现在青少年最普遍的问题是什么?',
      score: 20,
      value: '',
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
      value: [],
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
  // 学生修改问卷属性
  const studentEdit = useCallback(
    (qid, value) => {
      const newTopicList = [...topicList]
      newTopicList[qid - 1].value = value
      setTopicList(newTopicList)
      console.log(topicList)
    },
    [topicList]
  )
  // 改卷/提交
  const onSubMit = useCallback(() => {
    let score = 0
    let totalScore = 0
    topicList.forEach((item) => (totalScore += item.score))
    console.log(totalScore)
    topicList.forEach((item) => {
      if (item.type === 'choice') {
        let optionScore = 0
        item.options.forEach((child) => {
          if (item.value.indexOf(child.value) !== -1) {
            optionScore += child.score
          }
        })
        if (optionScore >= item.score) {
          score += item.score
        } else {
          score += optionScore
        }
      } else if (item.type === 'radio') {
        let optionScore = 0
        item.options.forEach((child) => {
          if (item.value === child.value) {
            optionScore += child.score
          }
        })
        if (optionScore >= item.score) {
          score += item.score
        } else {
          score += optionScore
        }
      } else {
        if (item.value) {
          score += item.score
        }
      }
    })
    score = (100 * score) / totalScore
    navigate('/home/students/score?score=' + score)
  }, [navigate, topicList])
  return (
    <StudentFillStyle>
      <div className="content-fill">
        <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>关于青少年如何养生调查问卷</h3>
        <div className="topic">
          {topicList.map((item) => {
            switch (item.type) {
              case 'answer':
                return <TheAnswer key={item.qid} itemData={item} theStudent={true} studentEdit={studentEdit} />
              case 'radio':
                return <TheRadio key={item.qid} itemData={item} theStudent={true} studentEdit={studentEdit}></TheRadio>
              case 'fill':
                return <TheFill key={item.qid} itemData={item} theStudent={true} studentEdit={studentEdit}></TheFill>
              case 'choice':
                return (
                  <TheChoice key={item.qid} itemData={item} theStudent={true} studentEdit={studentEdit}></TheChoice>
                )
              default:
                return <span key={item.qid}></span>
            }
          })}
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Button variant="contained" onClick={() => onSubMit()}>
            提交
          </Button>
        </div>
      </div>
    </StudentFillStyle>
  )
})

export default StudentFill
