/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
import "./Container.css";

const Container = ({ children, padding }) => {
  return (
    <div
      className="container"
      style={{
        padding,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
