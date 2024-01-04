/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "react-toastify/dist/ReactToastify.css";
import knowage from "../../assets/knowledge.png";
import quality from "../../assets/quality.png";
import dollar from "../../assets/dollar.png";
import { Link } from "react-router-dom";
import "./JobDetailsShow.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const JobDetailsShow = ({ jobDetails }) => {
  const {
    title,
    salary,
    description,
    location,
    Responsibilities,
    Requirements,
  } = jobDetails;
  const [Education] = Requirements;
  const [CodeDevelopment] = Responsibilities;

  const { ProgrammingSkills, ProblemSolvingAbilities } = Education;
  const { Collaboration, Documentation } = CodeDevelopment;

  const handleApplied = (jobDetails) => {
    if (jobDetails.isApplyed) {
      return toast.error("Already applied", {
        toastId: "Rahul Ali",
      });
    }

    const status =
      jobDetails.isApplyed === "undefined" ? true : !jobDetails.isApplyed;

    axios
      .put(`http://localhost:9000/jobs/${jobDetails.id}`, {
        ...jobDetails,
        isApplyed: status,
      })
      .then((res) => {
        toast.success("apply successfully completed.", {
          toastId: "Rahul Ali",
        });
      });
  };

  return (
    <div className="job__details--container">
      <div className="job__details--left">
        <div className="job__details--content">
          <h2>{title}</h2>
          <h2 className="job__details--description">Job Description</h2>
          <p>{description}</p>

          <h2 className="job__details--required">
            Required Knowledge, Skills, and Abilities
          </h2>
          <p>{ProgrammingSkills}</p>
          <p>{ProblemSolvingAbilities}</p>

          <h2 className="job__details--education">Education Qualification</h2>
          <p>
            A bachelor's or master's degree in Computer Science, Software
            Engineering, or a related field is often required. Some positions
            may accept equivalent work experience in lieu of a degree.
          </p>
          <p>{Collaboration}</p>
          <p>{Documentation}</p>
        </div>
        <div className="apply__buttons">
          <Link
            onClick={() => handleApplied(jobDetails)}
            className="apply__Button"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="job__details--right">
        <div className="job__details--one">
          <h2 className="job__details--one__title">Overview</h2>
          <div className="job__details--flex">
            <div>
              <img src={dollar} alt="" />
            </div>
            <div className="job__one--content">
              <h4>Offered Salary</h4>
              <p>
                {salary} <span>/yea</span>
              </p>
            </div>
          </div>
          <div className="job__details--flex">
            <div>
              <img src={quality} alt="" />
            </div>
            <div className="job__one--content">
              <h4>Experince</h4>
              <p>2 Years</p>
            </div>
          </div>
          <div className="job__details--flex">
            <div>
              <img src={knowage} alt="" />
            </div>
            <div className="job__one--content">
              <h4>Qualification</h4>
              <p>Master Degree</p>
            </div>
          </div>
        </div>
        <div className="job__details--two">
          <h2 className="job__details--one__title">Company Address</h2>

          <div className="job__details--flex">
            <div className="job__details--contact__icon">
              <FaLocationDot />
            </div>
            <div className="job__one--content">
              <p>{location}</p>
            </div>
          </div>

          <div className="job__details--flex">
            <div className="job__details--contact__icon">
              <FaPhoneAlt />
            </div>
            <div className="job__one--content">
              <p>Call : +07 554 332 322</p>
            </div>
          </div>

          <div className="job__details--flex">
            <div className="job__details--contact__icon">
              <MdEmail />
            </div>
            <div className="job__one--content">
              <p>hello@peof.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsShow;
