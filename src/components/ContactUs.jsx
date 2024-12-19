import React from "react";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "../styles/contactUsStyle.css";

const cardData = [
  {
    icon: <CiLocationOn />,
    info: "Baneshwor, Kathmandu",
  },
  {
    icon: <CiPhone />,
    info: "470-601-1911",
  },
  {
    icon: <CiMail />,
    info: "fuseinterns@gmail.com",
  },
];

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="get-in-touch">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible
        </p>
        <div className="card-container">
          {cardData.map((item, index) => {
            return (
              <div className="card-item" key={index}>
                <div className="icon">{item.icon}</div>
                <p className="card-info">{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="contact-us">
        <h2 className="section-title">Send us a message</h2>
        <div className="form-container">
          <form className="form">
            <div className="input-group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="tel" placeholder="Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Write Message....."
            ></textarea>
            <button type="submit" onClick={(e) => e.preventDefault()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
