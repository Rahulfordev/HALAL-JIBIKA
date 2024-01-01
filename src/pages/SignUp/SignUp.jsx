import { Link } from "react-router-dom";
import { TbEye } from "react-icons/tb";

import Container from "../../components/common/Container";
import "./SignUp.css";
import { SignInDefault } from "../../components/common";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Signup = () => {
  const [error, setError] = useState("");

  const { user, createUser, signInWithGoogle } = useContext(AuthContext);
  console.log(user);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    console.log(name, email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="signup-section">
      <Container>
        <div className="registration__form--container">
          <h3 className="account-title">
            Sign up to <span>HALAL JIBIKA</span>
          </h3>
          <form className="registration-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="fullname" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required=""
                />
                <TbEye id="togglePassword" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required=""
              />
            </div>
            <button className="signUp__button" type="submit">
              Sign Up
            </button>
          </form>
          <SignInDefault handleSignInWithGoogle={handleSignInWithGoogle} />
          <div className="go__signup">
            <p>
              Have an account already? <Link to={"/login"}>Log in</Link>
            </p>
          </div>
          <p className="text-error">{error}</p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
