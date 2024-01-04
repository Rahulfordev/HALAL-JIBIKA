import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Container from "../../../components/common/Container";
const EditPost = () => {
  const {
    id,
    title,
    logo,
    companyName,
    description,
    location,
    position,
    salary,
    postDate,
    expireDate,
  } = useLoaderData();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: title,
    logo: logo,
    companyName: companyName,
    description: description,
    location: location,
    position: position,
    salary: salary,
    postDate: postDate,
    expireDate: expireDate,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postJobs = await axios.put(
      `http://localhost:9000/jobs/${id}`,
      formData
    );
    console.log(postJobs);
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
                  value={formData.title}
                  required=""
                  placeholder="UI/UX Designer"
                  onChange={handleInputChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="email">Logo:</label>
                <input
                  type="url"
                  id="logo"
                  name="logo"
                  value={formData.logo}
                  required=""
                  placeholder="Company logo URL"
                  onChange={handleInputChange}
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
                  value={formData.companyName}
                  placeholder="Apple Inc."
                  onChange={handleInputChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  required=""
                  placeholder="New York, NY 10001, USA"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  placeholder="$10K"
                  onChange={handleInputChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  placeholder="Web Designer"
                  required=""
                  onChange={handleInputChange}
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
                  value={formData.postDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="expireDate">Job Expire Date:</label>
                <input
                  type="number"
                  id="expireDate"
                  name="expireDate"
                  value={formData.expireDate}
                  required=""
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="post__form--group">
              <label htmlFor="description">Job Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required=""
              />
            </div>

            <button className="post__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditPost;
