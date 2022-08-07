import React from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import "../CSS/contact.css";

const Contact = () => {
  const [contactData, setContactData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = function (event) {
    setContactData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(contactData);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    alertMessage("Your message has been sent successfully!", "success");
  };

  const alertMessage = (message, type) => {
    const alertPlaceholder = document.getElementById("alert-placeholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    console.log(alertPlaceholder);
    alertPlaceholder.append(wrapper);
  };

  return (
    <>
      <Header />
      <main>
        <h2 className="section-title">
          <span>Contact</span>
        </h2>
        <div className="spacer"></div>
        <form>
          <div id="alert-placeholder"></div>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <small className="form-text text-muted">* required</small>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              columns="20"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <small className="form-text text-muted">* required</small>
          </div>
          <div className="float-end">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </main>
      <Nav pageName={"Contact"} />
      <Footer />
    </>
  );
};

export default Contact;
