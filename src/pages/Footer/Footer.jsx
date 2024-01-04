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
            <div
              className="footer__logo"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Logo />
            </div>
            <div
              className="footer__icons"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <Social />
            </div>
          </div>
          <div
            className="footer__items"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
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
              <h4>For Clients</h4>
              <ul>
                <li>
                  <a href="#">Talent Marketplace</a>
                </li>
                <li>
                  <a href="#">Payroll Services</a>
                </li>
                <li>
                  <a href="#">Direct Contracts</a>
                </li>
                <li>
                  <a href="#">Hire Worldwide</a>
                </li>
                <li>
                  <a href="#">Hire in the USA</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Our Resources</h4>
              <ul>
                <li>
                  <a href="#">Free Business tools</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Success Stories</a>
                </li>
                <li>
                  <a href="#">Upwork Reviews</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Trending job</h4>
              <ul>
                <li>
                  <a href="#">Browse Jobs</a>
                </li>
                <li>
                  <a href="#">Browse Categories</a>
                </li>
                <li>
                  <a href="#">Submit Resume</a>
                </li>
                <li>
                  <a href="#">Job Alerts</a>
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
