import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './module/home'
import questionnaireReducer from './module/questionnaire'
import studentsReducer from './module/students'

const store = configureStore({
  reducer: {
    home: homeReducer,
    students: studentsReducer,
    questionnaire: questionnaireReducer
  }
})

export default store
