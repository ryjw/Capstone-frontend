import { NavLink } from "react-router-dom";

export default function Item({ item, token, addToBasket }) {
  return (
    <NavLink to={`/item/${item.id}`}>
      <div className="grid-item">
        <img className="item-image" src={`/Burger.jpg`} alt="food item" />
        <h3>{item.name}</h3>
      </div>
    </NavLink>
  );
}
