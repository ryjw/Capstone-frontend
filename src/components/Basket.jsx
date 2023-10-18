import { NavLink, useOutletContext, Link } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash, FiTrash2 } from "react-icons/fi";
import { API } from "../API/api.js";
import "../assets/basket.css";

export default function Basket() {
  const { orderItems, items, order, fetchOpenOrder, token } =
    useOutletContext();

  function getItemInfo(id) {
    const item = items.find((x) => id === x.id);
    return item;
  }

  async function handleSubtract(orderItem) {
    if (orderItem.quantity > 1) {
      const res = await fetch(`${API}/orders/items/${orderItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quantity: orderItem.quantity - 1,
        }),
      });
      const info = await res.json();
      if (info.success) {
        fetchOpenOrder();
      }
    } else {
      const res = await fetch(`${API}/orders/items/${orderItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const info = await res.json();
      if (info.success) {
        fetchOpenOrder();
      }
    }
  }
  async function handleAdd(orderItem) {
    const res = await fetch(`${API}/orders/items/${orderItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quantity: orderItem.quantity + 1,
      }),
    });
    const info = await res.json();
    if (info.success) {
      fetchOpenOrder();
    }
  }

  async function handleRemove(orderItem) {
    const res = await fetch(`${API}/orders/items/${orderItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info = await res.json();
    if (info.success) {
      fetchOpenOrder();
    }
  }

  return orderItems.length > 0 ? (
    <div className="basket">
      <h1>Basket</h1>
      <div className="total-order">
        {orderItems.map((orderItem) => {
          const item = getItemInfo(orderItem.menuItemId);
          return (
            <div key={orderItem.id}>
              <h2>{item.name}</h2>
              <p className="price">${item.price.toFixed(2)}</p>
              <p className="adding">
                <FiMinus
                  onClick={() => handleSubtract(orderItem)}
                  className="plusminus"
                />
                <FiPlus
                  onClick={() => handleAdd(orderItem)}
                  className="plusminus"
                />
                <FiTrash2
                  className="plusminus"
                  onClick={() => handleRemove(orderItem)}
                />
              </p>
              <p className="price">
                X {orderItem.quantity} = $
                {(item.price * orderItem.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}
        <div className="basket-total">
          <h1>Basket total</h1>
          <p className="cashTotal">
            $
            {orderItems
              .map((orderItem) => {
                const item = getItemInfo(orderItem.menuItemId);
                return orderItem.quantity * item.price;
              })
              .reduce((accumulator, currentValue) => accumulator + currentValue)
              .toFixed(2)}
          </p>
        </div>
      </div>
      <Link to="/payment">
        <button className="checkoutButton">Checkout</button>
      </Link>
    </div>
  ) : (
    <div className="emptyBasketMessage">
      <h1>Basket empty</h1>
    </div>
  );
}
