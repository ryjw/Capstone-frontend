import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API } from "../API/api.js";
import "../assets/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setToken } = useOutletContext();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();
    if (info.success) {
      setToken(info.token);
      localStorage.setItem("token", info.token);
      navigate("/menu/featured");
    } else {
      setError(info.error);
    }
  }

  return (
    // <div className="flex-center">
    <div className="login-component-container">
      <form
        id="login-form"
        className="forms"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <div className="input-container">
          <input
            className="login-form-inputs"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
        </div>
        <div className="input-container">
          <input
            className="login-form-inputs"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <div>
          <button id="login-button">Login</button>
        </div>
      </form>
      <p>{error}</p>
    </div>
  );
}
