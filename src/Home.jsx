import React from 'react'
import NavBar from './NavBar'
import {useEffect, useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
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
    }, [])

    const lo = (e) =>{
        e.preventDefault();
        localStorage.removeItem("un");
        nav('/login');
    }
  return (
    <div>
        <center>
            <NavBar/>
            <h1> Home Page</h1>
            <h2> Welcome {username}</h2>
            <form onSubmit={lo}>
                <input type='submit' value='Logout'></input>
            </form>
        </center>
    </div>
  )
}

export default Home