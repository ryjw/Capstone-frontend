import { Link } from "react-router-dom";

export default function Navbar({ token, user, setUser, setToken }) {
  function handleLogout() {
    setUser("");
    setToken("");
    localStorage.clear();
  }

  return (
    <div id="navbar">
      <Link to={"/"}>Homepage</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/basket"}>Basket</Link>
      {token ? (
        <>
          <div>Hello username</div>
          <Link onClick={handleLogout} to={"/"}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      )}
    </div>
  );
}
