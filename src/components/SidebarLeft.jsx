import { useOutletContext, NavLink } from "react-router-dom";
import { API } from "../API/api.js";
// import muffin from "../../public/Muffin.jpg";
// import burger from "../../public/Burger.jpg";
// import fries from "../../public/LargeFries.jpg";
// import brownie from "../../public/Brownie.jpg";
// import coke from "../../public/LargeCoke.jpg";
// import donut from "../../public/Donut.jpg";

export default function SidebarLeft() {
  // deconstruct from the outlet
  //const { items } = useOutletContext();

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
        <div
          className="sidebar-left-item-containers"
          id="sidebar-left-beverages"
        >
          <img
            className="sidebar-left-item-photos"
            src="/LargeCoke.jpg"
            alt="beverage photo"
          />
          <h2 className="sidebar-left-item-headers">Soft Drinks</h2>
        </div>
      </div>
    </div>
  );
}
