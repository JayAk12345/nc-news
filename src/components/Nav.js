import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user/signin">Sign In</Link>
    </nav>
  );
};

export default Nav;
