import React from "react";
import NavBar from "./NavBar";
import { useState, useRef, useEffect } from "react";
import app from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un !== null) {
      nav("/home");
    }
  }, []);

  const rUsername = useRef();
  const rPassword = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const hUsername = (e) => {
    setUsername(e.target.value);
  };

  const hPassword = (e) => {
    setPassword(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((res) => {
        localStorage.setItem("un", username);
        nav("/home");
      })
      .catch((err) => {
        setMsg("Issue in Login" + err);
      });
  };

  return (
    <div>
      <center>
        <NavBar />
        <h1> Login Page </h1>
        <form onSubmit={save}>
          <input
            type="email"
            placeholder="Enter Your Email"
            ref={rUsername}
            onChange={hUsername}
            value={username}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            ref={rPassword}
            onChange={hPassword}
            value={password}
          />
          <br />
          <br />
          <input type="submit" value="Login"></input>
        </form>
        <h2>{msg}</h2>
      </center>
    </div>
  );
};

export default Login;
