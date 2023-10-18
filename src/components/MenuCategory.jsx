import { useOutletContext, useParams } from "react-router-dom";
import Item from "./Item.jsx";
import "../assets/menu.css";
import "../assets/sidebarLeft.css";
import SidebarLeft from "./SidebarLeft.jsx";

export default function MenuCategory() {
  const { items, token, addToBasket } = useOutletContext();
  let { category } = useParams();
  if (!category) {
    category = "Featured";
  }
  const categoryArray = category.split("");
  categoryArray[0] = categoryArray[0].toUpperCase();
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

  // const filteredItems = items.filter(
  //   (item) => item.category === searchCategory
  // );

  function generateRandomIndexes(range, count) {
    if (range <= count) {
      return Array.from({ length: range }, (_, i) => i);
    }
    const indexes = new Set();
    while (indexes.size < count) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * range);
      } while (indexes.has(randomIndex));
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  }

  let filteredItems = [];

  if (searchCategory !== "Featured") {
    filteredItems = items.filter((item) => item.category === searchCategory);
  } else {
    const randomIndexes = generateRandomIndexes(items.length, 10);
    filteredItems = randomIndexes.map((index) => items[index]);
  }

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
