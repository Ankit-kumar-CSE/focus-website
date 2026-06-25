import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Entry from './pages/entry'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Licenses from './pages/legal/Licenses'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Entry />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/licenses' element={<Licenses />} />
          {/* Any unknown path → back to the landing page */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
