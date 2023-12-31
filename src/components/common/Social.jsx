import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <span>Follow Us:</span>
      <NavLink>
        <FaFacebookF />
      </NavLink>
      <NavLink>
        <FaLinkedin />
      </NavLink>
      <NavLink>
        <FaXTwitter />
      </NavLink>
      <NavLink>
        <FaInstagram />
      </NavLink>
      <NavLink>
        <FaYoutube />
      </NavLink>
    </>
  );
};

export default Social;
