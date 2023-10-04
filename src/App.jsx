import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  // state for ordering
  const [items, setItems] = useState([
    {
      id: "0a817d6e-be92-430e-a6f4-719801738c64",
      name: "Krabby Patty",
      category: "Burgers",
    },
    {
      id: "df7595d1-bacf-4656-81b7-d989beff0d86",
      name: "Kelp Shake",
      category: "Drinks",
    },
  ]);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});

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
      <Outlet context={{ setToken, items }} />
    </>
  );
}

export default App;
