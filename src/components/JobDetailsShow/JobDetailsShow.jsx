/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaBookReader } from "react-icons/fa";
import knowage from "../../assets/knowledge.png";
import quality from "../../assets/quality.png";
import dollar from "../../assets/dollar.png";
import { Link } from "react-router-dom";
import "./JobDetailsShow.css";
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
          <Link className="apply__Button">Apply Now</Link>
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
            <div>
              <img src={knowage} alt="" />
            </div>
            <div className="job__one--content">
              <p>{location}</p>
            </div>
          </div>

          <div className="job__details--flex">
            <div>
              <img src={knowage} alt="" />
            </div>
            <div className="job__one--content">
              <p>Call : +07 554 332 322</p>
            </div>
          </div>

          <div className="job__details--flex">
            <div>
              <img src={knowage} alt="" />
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
