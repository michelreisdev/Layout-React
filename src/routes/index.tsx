import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import MainLayout from '../pages/layouts/MainLayout'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading'

const Home = lazy(async () => await import('../components/Home'))

const helmetContext = {}
const AppRoute: React.FC = () => {
  return (<BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
          <meta charSet="utf-8" />
          <title>React TS</title>
          <link
            rel="canonical"
            href="https://reactts-boilerplate.netlify.app/"
          />
      </Helmet>
    </HelmetProvider >
    <MainLayout>
      <Suspense fallback={<Loading/>}>
        <Routes>
          {/* Static pages routes */}
          <Route path={PATH.HOME} element={<Home />}/>
          {/* Error routes */}
          <Route path={PATH.NotFoundPage} element={<>Não encontrado</>}/>
        </Routes>
      </Suspense>
    </MainLayout>
  </BrowserRouter>)
}

export default AppRoute
