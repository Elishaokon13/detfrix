import React from 'react'
import Home from '../../../pages/Home'
import NotFound from '../../../pages/NotFound'
import SignIn from '../../../pages/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
</Router>
  )
}

export default Routing