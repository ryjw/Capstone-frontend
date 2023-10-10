import { useOutletContext } from "react-router-dom";

export default function CompletedOrders() {
  const { orders } = useOutletContext();
}
