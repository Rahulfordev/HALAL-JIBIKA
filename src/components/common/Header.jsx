import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Header.css";
import Logo from "./Logo";
// import { useRef } from "react";

export const Header = () => {
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
    <header className="header-section">
      <Container>
        <div className="header__content">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="mobile-nav">
            <RxHamburgerMenu />
          </div>
          <ul className="header__links">
            <NavLink className="header__link" to={"/"}>
              Home
            </NavLink>

            <NavLink className="header__link" to={"/jobs"}>
              Jobs
            </NavLink>

            <NavLink className="header__link" to={"/about"}>
              About
            </NavLink>

            <NavLink className="header__link" to={"/contact"}>
              Contact
            </NavLink>

            <NavLink className="header__link" to={"/favorite"}>
              Favorite
            </NavLink>
          </ul>
          <ul className="header__links">
            <li>
              <Link className="header__link" to={"/signup"}>
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className="header__link explore-button button"
                to={"/login"}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {/* <ul className="header__links users">
            <li>
              <Link className="header__link" to={"/signup"}>
                <FaRegUserCircle /> Rahul Ali
              </Link>
            </li>
            <li>
              <Link className="header__link" to={"/login"}>
                Sign Out <GoSignOut />
              </Link>
            </li>
          </ul> */}
        </div>
      </Container>
    </header>
  );
};
