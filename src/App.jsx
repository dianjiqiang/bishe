import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { AppStyle } from './AppStyle'
import routes from './router'

import { getHomeTitle } from './servers'

const App = memo(() => {
  getHomeTitle().then((res) => {
    console.log(res)
  })
  return (
    <AppStyle>
      <div className="bg-bilibili">
        {/* <video src={require('@/assets/video/bg.mp4')} autoPlay loop muted></video> */}
      </div>

      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </AppStyle>
  )
})

export default App
