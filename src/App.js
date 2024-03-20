import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Daily from './Daily'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path='/Daily' element={<Daily />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
