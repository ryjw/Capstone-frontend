import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Menu from "./components/Menu.jsx";
import Basket from "./components/Basket.jsx";
import NotFound from "./components/NotFound.jsx";
import Register from "./components/Register.jsx";
import Checkout from "./components/Checkout.jsx";
import CompletedOrders from "./components/CompletedOrders.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import About from "./components/About.jsx";
import Careers from "./components/Careers.jsx";
import Locate from "./components/Locate.jsx";
import StripeContainer from "./components/StripeContainer.jsx";
import Deals from "./components/Deals.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "basket", element: <Basket /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <CompletedOrders /> },
      { path: "item/:itemId", element: <ItemDetail /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <Careers /> },
      { path: "locate", element: <Locate /> },
      { path: "*", element: <NotFound /> },
      { path: "payment", element: <StripeContainer /> },
      {path: "deals", element: <Deals /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
