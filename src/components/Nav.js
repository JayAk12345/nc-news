import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/user/signin">
        Sign In
      </Link>
    </nav>
  );
};

export default Nav;
