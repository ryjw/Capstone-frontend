import { useOutletContext, NavLink } from "react-router-dom";
import { API } from "../API/api.js";

export default function SidebarLeft() {
  return (
    <div id="left-sidebar-container">
      <div id="featured-container">
        <div
          className="sidebar-left-item-containers"
          id="sidebar-left-featured-favorite"
        >
          <img
            className="sidebar-left-item-photos"
            src="/Donut.jpg"
            alt="donut photo"
          />
          <h2 className="sidebar-left-item-headers">Featured Favorites</h2>
        </div>
      </div>
      <div id="left-sidebar-main-container">
        <NavLink
          to="/breakfast"
          id="navlink-breakfast"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-breakfast"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Muffin.jpg"
              alt="muffin photo"
            />
            <h2 className="sidebar-left-item-headers">Breakfast</h2>
          </div>
        </NavLink>
        <NavLink
          to="/burgers"
          id="navlink-burgers"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-burgers"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Burger.jpg"
              alt="burger photo"
            />
            <h2 className="sidebar-left-item-headers">Burgers</h2>
          </div>
        </NavLink>
        <NavLink
          to="/sandwiches"
          id="navlink-sandwiches"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-sandwiches"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Sandwich.jpg"
              alt="sandwich photo"
            />
            <h2 className="sidebar-left-item-headers">Sandwiches</h2>
          </div>
        </NavLink>
        <NavLink
          to="/fries"
          id="navlink-fries"
          className="sidebar-left-navlinks"
        >
          <div className="sidebar-left-item-containers" id="sidebar-left-fries">
            <img
              className="sidebar-left-item-photos"
              src="/LargeFries.jpg"
              alt="fries photo"
            />
            <h2 className="sidebar-left-item-headers">Fries</h2>
          </div>
        </NavLink>
        <NavLink
          to="/pizzas"
          id="navlink-pizzas"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-pizzas"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Pizza.jpg"
              alt="pizza photo"
            />
            <h2 className="sidebar-left-item-headers">Pizzas</h2>
          </div>
        </NavLink>
        <NavLink
          to="/hotdogs"
          id="navlink-hotdogs"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-hotdogs"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Hotdog.jpg"
              alt="hotdog photo"
            />
            <h2 className="sidebar-left-item-headers">Hotdogs</h2>
          </div>
        </NavLink>
        <NavLink
          to="/salads"
          id="navlink-salads"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-salads"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Salad.jpg"
              alt="salad photo"
            />
            <h2 className="sidebar-left-item-headers">Salads</h2>
          </div>
        </NavLink>
        <NavLink
          to="/sides"
          id="navlink-sides"
          className="sidebar-left-navlinks"
        >
          <div className="sidebar-left-item-containers" id="sidebar-left-sides">
            <img
              className="sidebar-left-item-photos"
              src="/Side.jpg"
              alt="side photo"
            />
            <h2 className="sidebar-left-item-headers">Sides</h2>
          </div>
        </NavLink>
        <NavLink
          to="/treats"
          id="navlink-treats"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-treats"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Brownie.jpg"
              alt="brownie photo"
            />
            <h2 className="sidebar-left-item-headers">Treats</h2>
          </div>
        </NavLink>
        <NavLink
          to="/milkshakes"
          id="navlink-milkshakes"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-milkshakes"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Milkshake.jpg"
              alt="milkshake photo"
            />
            <h2 className="sidebar-left-item-headers">Milkshakes</h2>
          </div>
        </NavLink>
        <NavLink
          to="/smoothies"
          id="navlink-smoothies"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-smoothies"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Smoothie.jpg"
              alt="smoothie photo"
            />
            <h2 className="sidebar-left-item-headers">Smoothies</h2>
          </div>
        </NavLink>
        <NavLink
          to="/softdrinks"
          id="navlink-softdrinks"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-softdrinks"
          >
            <img
              className="sidebar-left-item-photos"
              src="/LargeCoke.jpg"
              alt="softdrink photo"
            />
            <h2 className="sidebar-left-item-headers">Soft Drinks</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
