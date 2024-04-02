import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img width={80} src="./logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
