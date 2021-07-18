import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERN Social</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on MERN Social.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forget Password?</span>
            <button className="loginRegisterBtn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
