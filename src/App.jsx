import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import NavBar from './NavBar'
import SignUp from './SignUp'
import Home from './Home'
import About from './About'
import ForgotPassword from './ForgotPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChangePassword from './ChangePassword'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/fp' element={<ForgotPassword/>}></Route>
            <Route path='/cp' element={<ChangePassword/>}></Route>
          </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
