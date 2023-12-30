import { Link } from "react-router-dom";
import Container from "./Container";
import './Header.css'

const Header = () => {
  return (
    <header className="header-section">
      <Container>
        <div className="header__content">
          <div className="header__logo">
            <h1>HALAL JIBIKA</h1>
          </div>
          <ul className="header__links">
            <li>
              <Link className="header__link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/jobs"}>
                Jobs
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/favorite"}>
                Favorite
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/signup"}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/login"}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
