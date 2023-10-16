import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { API } from "../API/api.js";
import "../assets/stripe.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const {
    order,
    token,
    setOrder,
    setOrderItems,
    fetchOpenOrder,
    orderItems,
    items,
  } = useOutletContext();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [orderTotal, setOrderTotal] = useState(0);
  const navigate = useNavigate();

  function getItemInfo(id) {
    const item = items.find((x) => id === x.id);
    return item;
  }

  useEffect(() => {
    if (orderItems.length > 0) {
      setOrderTotal(
        orderItems
          .map((orderItem) => {
            const item = getItemInfo(orderItem.menuItemId);
            return orderItem.quantity * item.price;
          })
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://capstone-backend-peqs.onrender.com/payment",
          {
            amount: 1000,
            id,
          }
        );
        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          handleSuccess();
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleSuccess = async () => {
    await fetch(`${API}/orders/${order.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        totalPrice: orderTotal,
        status: "COMPLETE",
      }),
    });

    const res2 = await fetch(`${API}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const info2 = await res2.json();
    if (info2.success) {
      setOrder(info2.order);
      setOrderItems([]);
      fetchOpenOrder();
      setTimeout(navigate("/orders"), 1000);
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your order!</h2>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
