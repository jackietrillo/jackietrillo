import React from "react";
import Header from "../Header";
import Nav from "../Components/Nav";
import Footer from "../Footer";
import "../CSS/contact.css";
import { getMessages, createMessage } from "../API/contact-message-api.js";

const Contact = () => {
  const [contactData, setContactData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    body: ""
  });

  const handleChange = function (event) {
    setContactData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
    console.log(contactData);
  };

  const loadMessages = async function () {
    var messages = await getMessages();
    $("#messages").html(JSON.stringify(messages));
    console.log("loadMessages");
  };

  React.useEffect(() => {
    let allowed = ["76.126.72.106", "172.9.165.77"];
    let source = "";
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      source = data.ip;
      if (allowed.includes(source)) {
        loadMessages();
      }
    });
  }, []);

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    console.log("handleSubmit");
    $("#validation-summary").hide();
    if ($("form").valid()) {
      let data = $(".contact-form").serializeObject();
      await createMessage(data);
      alertMessage("Your message has been sent successfully!", "success");
      loadMessages();
    } else {
      $("#validation-summary").show();
    }
  };

  $(document).ready(function () {
    console.log("document ready" + new Date().getTime());
    $("#validation-summary").hide();
    $("#btn-send").keydown((event) => {
      if (event.which == 13) {
        event.preventDefault();
        //loadMessages();
      }
    });
  });

  const alertMessage = (message, type) => {
    const alertPlaceholder = document.getElementById("alert-placeholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>"
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
        <form className="contact-form">
          <div id="alert-placeholder"></div>
          <div
            id="validation-summary"
            data-valmsg-summary="true"
            className="alert alert-danger alert-dismissible"
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
            <ul></ul>
          </div>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="firstName"
              placeholder="First Name"
              //onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              //onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              data-val="true"
              data-val-required="Email is required"
              //value={contactData.email}
              onChange={handleChange}
            />
            <small className="form-text text-muted">* required</small>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="body"
              placeholder="Message"
              columns="20"
              rows="8"
              onChange={handleChange}
              data-val="true"
              data-val-required="Message is required"
              // value={contactData.body}
            />
            <small className="form-text text-muted">* required</small>
          </div>
          <div className="float-end">
            <button
              id="btn-send"
              type="text"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </form>
        <br />
        <br />
        <div id="messages" className="container px-4"></div>
      </main>
      <Nav pageName={"Contact"} />
      <Footer />
    </>
  );
};

export default Contact;
