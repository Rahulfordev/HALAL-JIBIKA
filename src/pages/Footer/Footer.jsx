import Container from "../../components/common/Container";
import "./Footer.css";
import Logo from "../../components/common/Logo";
import Social from "../../components/common/Social";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer__container">
          <div className="footer__head--content">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__icons">
              <Social />
            </div>
          </div>
          <div className="footer__items">
            <div className="footer-item">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-copyright">
            ©{new Date().getFullYear()}{" "}
            <Link>
              <span>Rahulfordev. </span>
            </Link>{" "}
            All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
