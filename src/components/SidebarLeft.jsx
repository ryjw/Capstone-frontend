import { useOutletContext } from "react-router-dom";
import { API } from "../API/api.js";
import muffin from "../../public/Muffin.jpg";
import burger from "../../public/Burger.jpg";
import fries from "../../public/LargeFries.jpg";
import brownie from "../../public/Brownie.jpg";
import coke from "../../public/LargeCoke.jpg";
import donut from "../../public/Donut.jpg";

export default function SidebarLeft() {
  // deconstruct from the outlet
  //const { items } = useOutletContext();

  return (
    <div id="left-sidebar-container">
      <div
        className="sidebar-left-item-containers"
        id="sidebar-left-featured-favorite"
      >
        <img
          className="sidebar-left-item-photos"
          src={donut}
          alt="donut photo"
        />
        <h2 className="sidebar-left-item-headers">Featured Favorites</h2>
      </div>
      <div className="sidebar-left-item-containers" id="sidebar-left-breakfast">
        <img
          className="sidebar-left-item-photos"
          src={muffin}
          alt="muffin photo"
        />
        <h2 className="sidebar-left-item-headers">Breakfast</h2>
      </div>
      <div className="sidebar-left-item-containers" id="sidebar-left-burgers">
        <img
          className="sidebar-left-item-photos"
          src={burger}
          alt="burger photo"
        />
        <h2 className="sidebar-left-item-headers">Burgers</h2>
      </div>
      <div className="sidebar-left-item-containers" id="sidebar-left-fries">
        <img
          className="sidebar-left-item-photos"
          src={fries}
          alt="fries photo"
        />
        <h2 className="sidebar-left-item-headers">Fries</h2>
      </div>
      <div className="sidebar-left-item-containers" id="sidebar-left-sweets">
        <img
          className="sidebar-left-item-photos"
          src={brownie}
          alt="brownie photo"
        />
        <h2 className="sidebar-left-item-headers">Sweets & Treats</h2>
      </div>
      <div className="sidebar-left-item-containers" id="sidebar-left-beverages">
        <img
          className="sidebar-left-item-photos"
          src={coke}
          alt="beverage photo"
        />
        <h2 className="sidebar-left-item-headers">Beverages</h2>
      </div>
    </div>
  );
}
