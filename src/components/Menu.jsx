import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";

export default function Menu() {
  const { items, token, addToBasket } = useOutletContext();
  return (
    <>
      <div className="main-container">
        <div className="favorites">
          <img></img>
          <h1>Featured Favorites</h1>
        </div>
        <div className="side-bar-container">
          <div className="side-bar-links">
            <ul>
              <li>
                <a href="#pizza">Pizza</a>
              </li>
              <li>
                <a href="#pasta">Pasta</a>
              </li>
              <li>
                <a href="#salad">Salad</a>
              </li>
              <li>
                <a href="#dessert">Dessert</a>
              </li>
              <li>
                <a href="#drinks">Drinks</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="title"> Company Menu</div>
      </div>
      <div className="menu-flex">
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
    </>
  );
}

