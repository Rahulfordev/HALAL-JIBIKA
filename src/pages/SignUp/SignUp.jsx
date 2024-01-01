import { Link } from "react-router-dom";
import { TbEye } from "react-icons/tb";

import Container from "../../components/common/Container";
import "./SignUp.css";
const Signup = () => {
  return (
    <div className="signup-section">
      <Container>
        <div className="registration__form--container">
          <h3 className="account-title">
            Sign up to <span>HALAL JIBIKA</span>
          </h3>
          <form className="registration-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required="" />
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
            <button type="submit">Sign Up</button>
          </form>

          <div className="go__signup">
            <p>
              Have an account already? <Link to={"/login"}>Log in</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
