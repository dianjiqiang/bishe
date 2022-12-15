import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { AppStyle } from './AppStyle'
import routes from './router'

const App = memo(() => {
  return (
    <AppStyle>
      <div className="bg-bilibili">
        {/* <video src={require('@/assets/video/bg.mp4')} autoPlay loop muted></video> */}
        <img src={require('@/assets/video/bg.jpg')} alt="" />
      </div>

      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </AppStyle>
  )
})

export default App
