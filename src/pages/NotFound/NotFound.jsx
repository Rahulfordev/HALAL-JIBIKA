import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <div className="not-found">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-7621869-6167023.png?f=webp"
          alt=""
        />
      </div>
      <div className="notfound__button">
        <Link className="button home__banner-button" to={"/"}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
