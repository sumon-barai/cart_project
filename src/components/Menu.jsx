import { Link, NavLink } from "react-router-dom";
import utils from "../utilities/utilities";
import toast from "react-hot-toast";

const Menu = () => {
  const isAuth = utils.isLoggedIn();

  const handleLogout = () => {
    utils.logout();
    toast.success("logout success");
    window.location.href = "/";
  };

  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
      {!isAuth ? (
        <Link type="button" className="btn btn-success" to={"/login"}>
          Login
        </Link>
      ) : (
        <span type="button" className="btn btn-success" onClick={handleLogout}>
          Logout
        </span>
      )}
    </>
  );
};

export default Menu;
