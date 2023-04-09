import React, { memo, Fragment, useCallback } from 'react'
import { QuestionnaireListStyle } from './style'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import Card from '@/base-ui/card'

const QuestionnaireList = memo((props) => {
  const { questions, isStudent } = props
  const navigate = useNavigate()

  // 填写问卷
  const goToFill = useCallback(
    (id) => {
      navigate('/home/students/studentfill?id=' + id)
    },
    [navigate]
  )
  return (
    <QuestionnaireListStyle>
      {questions.map((item) => (
        <div className="ben-card" key={item.id}>
          <Card className="ben-card">
            <div className="el-card">
              <div className="top">
                <div className="left">
                  <span className="name">{item.name}</span>
                  <span className="involve">({item.involve})</span>
                </div>
                <div className="right">
                  <span className={classNames('status', { isfabu: item.status })}>
                    {item.status ? ' · 已发布' : ' · 未发布'}
                  </span>
                  <span className="author">
                    <span>发布老师:</span>
                    <span className="name">{item.author}</span>
                  </span>
                  <span className="reply">
                    <span className="text">答卷:</span>
                    <span className="number">{item.reply}</span>
                  </span>
                  <span className="date">{dayjs(item.date).format('MM月DD日HH:mm')}</span>
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  {!isStudent ? (
                    <Fragment>
                      <div className="design">
                        <img src={require('@/assets/image/design_icon.png')} alt="设计问卷" />
                        <span className="text">设计问卷</span>
                      </div>
                      <div className="send">
                        <img src={require('@/assets/image/send_icon.png')} alt="发送问卷" />
                        <span className="text">发送问卷</span>
                      </div>
                      <div className="download">
                        <img src={require('@/assets/image/download_icon.png')} alt="下载问卷" />
                        <span className="text">下载问卷</span>
                      </div>
                    </Fragment>
                  ) : (
                    <div className="design" onClick={() => goToFill(item.id)}>
                      <img src={require('@/assets/image/design_icon.png')} alt="设计问卷" />
                      <span className="text">填写问卷</span>
                    </div>
                  )}
                </div>
                <div className="right">
                  <div className="start">
                    <img src={require('@/assets/image/start_icon.png')} alt="发布" />
                    <span className="text">发布</span>
                  </div>
                  <div className="copy">
                    <img src={require('@/assets/image/copy_icon.png')} alt="复制" />
                    <span className="text">复制</span>
                  </div>
                  <div className="delete">
                    <img src={require('@/assets/image/delete_icon.png')} alt="删除" />
                    <span className="text">删除</span>
                  </div>
                  <div className="star">
                    <img src={require('@/assets/image/star_icon.png')} alt="收藏" />
                    <span className="text">收藏</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </QuestionnaireListStyle>
  )
})

export default QuestionnaireList
