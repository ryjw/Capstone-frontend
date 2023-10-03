import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setToken } = useOutletContext();

  async function handleLogin(e) {
    e.preventDefault();

    // const res = await fetch(`${API}/users/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // });
    // const info = await res.json();
    // if (info.success) {
    //   setToken(info.token);
    //   localStorage.setItem("token", info.token);
    //   navigate("/");
    // } else {
    //   setError(info.error);
    // }
  }

  return (
    <div className="flex center">
      <div>
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="enter your username"
              value={username}
            />
          </div>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              value={password}
            />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
