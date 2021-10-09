import React , {useRef, useState} from 'react'
import {Alert} from 'react-bootstrap';
import {useHistory} from 'react-router';
import {FaGoogle, FaLinkedin, FaInstagram} from 'react-icons/fa';
import axios from "axios"
import '../Css/Signin.css'

export default function Signin() 
{
  const username = useRef();
  const password = useRef();
  const history = useHistory();
  const usernamelogin = useRef();
  const passwordlogin = useRef();
  const email = useRef();
  const [error,setError] = useState("");

  function signupfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }

  function signinfunc(e)
  {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }

  function signup(e)
  {
    e.preventDefault();
    let data = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    console.log(data);
    axios.post("http://localhost:5000/register", data)
    .then(res => {
      console.log(res);
      localStorage.setItem("username",res.data.username);
      history.push("/");
    })
    .catch(error => {
      console.log(error);
      setError(error);
    })
  }

  function login(e)
  {
    e.preventDefault();
    console.log(usernamelogin.current.value, passwordlogin.current.value);
    let data = {
      username: usernamelogin.current.value,
      password: passwordlogin.current.value,
    }
    axios.post("http://localhost:5000/login", data)
    .then(res => {
      console.log(res);
      localStorage.setItem("username",res.data.username);
      history.push("/");
    })
    .catch(error => {
      console.log(error);
      setError(error);
    })
  }

     return (
      <>
        <div className="container sc mt-5" id="container" style={{width: window.innerWidth-300}}>
        <div className="form-container sign-up-container">
          <form className="sign-form">
            <h1>Sign Up</h1>
            <div className="social-container">
              <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
            </div>
            <span>or use your email for registration</span> 
            <br/>
            {error && <Alert variant="danger">{error}</Alert>}
            <input className="input-tag-parent si" ref={username} type="text" placeholder="Username" required/>
            <input className="input-tag-children si" ref={email} type="email" placeholder="Email" required/>
            <input className="input-tag-children si" ref={password} type="password" placeholder="Password" required/>
            <button className="button-tag"  onClick={(e) => signup(e)}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="sign-form">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social"><i><FaLinkedin/></i></a>
              <a href="#" className="social"><i><FaGoogle/></i></a>
              <a href="#" className="social"><i><FaInstagram/></i></a>
            </div>
            <span>or use your account</span>
            <br/>
            {error && <Alert variant="danger">{error}</Alert>}
            <input className="input-tag-parent si" ref={usernamelogin} type="email" placeholder="Username" required/>
            <input className="input-tag-children si" ref={passwordlogin} type="password" placeholder="Password" required/>
            <a href="#">Forgot your password?</a>
            <button className="button-tag-secondary" onClick={(e) => login(e)}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button className="ghost" style={{borderRadius:"30px"}}  onClick={(e) => signinfunc(e)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friends!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" style={{borderRadius:"30px"}}  onClick={(e) => signupfunc(e)}>Sign Up</button>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}
