import React from 'react'
import AppHeader from '../../components/Header'
import AppFooter from '../../components/Footer'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.ElementType = (props: Props) => {
  const { children } = props
  return (
    <div className="main-layout">
      <div>
        <AppHeader />
      </div>
      <div className="layout-children">
        {children}
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  )
}

export default MainLayout
