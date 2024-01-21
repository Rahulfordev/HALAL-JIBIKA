import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TbEye } from "react-icons/tb";
import { IoEyeOffOutline } from "react-icons/io5";

import Container from "../../components/common/Container";
import "./SignUp.css";
import { SignInDefault } from "../../components/common";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const Signup = () => {
  const [error, setError] = useState("");
  const [passShow, setPassShow] = useState(false);
  const { user, createUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirmPassword.value;
    console.log(name, email, password, confirm);

    setError("");
    if (name === "" && email === "" && password === "" && confirm === "") {
      setError("Complete all fields in the form");
      return;
    } else if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Signup successful!", {
          toastId: "Rahul Ali",
        });
        // console.log(loggedUser);
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
        // console.log(user);
        toast.success("Signin successful!", {
          toastId: "Rahul Ali",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("Signin successful!", {
          toastId: "Rahul Ali",
        });
        // toast("login Successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setError(error.message);
      });
  };

  if (user) {
    return <Navigate to={"/"} />;
  }
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
                  type={`${passShow ? "text" : "password"}`}
                  id="password"
                  name="password"
                  required=""
                />
                <TbEye
                  onClick={() => setPassShow(!passShow)}
                  id="togglePassword"
                />
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
          <SignInDefault
            handleSignInWithGithub={handleSignInWithGithub}
            handleSignInWithGoogle={handleSignInWithGoogle}
          />
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
