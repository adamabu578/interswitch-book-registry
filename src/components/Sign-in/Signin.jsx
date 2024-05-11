import React from "react";
import logo1 from "../../images/logo1.png";
import google from "../../images/google.png";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="main-form container">
      <div className="form-container">
        <div className="logo">
          <img
            src={logo1}
            alt="logo"
            style={{ width: "120px", height: "40px" }}
          />
          <h1>Welcome back</h1>
          <p>Glad to see you again Login to your account below</p>
        </div>
        <div className="google-btn">
          <button className="google-input">
            Continue with Google
            <img src={google} alt="icon" style={{ width: "22px" }} />
          </button>
        </div>
        <div className="form">
          <div className="form-input">
            <label>Email:</label>
            <input
              type="text"
              placeholder="enter email..."
              className="user-input"
            />
          </div>
          <div className="form-input">
            <label>password:</label>
            <input
              type="password"
              placeholder="enter password..."
              className="user-input"
            />
          </div>
          <div className="action-btn">
            {/* <button className="user-input">Cancel</button> */}
            <button
              className="user-input"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Login
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
              Don't have an account?{" "}
              <a style={{ color: "blue" }} href="link">
                Sign up for Free
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
