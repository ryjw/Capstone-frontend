import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { API } from "./API/api.js";
import Footer from "./components/Footer";

function App() {
  // state for ordering
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [orderItems, setOrderItems] = useState([]);
  const [token, setToken] = useState("");

  async function fetchUser() {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
    if (!token) {
      return;
    }
    const res = await fetch(`${API}/users/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      setUser(info.user);
    } else {
      console.log(info);
    }
  }

  async function fetchItems() {
    const res = await fetch(`${API}/menu`);
    const info = await res.json();
    setItems(info.menuItems);
  }

  async function fetchOpenOrder() {
    const res = await fetch(`${API}/orders/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      const currentOrder = await info.orders.find((order) => {
        return order.status === "CART";
      });
      await setOrder(currentOrder);
    }
  }

  function extractOrderItems() {
    if (order && order.orderItems && order.orderItems.length > 0) {
      setOrderItems(order.orderItems);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchUser();
  }, [token]);

  useEffect(() => {
    fetchOpenOrder();
  }, [user]);

  useEffect(() => {
    extractOrderItems();
  }, [order]);

  return (
    <div className="app-container">
      <Navbar
        token={token}
        user={user}
        setUser={setUser}
        setToken={setToken}
        setOrder={setOrder}
        setOrderItems={setOrderItems}
        items={items}
        orderItems={orderItems}
      />
      <div className="outlet-container">
        <Outlet
          context={{
            setToken,
            items,
            order,
            setOrder,
            orderItems,
            fetchOpenOrder,
            setOrderItems,
            token,
            user,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
