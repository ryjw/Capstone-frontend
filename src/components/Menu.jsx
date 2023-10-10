import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";
import SidebarLeft from "./SidebarLeft.jsx";

export default function Menu() {
  const { items, token, addToBasket } = useOutletContext();
  return (
    <>
      <div className="main-container">
        <SidebarLeft />
        <div id="main-page-menu-items-container">
          <h1 className="title" id="main-page-title">
            Menu
          </h1>{" "}
          <div className="grid-container">
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
    </>
  );
}
