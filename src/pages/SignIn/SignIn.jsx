/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import { SignInDefault } from "../../components/common";
import "./SignIn.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const SignIn = () => {
  const { user, signInWithGoogle } = useContext(AuthContext);
  console.log(user);
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
    <div>
      <Container>
        <div className="login__form--container">
          <h3 className="account-title">
            Sign in to <span>HALAL JIBIKA</span>
          </h3>
          <form className="login-form">
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
                {/* <TbEye id="togglePassword" /> */}
              </div>
            </div>
            <button className="signIn__button" type="submit">
              Sign in
            </button>
          </form>
          <div className="forgot__password">
            <Link className="forgot__password--button">Forgot password?</Link>
          </div>
          <SignInDefault handleSignInWithGoogle={handleSignInWithGoogle} />
          <div className="go__signup">
            <p>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
