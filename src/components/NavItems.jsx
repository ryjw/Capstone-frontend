import React, { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import "../assets/navbar.css";

function NavItems({ token, handleLogout, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h1 className="logo">Logo</h1>
          </div>
          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active-link" : ""}
                >
                  Our Menu
                </Link>
              </li>
              {!token && (
                <>
                  <li>
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "active-link" : ""
                      }
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className={
                        location.pathname === "/register" ? "active-link" : ""
                      }
                    >
                      SignUp!
                    </Link>
                  </li>
                </>
              )}
              {token && (
                <>
                  <li>
                    <span>Hello {user.username}</span>
                  </li>
                  <li>
                    <Link to="/" onClick={handleLogout} className="">
                      Logout
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/basket"
                  className={
                    location.pathname === "/basket" ? "active-link" : ""
                  }
                >
                  Basket
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about" ? "active-link" : ""
                  }
                >
                  About Our Food
                </Link>
              </li>
              <li>
                <Link
                  to="/locate"
                  className={
                    location.pathname === "/locate" ? "active-link" : ""
                  }
                >
                  Locate
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className={
                    location.pathname === "/deals" ? "active-link" : ""
                  }
                >
                  Exclusive Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={
                    location.pathname === "/careers" ? "active-link" : ""
                  }
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavItems;
