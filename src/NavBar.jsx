import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useRef, useEffect} from 'react'

const NavBar = () => {
    const [username, setUsername] = useState('');
    useEffect(() => {
      let un = localStorage.getItem("un");
      if (un !== null) {
        setUsername(un);
      }
    }, [])
    
  return (
    <div className='nav'>
        {(username === null) && (<Link to='/'>SignUp</Link>) }
        {(username === null) && (<Link to='/login'>Login</Link>) }
        {(username === null) && (<Link to='/fp'>Forgot Password</Link>) }

        {(username !== null) && (<Link to='/home'>Home</Link>) }
        {(username !== null) && (<Link to='/about'>About</Link>) }
        {(username !== null) && (<Link to='/cp'>Change Password</Link>) }
        

    </div>
  )
}

export default NavBar