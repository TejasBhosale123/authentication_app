import React from 'react'
import NavBar from './NavBar';
import { useState, useRef, useEffect } from 'react';
import app from './Firebase';
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const nav = useNavigate();
    useEffect(() => {
      let un = localStorage.getItem("un");
      if (un !== null) {
        nav('/home');
      }
    }, [])

    const rUsername = useRef();
    const rPassword = useRef();
    const rConfirmPassword = useRef();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');    
    const[confirmPassword, setConfirmPassword] = useState('');
    const[msg, setMsg] = useState('');

    const hUsername = (e) => {
        setUsername(e.target.value);
    }

    const hPassword = (e) =>{
        setPassword(e.target.value);
    }

    const hConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }

    const save = (e) =>{
        e.preventDefault();
        if(password === confirmPassword){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, username, password)
            .then(res => {
                localStorage.setItem("un", username);
                nav('/login');
            })
            .catch(err => {
                setMsg("Issue in Sign Up" + err);
            });
        }
        else{
            setMsg("Password and Confirm Password does not match");
            setPassword("")
            setConfirmPassword("")
            rPassword.current.focus();
        }
    }
    
  return (
    <div>
        <center>
            <NavBar/>
            <h1> Sign Up Page</h1>
            <form onSubmit={save}>
                <input ref={rUsername} type="text" placeholder="Enter Username" onChange={hUsername} value={username}/><br/><br/>
                <input ref={rPassword} type="password" placeholder="Enter Password" onChange={hPassword} value={password}/><br/><br/>
                <input ref={rConfirmPassword} type="password" placeholder="Confirm Password" onChange={hConfirmPassword} value={confirmPassword}/><br/><br/>
                <input type="submit" value="Sign Up"/><br/>
            </form>
            <h2>{msg}</h2>
        </center>
    </div>
  )
}

export default SignUp