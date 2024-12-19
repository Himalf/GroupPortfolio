import React, { useState } from "react";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Allow only digits, +, and space
    const formattedValue = value.replace(/[^0-9+\s]/g, "");
    setPhoneNumber(formattedValue);
  };

  return (
    <section className="contact-us">
      <div className="get-in-touch">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          Feel free to contact us? submit your queries here and we will get back
          to you as soon as possible.
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
      <div className="send-message">
        <h2 className="section-title">Send us a message</h2>
        <div className="form-container">
          <form className="form">
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="name" name="name">
                  Name:
                </label>
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-container">
                <label htmlFor="email" name="email">
                  Email:
                </label>
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            <div className="input-group">
              <div className="input-container">
                <label htmlFor="number">Number:</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Number"
                  name="number"
                  pattern="[\+]?[0-9]{1,4}[ -]?[0-9]{6,15}"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="subject" name="subject">
                  Subject:
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="message">Write a message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write Message....."
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
