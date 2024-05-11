import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1Img from "../../images/logo1.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logo1Img} alt="site logo" />
            <span
              className="header-text"
              style={{
                marginTop: "25px",
                fontFamily: "poppins",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Bookhub
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="register"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                register
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Sign-in"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Sign-in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
