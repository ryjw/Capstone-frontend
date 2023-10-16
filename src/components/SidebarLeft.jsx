import { useOutletContext, NavLink } from "react-router-dom";
import { API } from "../API/api.js";

export default function SidebarLeft() {
  return (
    <div id="left-sidebar-container" className="left-sidebar-containers">
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
          to="/menu/breakfast"
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
          to="/menu/burgers"
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
          to="/menu/sandwiches"
          id="navlink-sandwiches"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-sandwiches"
          >
            <img
              className="sidebar-left-item-photos"
              src="/BikiniBottomBLT.jpg"
              alt="sandwich photo"
            />
            <h2 className="sidebar-left-item-headers">Sandwiches</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/fries"
          id="navlink-fries"
          className="sidebar-left-navlinks"
        >
          <div className="sidebar-left-item-containers" id="sidebar-left-fries">
            <img
              className="sidebar-left-item-photos"
              src="/CalamariFries.jpg"
              alt="fries photo"
            />
            <h2 className="sidebar-left-item-headers">Fries</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/pizzas"
          id="navlink-pizzas"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-pizzas"
          >
            <img
              className="sidebar-left-item-photos"
              src="/KrustyKrabPizza.jpg"
              alt="pizza photo"
            />
            <h2 className="sidebar-left-item-headers">Pizzas</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/hotdogs"
          id="navlink-hotdogs"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-hotdogs"
          >
            <img
              className="sidebar-left-item-photos"
              src="/BikiniBratwurst.jpg"
              alt="hotdog photo"
            />
            <h2 className="sidebar-left-item-headers">Hotdogs</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/salads"
          id="navlink-salads"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-salads"
          >
            <img
              className="sidebar-left-item-photos"
              src="/SeaweedGarden.jpg"
              alt="salad photo"
            />
            <h2 className="sidebar-left-item-headers">Salads</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/sides"
          id="navlink-sides"
          className="sidebar-left-navlinks"
        >
          <div className="sidebar-left-item-containers" id="sidebar-left-sides">
            <img
              className="sidebar-left-item-photos"
              src="/BarnacleRings.jpg"
              alt="side photo"
            />
            <h2 className="sidebar-left-item-headers">Sides</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/treats"
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
          to="/menu/milkshakes"
          id="navlink-milkshakes"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-milkshakes"
          >
            <img
              className="sidebar-left-item-photos"
              src="/Milkshake1.jpg"
              alt="milkshake photo"
            />
            <h2 className="sidebar-left-item-headers">Milkshakes</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/smoothies"
          id="navlink-smoothies"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-smoothies"
          >
            <img
              className="sidebar-left-item-photos"
              src="/AnemoneBerryBlast.jpg"
              alt="smoothie photo"
            />
            <h2 className="sidebar-left-item-headers">Smoothies</h2>
          </div>
        </NavLink>
        <NavLink
          to="/menu/softdrinks"
          id="navlink-softdrinks"
          className="sidebar-left-navlinks"
        >
          <div
            className="sidebar-left-item-containers"
            id="sidebar-left-softdrinks"
          >
            <img
              className="sidebar-left-item-photos"
              src="/SchweppesGingerAle.jpg"
              alt="softdrink photo"
            />
            <h2 className="sidebar-left-item-headers">Soft Drinks</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
