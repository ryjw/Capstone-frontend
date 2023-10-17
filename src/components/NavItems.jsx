import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../public/Clam.png"
import { BsBasket2 } from "react-icons/bs";
function NavItems({ token, handleLogout, user, items, orderItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function getItemInfo(id) {
    const item = items.find((x) => id === x.id);
    return item;
  }

  useEffect(() => {
    if (orderItems.length > 0) {
      setOrderTotal(
        orderItems
          .map((orderItem) => {
            const item = getItemInfo(orderItem.menuItemId);
            return orderItem.quantity * item.price;
          })
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      );
    } else {
      setOrderTotal(0);
    }
  }, [orderItems]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
          {/* <img
              className="logo"
              src="/Rays.jpg"
            ></img> */}
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
              {token && (
                <li>
                  <span className="navbar-titles">Hello {user.username}</span>
                </li>
              )}
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
                  to="/deals"
                  className={
                    location.pathname === "/deals" ? "active-link" : ""
                  }
                >
                  <span className="navbar-titles">Exclusive Deals</span>
                </Link>
              </li>
              {token && (
                <>
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
                      to="/orders"
                      className={
                        location.pathname === "/orders" ? "active-link" : ""
                      }
                    >
                      <span className="navbar-titles">Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/basket"
                      className={
                        location.pathname === "/basket" ? "active-link" : ""
                      }
                    >
                      <span id="basket-span" className="navbar-titles">
                        <BsBasket2 id="basket-icon" />${orderTotal.toFixed(2)}
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavItems;
