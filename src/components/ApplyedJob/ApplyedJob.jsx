/* eslint-disable react/prop-types */

import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const ApplyedJob = ({ applyed, applyFave, setApplyFave }) => {
  const { postDate, logo, position, salary, expireDate, location } = applyed;
  let tag = ["Full-time", "Remote"];
  let tagMap = tag?.map((singleTag, i) => <p key={i}>{singleTag}</p>);

  const handleApplied = (jobDetails) => {
    const status =
      jobDetails.isApplyed === "undefined" ? true : !jobDetails.isApplyed;

    axios
      .put(`https://jobs-rvc2.onrender.com/jobs/${jobDetails.id}`, {
        ...jobDetails,
        isApplyed: status,
      })
      .then(() => {
        setApplyFave(
          applyFave.map((applyDele) => {
            if (applyDele.id === applyed.id) {
              return {
                ...applyDele,
                isApplyed: status,
              };
            }
            return applyDele;
          })
        );
      });
  };

  const handleClick = (job) => {
    const status = job.isTrue === "undefined" ? true : !job.isTrue;
    axios
      .put(`http://localhost:9000/jobs/${job.id}`, {
        ...job,
        isTrue: status,
      })
      .then(() => {
        setApplyFave(
          applyFave.map((fav) => {
            if (fav.id === applyed.id) {
              return {
                ...fav,
                isTrue: status,
              };
            }
            return fav;
          })
        );
      });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="3000">
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
                  <CiLocationOn /> {location}
                </p>
                <p className="home__job--postDate">
                  <CiCalendar /> {postDate} days ago
                </p>
              </div>
            </div>
          </div>
          <div
            className="home__job--favorite"
            onClick={() => handleClick(applyed)}
          >
            {/* <CiHeart /> */}
            <svg
              className={`svgimage ${applyed.isTrue ? `svgimageRed` : null}`}
              width="20px"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 107.39"
            >
              <defs>
                <style>.cls-1</style>
              </defs>
              <path
                className="cls-1"
                d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
              />
            </svg>
          </div>
        </div>
        <div className="home__job--ts">
          <div className="job__tag">{tagMap}</div>
          <div className="job__rate">
            <span className="job__rate--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-class fill-class one"
              >
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
            <span className="job__rate--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-class fill-class one"
              >
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
            <span className="job__rate--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-class fill-class one"
              >
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
            <span className="job__rate--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-class fill-class"
              >
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
            <span className="job__rate--icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-class fill-class"
              >
                <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="home__job--se">
          <div className="home__job--ex--sa">
            <p className="home__Job--salary">
              <MdAttachMoney /> {salary}
              <span className="home__job-sub">/year</span>
            </p>
          </div>
          <div className="home__job--ex--sa">
            <p className="home__job-sub">
              <CiCalendar /> {expireDate} days left to apply
            </p>
          </div>
        </div>
        <div className="home__job--buttons">
          <div className="home__job--more">
            <Link onClick={() => handleApplied(applyed)}>Apply Delete</Link>
          </div>
          <div className="home__job--button__user">
            <div className="home__job--more">
              <Link to={`/jobs`}>Back All Jobs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyedJob;
