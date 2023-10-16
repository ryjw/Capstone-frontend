import { useOutletContext, useParams } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";
import "../assets/sidebarLeft.css";
import SidebarLeft from "./SidebarLeft.jsx";

export default function MenuCategory() {
  const { items, token, addToBasket } = useOutletContext();
  const { category } = useParams();
  const categoryArray = category.split("");
  categoryArray[0] = categoryArray[0].toUpperCase();
  // sides and fries remain, sandwiches
  const capitalisedCategory = categoryArray.join("");
  if (
    categoryArray[categoryArray.length - 1] === "s" &&
    category !== "sides" &&
    category !== "fries" &&
    category !== "sandwiches"
  ) {
    categoryArray.splice(categoryArray.length - 1, 1);
  } else if (category === "sandwiches") {
    categoryArray.splice(categoryArray.length - 2, 2);
  }

  const searchCategory = categoryArray.join("");
  console.log(searchCategory, category);

  const filteredItems = items.filter(
    (item) => item.category === searchCategory
  );

  return (
    <>
      <div className="main-containers">
        <SidebarLeft />
        <div className="display-items-containers">
          <h1 className="display-items-titles">{capitalisedCategory}</h1>
          <div className="grid-containers">
            {filteredItems.map((item) => {
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
