import React, { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import "../assets/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <img
              className="logo"
              src="https://i.redd.it/dy9l3iww2fe21.png"
            ></img>
          </div>
          <div
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          >
            {isOpen ? <FaTimes id="exit-bar" /> : <FaBars id="entry-bar" />}
          </div>
          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <ul className="links">
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
              {token && (
                <>
                  <li>
                    <Link
                      to="/orders"
                      className={
                        location.pathname === "/orders" ? "active-link" : ""
                      }
                    >
                      Orders
                    </Link>
                  </li>
                </>
              )}

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
