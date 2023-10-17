import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { API } from "../API/api.js";
import "../assets/orders.css";

export default function CompletedOrders() {
  const { token, user, items } = useOutletContext();
  const [orders, setOrders] = useState([]);
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
      const sorted = complete.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
      setOrders(sorted);
    } else {
      console.log(info);
      console.log(user.id);
    }
  }
  useEffect(() => {
    fetchOrders();
  }, [token]);

  return orders.length === 0 ? (
    <h1>No orders completed yet</h1>
  ) : (
    <div className="order-container">
      {orders.map((order) => {
        return (
          <div className="order" key={order.id}>
            <h2>Order</h2>
            <p>Order id: {order.id}</p>
            <p>Date placed: {new Date(order.createdAt).toDateString()}</p>
            <h2>Items:</h2>
            {order.orderItems.map((item) => {
              return (
                <>
                  <p>{items.find((i) => i.id === item.menuItemId).name}</p>
                  <p>Quantity: {item.quantity}</p>
                </>
              );
            })}
            <h2>Total Price: ${order.totalPrice.toFixed(2)}</h2>
          </div>
        );
      })}
    </div>
  );
}
