import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="not-found">
      <div>
        <div className="title">Opps || Page not Found</div>
        <Link to="/">Go to home page</Link>
      </div>
    </div>
  );
};

export default NoPage;
