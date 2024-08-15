import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Search from './components/Search'
import CreatePost from './components/CreatePost'
import Settings from './components/Settings'
import Message from './components/Message'
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
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/createpost' element={<CreatePost />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/message' element={<Message />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
