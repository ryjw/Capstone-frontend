import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";

export default function Menu() {
  const { items, token, addToBasket } = useOutletContext();
  return (
    <>
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
