import { Link } from "react-router-dom";
import "./Logo.css";
const Logo = () => {
  return (
    <h1 className="logo">
      <Link to={"/"}>
        <span>H</span>ALAL <span>J</span>IBIKA
      </Link>
    </h1>
  );
};

export default Logo;
