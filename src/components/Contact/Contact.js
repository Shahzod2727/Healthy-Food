import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-bg">
      <Container>
        <div className="content">
          <div className="contact-text">
            <h1>Contact </h1>
            <h2>
              Food Stalls with Persons but also specialized equipment, Skills to
              manage.
            </h2>
          </div>

          <div className="contact-main">
            <input className="input" type="text" placeholder="Enter your message" />
            <button className="buttontest">Send</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
