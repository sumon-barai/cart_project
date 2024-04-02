import utils from "../utilities/utilities";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = utils.isLoggedIn();

  if (!isAuth) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PublicRoute;
