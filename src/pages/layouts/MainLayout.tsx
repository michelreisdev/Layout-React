import React from 'react'
import AppHeader from '../../components/Header'
import AppFooter from '../../components/Footer'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.ElementType = (props: Props) => {
  const { children } = props
  return (
    <>
      <AppHeader />
      <section>{children}</section>
      <AppFooter />
    </>
  )
}

export default MainLayout
