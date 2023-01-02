import { Link } from "react-router-dom";
const ErrorPage = ({ error }) => {
  const { msg } = error;
  return (
    <div className="page-error">
      <h1>{msg}</h1>
      <Link to="/" className="btn">
        back to movies
      </Link>
    </div>
  );
};
export default ErrorPage;
