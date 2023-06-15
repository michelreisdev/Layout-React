import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import MainLayout from '../pages/layouts/MainLayout'
import { PATH } from '../constants/paths'

const Home = lazy(async () => await import('../components/Home'))

const helmetContext = {}
const AppRoute: React.FC = () => {
  return (<BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>React TS</title>
          <link
            rel="canonical"
            href="https://reactts-boilerplate.netlify.app/"
          />
      </Helmet>
    </HelmetProvider >
    <MainLayout>
      <Suspense fallback={<>Loading</>}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />}/>
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>)
}

export default AppRoute
