/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";

import "./HomeDetails.css";
const HomeData = ({ jobs }) => {
  const {
    title,
    companyName,
    description,
    postDate,
    expireDate,
    salary,
    location,
    position,
    logo,
    tag,
  } = jobs;

  let tagMap = tag.map((singleTag, i) => <p key={i}>{singleTag}</p>);

  return (
    <div className="home__job--main">
      <div className="home__job--data">
        <div className="home__job--info">
          <div>
            <img src={logo} width="50px" alt="" />
          </div>
          <div>
            <h4 className="home__job--position">{position}</h4>
            <div className="home__job--ld">
              <p className="home__job--location">
                <CiLocationOn color="#64666c" /> {location}
              </p>
              <p>
                <CiCalendar /> {postDate}
              </p>
            </div>
          </div>
        </div>
        <div className="home__job--favorite">
          <CiHeart />
        </div>
      </div>
      <div className="home__job--ts">
        <div className="job__tag">{tagMap}</div>
        <div className="job__rate">
          <span>
            <CiStar />
          </span>
          <span>
            <CiStar />
          </span>
          <span>
            <CiStar />
          </span>
          <span>
            <CiStar />
          </span>
          <span>
            <CiStar />
          </span>
        </div>
      </div>
      <div className="home__job--se">
        <div>
          <p className="home__Job--salary">
            <MdAttachMoney /> {salary}{" "}
            <span className="home__job-sub">/year</span>
          </p>
        </div>
        <div>
          <p className="home__job-sub">
            <CiCalendar /> {expireDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
