import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";
import "../assets/sidebarLeft.css";
import SidebarLeft from "./SidebarLeft.jsx";

export default function Menu() {
  const { items, token, addToBasket } = useOutletContext();
  return (
    // <div className="menu-component-container">
    <div className="main-containers">
      <SidebarLeft />
      <div className="display-items-containers">
        <h1 className="display-items-titles">Menu</h1>
        <div className="grid-containers">
          {items.map((item) => {
            return (
              <Item
                item={item}
                token={token}
                addToBasket={addToBasket}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
    // </div>
  );
}
