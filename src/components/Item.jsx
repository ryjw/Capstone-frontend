import { NavLink } from "react-router-dom";

export default function Item({ item, token, addToBasket }) {
  return (
    <NavLink to={`/item/${item.id}`}>
      <div className="grid-item">
        <img
          className="item-image"
          src={item.image}
          alt={`${item.name} photo`}
        />
        <h3 className="item-header">{item.name}</h3>
      </div>
    </NavLink>
  );
}
