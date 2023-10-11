import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { API } from "../API/api.js";
import "../assets/orders.css";

export default function CompletedOrders() {
  const { token, user, items } = useOutletContext();
  const [orders, setOrders] = useState([]);
  console.log(user, token);
  async function fetchOrders() {
    const res = await fetch(`${API}/orders/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      const complete = info.orders.filter(
        (order) => order.status === "COMPLETE"
      );
      setOrders(complete);
    } else {
      console.log(info);
      console.log(user.id);
    }
  }
  useEffect(() => {
    fetchOrders();
    console.log(orders);
  }, [token]);

  return orders.length === 0 ? (
    <h1>No orders completed yet</h1>
  ) : (
    <div className="flex-center">
      {orders.map((order) => {
        return (
          <div key={order.id}>
            <h2>Order</h2>
            <p>Order id: {order.id}</p>
            <p>Date placed: {new Date(order.createdAt).toString()}</p>
            <h2>Items:</h2>
            {order.orderItems.map((item) => {
              return (
                <>
                  <h3>{items.find((i) => i.id === item.menuItemId).name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </>
              );
            })}
            <h2>Total Price: {order.totalPrice}</h2>
          </div>
        );
      })}
    </div>
  );
}
