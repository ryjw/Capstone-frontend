import { NavLink } from "react-router-dom";

export default function Item({ item, token, addToBasket }) {
  return (
    <NavLink to={`/item/${item.id}`}>
      <div className="grid-container">
        <img className="item-image" src={`/Burger.jpg`} alt="food item" />
        <div className="grid-item">
          <h3>{item.name}</h3>
        </div>
        <div className="grid-item">
          <h3>${item.price.toFixed(2)}</h3>
        </div>
      </div>
    </NavLink>
  );
}
