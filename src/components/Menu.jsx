import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";

export default function Menu() {
  const { items } = useOutletContext();
  return (
    <>
      <div className="menu-flex">
        {items.map((item) => {
          return <Item item={item} />;
        })}
      </div>
    </>
  );
}
