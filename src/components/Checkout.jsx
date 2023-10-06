import { useNavigate, useOutletContext } from "react-router-dom";

export default function Checkout() {
  const { order } = useOutletContext();
  const navigate = useNavigate();
  async function handleCheckout(e) {
    e.preventDefault();
    navigate("orders");
  }

  return <div></div>;
}
