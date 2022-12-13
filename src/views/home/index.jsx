import React, { memo, Suspense } from 'react'
import AppHeader from '../../components/app-header'
import { Outlet } from 'react-router-dom'
import NavMenu from '../../components/nav-memu'
import { HomeStyle } from './style'

const Home = memo(() => {
  return (
    <HomeStyle>
      <NavMenu></NavMenu>
      <AppHeader></AppHeader>
      <div className="content">
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </HomeStyle>
  )
})

export default Home
