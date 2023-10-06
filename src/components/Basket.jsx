import { NavLink, useOutletContext } from "react-router-dom";

export default function Basket() {
  const { order } = useOutletContext();
  console.log(order);
  let uniqueItems = [];
  for (let i = 0; i < order.length; i++) {
    const id = order[i].id;
    const found = uniqueItems.find((item) => item.id === id);
    if (!found) {
      uniqueItems.push(order[i]);
    }
  }

  return (
    <div>
      {uniqueItems.map((item) => {
        return (
          <div>
            item: {item.name} quantity:
            {order.filter((x) => x.id === item.id).length}
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
  );
}
