import React from "react";
import NavItems from "./NavItems";
import "../assets/navbar.css";

export default function Navbar({
  token,
  user,
  setUser,
  setToken,
  setOrder,
  setOrderItems,
  items,
  orderItems,
}) {
  function handleLogout() {
    setUser("");
    setToken("");
    localStorage.clear();
    setOrder({});
    setOrderItems([]);
  }

  return (
    <div className="header">
      <NavItems
        token={token}
        user={user}
        handleLogout={handleLogout}
        items={items}
        orderItems={orderItems}
      />
    </div>
  );
}
