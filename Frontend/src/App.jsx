import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Settings from './components/Settings'
import Message from './components/Message'
import Logout from './components/Logout'
import Profile from './components/Profile'
import OtherProfile from './components/OtherProfile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'
import { useAuth } from './storage/Auth';
import ChatWithAI from './components/ChatWithAI'

const App = () => {

  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <ChatWithAI />
      <Routes>
        <Route exact path='/signup' element={isLoggedIn ? <Home /> : <Signup />} />
        <Route exact path='/login' element={isLoggedIn ? <Home /> : <Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/createpost' element={isLoggedIn ? <CreatePost /> : <Login />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/message' element={isLoggedIn ? <Message /> : <Login />} />
        <Route exact path='/logout' element={isLoggedIn ? <Logout /> : <Login />} />
        <Route exact path='/profile' element={isLoggedIn ? <Profile /> : <Login />} />
        <Route exact path='/viewprofile/:id' element={<OtherProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
