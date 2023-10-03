import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  // state for ordering
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  // const [promotions, setPromotions] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [order, setOrder] = useState({});

  // const [transaction, setTransaction] = useState({});
  // const [customer, setCustomer] = useState({});

  const [token, setToken] = useState("");

  // async function fetchUser() {
  //   const localToken = localStorage.getItem("token");
  //   if (localToken) {
  //     setToken(localToken);
  //   }
  //   if (!token) {
  //     return;
  //   }
  //   const res = await fetch(`${API}/users/token`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const info = await res.json();
  //   if (info.success) {
  //     setUser(info.user);
  //   }
  // }

  // useEffect(() => {
  //   fetchItems();
  //   fetchPromotions();
  //   fetchUser();
  // }, []);

  return (
    <>
      <Navbar token={token} user={user} setUser={setUser} setToken={setToken} />
      <Outlet context={{ setToken }} />
    </>
  );
}

export default App;
