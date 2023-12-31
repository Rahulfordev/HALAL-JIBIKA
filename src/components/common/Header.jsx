import { Link } from "react-router-dom";
import Container from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Header.css";
import Logo from "./Logo";
// import { useRef } from "react";

const Header = () => {
  // const headerEl = useRef();
  // if (typeof window !== `undefined`) {
  //   let prevScrollPosition = window.pageYOffset;
  //   window.addEventListener("scroll", () => {
  //     const curScrollPosition = window.pageYOffset;
  //     const difference = prevScrollPosition - curScrollPosition;
  //     const { current } = headerEl;
  //     // setMobileNav(false)
  //     if (curScrollPosition > 100) {
  //       current.classList.add("compaq");
  //     } else {
  //       current.classList.remove("compaq");
  //     }
  //     if (difference < 0) {
  //       current.classList.add("hide");
  //     } else {
  //       current.classList.remove("hide");
  //     }
  //     prevScrollPosition = curScrollPosition;
  //   });
  // }

  return (
    <header className="header-section" >
      <Container padding="25px 25px">
        <div className="header__content">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="mobile-nav">
            <RxHamburgerMenu />
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
          </ul>
          <ul className="header__links">
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
