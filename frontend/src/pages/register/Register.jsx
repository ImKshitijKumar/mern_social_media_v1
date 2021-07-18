import React from "react";
import "./register.css";

export default function Register() {
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
            <input placeholder="Full Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginBtn">Sign Up</button>
            <button className="loginRegisterBtn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
