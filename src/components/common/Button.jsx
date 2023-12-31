/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({
  title,
  ta,
  mt,
  mb,
  ml,
  mr,
  color,
  borderColor,
  bgColor,
}) => {
  return (
    <div style={{ marginTop: mt, textAlign: ta }}>
      <Link
        style={{
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          color,
          borderColor,
          backgroundColor: bgColor,
        }}
        to="/jobs"
        className="home__section--button"
      >
        {title}
      </Link>
    </div>
  );
};
