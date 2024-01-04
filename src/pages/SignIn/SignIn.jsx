/* eslint-disable react/no-unescaped-entities */
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/common/Container";
import { SignInDefault } from "../../components/common";
import "./SignIn.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const SignIn = () => {
  const [error, setError] = useState("");

  const { user, signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    setError("");
    if (email === "" && password === "") {
      setError("Complete all fields in the form");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Signin successful!", {
          toastId: "Rahul Ali",
        });
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
        // navigate("/");
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
        toast.success("Signin successful!", {
          toastId: "Rahul Ali",
        });
        // console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        setError(error.message);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        // console.log(result.user);
        toast.success("Signin successful!", {
          toastId: "Rahul Ali",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        // console.log(errorCode);
        setError(error.message);
      });
  };
  return (
    <div>
      <Container>
        <div className="login__form--container">
          <h3 className="account-title">
            Sign in to <span>HALAL JIBIKA</span>
          </h3>
          <form className="login-form" onSubmit={handleSignIn}>
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
          <SignInDefault
            handleSignInWithGithub={handleSignInWithGithub}
            handleSignInWithGoogle={handleSignInWithGoogle}
          />
          <div className="go__signup">
            <p>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
          <p className="text-error">{error}</p>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
