import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
