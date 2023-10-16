import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { API } from "../API/api";
import "../assets/itemDetail.css";

export default function ItemDetail() {
  const { itemId } = useParams();
  const { token, items, orderItems, order, fetchOpenOrder } =
    useOutletContext();
  const [message, setMessage] = useState("");
  const item = items.find((item) => item.id === itemId);

  async function addToBasket() {
    const isExisting = orderItems.find((item) => itemId === item.menuItemId);
    if (!token) {
      setMessage("Please log in to add to your basket!");
    }
    if (isExisting) {
      const res = await fetch(`${API}/orders/items/${isExisting.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quantity: isExisting.quantity + 1,
        }),
      });
      const info = await res.json();
      if (info.success) {
        fetchOpenOrder();
        setMessage("added another!");
      }
    } else {
      const res = await fetch(`${API}/orders/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderId: order.id,
          menuItemId: itemId,
          quantity: 1,
        }),
      });
      const info = await res.json();
      if (info.success) {
        fetchOpenOrder();
        setMessage("added!");
      }
    }
  }
  return (
    item && (
      <div className="flex-center">
        <div className="item-detail-grid-container">
          <img
            className="item-detail-images"
            src={item.image}
            alt={`${item.name} photo`}
          />
          <div className="item-detail-name-price-container">
            <h3 className="item-detail-name">{item.name}</h3>
            <span>-</span>
            <h3 className="item-detail-price">${item.price.toFixed(2)}</h3>
          </div>
          <p className="item-detail-description">{item.description}</p>
          <button
            className="item-detail-add-to-basket-button"
            onClick={addToBasket}
          >
            Add to Cart
          </button>
          <p>{message}</p>
        </div>
      </div>
    )
  );
}
