import Container from "../../components/common/Container";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Container>
        <div className="contact-form--container">
          <h3 className="account-title">
            Contact Us with <span>HALAL JIBIKA</span>
          </h3>
          <form className="contact-form">
            <div className="grid-input">
              <div className="contact__form--group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
                  placeholder="Your Full Name"
                />
              </div>
              <div className="contact__form--group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="grid-input">
              <div className="contact__form--group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                />
              </div>
              <div className="contact__form--group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required=""
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="contact__form--group">
              <label htmlFor="message">Message:</label>
              <input
                type="text"
                id="message"
                name="message"
                required=""
                placeholder="Your Message"
              />
            </div>
            <button className="contact__button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
