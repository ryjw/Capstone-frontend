import { useOutletContext } from "react-router-dom";
import { API } from "../API/api.js";

export default function SidebarLeft() {
  // deconstruct from the outlet
  const { items } = useOutletContext();

  return (
    <div id="left-sidebar-container">
      <div className="sidebar-left-item-containers">
        <img src="./public/burgers" alt="menu item photo" />
      </div>
    </div>
  );
}
