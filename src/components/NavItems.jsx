import React, { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import "../assets/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../public/Clam.png"

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
              src="/Clam.png"
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
                  <span className="navbar-titles">Our Menu</span>
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
                      <span className="navbar-titles">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className={
                        location.pathname === "/register" ? "active-link" : ""
                      }
                    >
                      <span className="navbar-titles">Sign Up</span>
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
                      <span className="navbar-titles">Logout</span>
                    </Link>
                  </li>
                </>
              )}
              {token && (
                <>
                  <li>
                    <Link
                      to="/basket"
                      className={
                        location.pathname === "/basket" ? "active-link" : ""
                      }
                    >
                      <span className="navbar-titles">Basket</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className={
                        location.pathname === "/orders" ? "active-link" : ""
                      }
                    >
                      <span className="navbar-titles">Orders</span>
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
                  <span className="navbar-titles">About Our Food</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/locate"
                  className={
                    location.pathname === "/locate" ? "active-link" : ""
                  }
                >
                  <span className="navbar-titles">Locate</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className={
                    location.pathname === "/deals" ? "active-link" : ""
                  }
                >
                  <span className="navbar-titles">Exclusive Deals</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={
                    location.pathname === "/careers" ? "active-link" : ""
                  }
                >
                  <span className="navbar-titles">Careers</span>
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
