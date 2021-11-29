import userContext from "../contexts/userContext";
import { useContext } from "react";

const SignIn = ({ user, setUser }) => {
  //const { user, setUser } = useContext(userContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e);
    const input = e.target[0].value;
    setUser(input);
  };

  return (
    <section>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <legend>Please input username and password</legend>
        <label for="username">Username:</label>
        <input type="input" id="username" name="username"></input>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default SignIn;
