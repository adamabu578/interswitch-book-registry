import React from "react";
import logo1 from "../../images/logo1.png";
import "./Register.css";

const Register = () => {
  return (
    <div className="main-reg-form-container">
      <div className="form-container">
        <div className="logo">
          <img
            src={logo1}
            alt="logo"
            style={{ width: "120px", height: "40px" }}
          />
          <h1>Welcome to switch Library</h1>
          <h2>sign up</h2>
          <p>
            Enter your details below to create your account and get started.
          </p>
        </div>
        <div className="reg-form">
          <div className="form-input">
            <label>First Name:</label>
            <input type="text" placeholder="enter..." className="user-input" />
          </div>
          <div className="form-input">
            <label>Last Name:</label>
            <input type="text" placeholder="enter..." className="user-input" />
          </div>
          <div className="form-input">
            <label>Email:</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="user-input"
            />
          </div>
          <div className="form-input">
            <label>phone number:</label>
            <input
              type="text"
              placeholder="+2347086543"
              className="user-input"
            />
          </div>
          <div className="form-input">
            <label>password:</label>
            <input
              type="password"
              placeholder="enter..."
              className="user-input"
            />
          </div>
          <div className="form-input">
            <label>Confirm password:</label>
            <input
              type="password"
              placeholder="enter..."
              className="user-input"
            />
          </div>
          <div className="action-btn">
            <button className="user-input">Cancel</button>
            <button
              className="user-input"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Confirm
            </button>
          </div>
          <div
            className="action-text"
            style={{
              color: "gray",
              margin: "0 auto",
            }}
          >
            <p>
              Already have an account?
              <a style={{ color: "blue" }} href="link">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
