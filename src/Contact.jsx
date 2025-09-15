import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./contact.css";
import logo from "./assets/rentLogo.png";
import CustomInput from "./components/CustomInput";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Header />
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <div className="infos">
            <img src={logo} alt="logo" />
            <div className="info-details">
              <h2>Come Visit Us</h2>
              <div className="info-items">
                <div className="info-item">
                  <h3 className="item-title">Office</h3>304 North Cardinal St.
                  Dorchester Center, MA 02124
                </div>
                <div className="info-item">
                  <h3 className="item-title">Contact</h3>info@company
                  <br />
                  contact@company
                </div>
                <div className="info-item">
                  <h3 className="item-title">Working Hours</h3>Monday-Saturday
                  9am - 6pm Sunday 10am - 17pm
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <h2 className="form-title">Talk to Us</h2>
            <div className="form-inputs">
              <div className="names-field">
                <CustomInput
                  id={"first-name"}
                  label={"First Name"}
                  placeholder={"Enter your first name"}
                />
                <CustomInput
                  id={"last-name"}
                  label={"Last Name"}
                  placeholder={"Enter your last name"}
                />
              </div>
              <CustomInput
                id={"adresse"}
                label={"Adresse"}
                placeholder={"Enter your adresse"}
              />
              <CustomInput
                id={"phone"}
                label={"Phone"}
                placeholder={"Enter your phone number"}
                type="tel"
                required={false}
              />
              <CustomInput
                id={"message"}
                label={"Message"}
                placeholder={"Enter your message"}
                textarea={true}
              />
              <button className="submit-button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
