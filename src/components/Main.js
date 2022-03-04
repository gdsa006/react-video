import React from 'react'
import Login from '../Login'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Main = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Main
