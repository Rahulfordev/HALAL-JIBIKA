import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import "./Header.css";
import Logo from "./Logo";
import { useState } from "react";
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

  const [isShow, setIsShow] = useState(false);

  return (
    <header className="header-section">
      <Container>
        <div className="header__content">
          <div className="mobile__nav--bar">
            <div className="mobile__nav--logo">
              <Logo />
            </div>
            <ul className="mobile__nav--items">
              <li className="mobile__nav--user">
                <FaRegUserCircle />
                <span>Rahul Ali</span>
              </li>
              <li
                className="mobile__nab--hamburger"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <RxCross2 /> : <RxHamburgerMenu />}
              </li>
            </ul>
          </div>

          <div className="header__logo">
            <Logo />
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

        {/* mobile menu li start */}

        {isShow && (
          <div className="mobile__menu">
            <ul className="mobile__menu--header__links">
              <NavLink className="mobile__menu--header__link" to={"/"}>
                Home
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/jobs"}>
                Jobs
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/about"}>
                About
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/contact"}>
                Contact
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/favorite"}>
                Favorite
              </NavLink>
            </ul>
            <ul className="mobile__menu--header__links">
              <li>
                <Link className="mobile__menu--header__link" to={"/signup"}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link className="mobile__menu--header__link" to={"/login"}>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* mobile menu li end */}
      </Container>
    </header>
  );
};
