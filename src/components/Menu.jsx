import { useOutletContext } from "react-router-dom";
import Item from "./Item.jsx";

export default function Menu() {
  const { items } = useOutletContext();
  return (
    <>
      <div className="menu-flex">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}
