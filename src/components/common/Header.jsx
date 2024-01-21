import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSignOut } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import defaultUser from "../../assets/default__user.png";
import "./Header.css";
import Logo from "./Logo";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useFetch from "../../Hooks/useFetch";
import { toast } from "react-toastify";

export const Header = () => {
  const { user, logOut, faveUpdate, setFaveUpdate } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        toast.success("Signout successful!");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  };

  //  Applyed Job List
  const { isError, isLoading, data } = useFetch(
    "https://jobs-rvc2.onrender.com/jobs/jobs"
  );

  const [navFave, setNaveFave] = useState(data);

  const isApplyedData = data.filter((trueData) => trueData.isApplyed === true);

  const isTrueData = data.filter((trueData) => trueData.isTrue === true);

  useEffect(() => {
    setNaveFave(data);
  }, [data]);

  const headerEl = useRef();
  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      const { current } = headerEl;
      // setMobileNav(false)
      if (curScrollPosition > 100) {
        current.classList.add("compaq");
      } else {
        current.classList.remove("compaq");
      }
      if (difference < 0) {
        current.classList.add("hide");
      } else {
        current.classList.remove("hide");
      }
      prevScrollPosition = curScrollPosition;
    });
  }

  const [isShow, setIsShow] = useState(false);
  return (
    <header className="header-section" ref={headerEl}>
      <Container>
        <div className="header__content">
          <div className="mobile__nav--bar">
            <div className="mobile__nav--logo">
              <Logo />
            </div>
            <ul className="mobile__nav--items">
              {user?.email ? (
                <li className="mobile__nav--user header__link">
                  <img
                    src={user?.photoURL ? user?.photoURL : defaultUser}
                    alt=""
                  />
                  <span>{user.displayName}</span>
                </li>
              ) : null}
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
              Favoritev
              {/* ({isTrueData.length})<span>({faveUpdate.length})</span> */}
            </NavLink>
            {user ? (
              <NavLink className="header__link" to={"/applyed-job"}>
                Applyed Job
              </NavLink>
            ) : (
              ""
            )}
          </ul>
          {user ? (
            <ul className="header__links users">
              <li>
                <Link className="header__link">
                  <img
                    src={user?.photoURL ? user?.photoURL : defaultUser}
                    alt=""
                  />
                  {user.displayName}
                </Link>
              </li>
              <li>
                <Link onClick={handleSignOut} className="header__link">
                  Sign Out <GoSignOut />
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="header__links">
              <li>
                <NavLink className="header__link" to={"/signup"}>
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="header__link explore-button button"
                  to={"/login"}
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          )}
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

            {user ? (
              <ul className="mobile__menu--header__links">
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="mobile__menu--header__link"
                  >
                    Sign Out <GoSignOut />
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="mobile__menu--header__links">
                <li>
                  <NavLink
                    className="mobile__menu--header__link"
                    to={"/signup"}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobile__menu--header__link" to={"/login"}>
                    Sign In
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        )}
        {/* mobile menu li end */}
      </Container>
    </header>
  );
};
