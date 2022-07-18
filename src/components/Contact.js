import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <div className="container2">
        <div className="cards">
          <div className="card">
            <h3>Email</h3>
            <div className="icon">
              <MdEmail />
            </div>

            <p>chandrishabh48@gmail.com</p>
            <a href="mailto:chandrishabh48@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
          </div>

          <div className="card">
            <h3>Messenger</h3>
            <div className="icon">
              <BsMessenger />
            </div>
            <p>Rishabh Chand</p>
            <a href="https://m.me/rishabh.chand.75"  target="_blank" rel="noreferrer">Send Message</a>
          </div>
        </div>

        <div className="form"></div>
      </div>
    </div>
  );
};

export default Contact;
