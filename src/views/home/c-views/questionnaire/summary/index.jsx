import React, { memo, useCallback, useState, useRef } from 'react'
import { SummaryStyle } from './style'

import HomeTop from '@/components/home-top'
import QuestionnaireList from '@/components/questionnaire-list'
import { shallowEqual, useSelector } from 'react-redux'

const Summary = memo(() => {
  const { questions } = useSelector(
    (state) => ({
      questions: state.questionnaire.questions
    }),
    shallowEqual
  )

  // 获取子组件搜索框值
  const [questionsData, setQuestionsData] = useState(questions)
  const frontRef = useRef('')
  const searchText = useCallback(
    (payload) => {
      if (payload) {
        if (payload !== frontRef) {
          const newData = []
          questions.forEach((item) => {
            if (item.name.includes(payload)) {
              newData.push(item)
            }
          })
          setQuestionsData(newData)
        }
      } else {
        setQuestionsData(questions)
      }
      frontRef.current = payload
    },
    [questions]
  )
  return (
    <SummaryStyle>
      <HomeTop title="问卷总览" defaultValue="总览" placeholderSearch="请输入问卷名" searchUser={searchText}></HomeTop>
      <QuestionnaireList questions={questionsData}></QuestionnaireList>
    </SummaryStyle>
  )
})

export default Summary
