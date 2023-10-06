import { NavLink, useOutletContext } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Basket() {
  const { order, setOrder } = useOutletContext();
  let uniqueItems = [];
  for (let i = 0; i < order.length; i++) {
    const id = order[i].id;
    const found = uniqueItems.find((item) => item.id === id);
    if (!found) {
      uniqueItems.push(order[i]);
    }
  }

  function handleAddItem(e, item) {
    e.preventDefault();
    setOrder([...order, item]);
  }
  function handleSubtractItem(e, item) {
    e.preventDefault();
    let newOrder = [...order];
    const id = item.id;
    const index = newOrder.findIndex((x) => x.id === id);
    newOrder.splice(index, 1);
    setOrder(newOrder);
  }

  return (
    order.length > 1 && (
      <div>
        {uniqueItems.map((item) => {
          return (
            <div key={item.id}>
              item: {item.name} quantity:
              <FiMinus onClick={(e) => handleSubtractItem(e, item)} />
              {order.filter((x) => x.id === item.id).length}
              <FiPlus onClick={(e) => handleAddItem(e, item)} />
              Price:
              {order
                .filter((x) => x.id === item.id)
                .map((y) => y.price)
                .reduce((previous, current) => {
                  return previous + current;
                })}
            </div>
          );
        })}
        <div>
          Total price:{" "}
          {order
            .map((item) => item.price)
            .reduce((previous, current) => {
              return previous + current;
            })}
        </div>
        <div>
          <NavLink to={"checkout"}>Check out</NavLink>
        </div>
      </div>
    )
  );
}
