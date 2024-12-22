import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const About = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    useEffect(() => {
      let un = localStorage.getItem("un");
      if (un !== null) {
        setUsername(un);
      }
      else{
        nav('/login');
      }
    },[])
  return (
    <div>
        <center>
            <NavBar/>
            <h1> About Page</h1>
            <h2> {username} Is Here !</h2>
        </center>
    </div>
  )
}

export default About