import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import injectContext from './store/appContext'

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(Layout);
