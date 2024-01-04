import { useState } from "react";
import Container from "../../../components/common/Container";
import "./AddJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJob = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:9000/jobs";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const [jobData, setJobData] = useState({
    title: "",
    logo: "",
    companyName: "",
    description: "",
    location: "",
    position: "",
    salary: "",
    postDate: "",
    expireDate: "",
    tag: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(baseURL, jobData).then((response) => {
      setJobData(response.data);
    });
    toast.success("New Job Added");
    navigate("/jobs");
  };

  return (
    <div>
      <Container>
        <div className="post-form--container">
          <h3 className="add__post--title">
            Post Your Job with <span>HALAL JIBIKA</span>
          </h3>
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="title">Job Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobData.title}
                  required=""
                  placeholder="UI/UX Designer"
                  onChange={handleChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="email">Logo:</label>
                <input
                  type="url"
                  id="logo"
                  name="logo"
                  value={jobData.logo}
                  required=""
                  placeholder="Company logo URL"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={jobData.companyName}
                  placeholder="Apple Inc."
                  onChange={handleChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobData.location}
                  required=""
                  placeholder="New York, NY 10001, USA"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={jobData.salary}
                  placeholder="$10K"
                  onChange={handleChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={jobData.position}
                  placeholder="Web Designer"
                  required=""
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="postDate">Job Post Date:</label>
                <input
                  type="number"
                  id="postDate"
                  name="postDate"
                  value={jobData.postDate}
                  onChange={handleChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="expireDate">Job Expire Date:</label>
                <input
                  type="number"
                  id="expireDate"
                  name="expireDate"
                  value={jobData.expireDate}
                  required=""
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="tag">Job Tag:</label>
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  value={jobData.tag}
                  onChange={handleChange}
                  placeholder="Full-time, Remote"
                  required=""
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="description">Job Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={jobData.description}
                  onChange={handleChange}
                  required=""
                />
              </div>
            </div>

            <button className="post__button" type="submit">
              POST
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddJob;
