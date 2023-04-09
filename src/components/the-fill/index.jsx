import React, { memo, useCallback, useState } from 'react'
import { TheFillStyle } from './style'
import TextField from '@mui/material/TextField'

const TheFill = memo((props) => {
  const { itemData, theStudent, studentEdit } = props

  // 属性值发生改变
  const [values, setValues] = useState(undefined)
  const changeValues = useCallback(
    (e) => {
      setValues(e.target.value)
      if (theStudent) {
        studentEdit(itemData.qid, e.target.value)
      }
    },
    [theStudent, studentEdit, itemData]
  )
  return (
    <TheFillStyle>
      <h4 className="title">
        <span className="qid">{itemData.qid}、</span>
        <span className="text">{itemData.title}</span>
        <span className="score">
          {theStudent ? (
            ''
          ) : itemData.score ? (
            <span>
              <span>(</span>
              {itemData.score}
              <span>)分</span>
            </span>
          ) : (
            ''
          )}
        </span>
      </h4>
      <div className="shuru">
        <TextField
          label="请在此处书写答案"
          disabled={!theStudent}
          variant="standard"
          size="small"
          value={values}
          onChange={(e) => changeValues(e)}
        />
      </div>
    </TheFillStyle>
  )
})

export default TheFill
