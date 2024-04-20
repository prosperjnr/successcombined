import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/message.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0927f330-4935-4c77-a6cd-eac34b191831");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact_col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out to us through the contact or find our contact
          information below. Your feedback, questions and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="contact_icons" />
            mugwagwaprosper88@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneVolume} className="contact_icons" />
            +27 69-717-0458
          </li>
          <li className="last_icon">
            <FontAwesomeIcon icon={faLocationDot} className="contact_icons" />
            660 Dichaba St, Olievenhoutbosch ex37 <br /> Pretoria, South Africa
          </li>
        </ul>
      </div>
      <div className="contact_col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g.  John Smith"
            id="name"
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g.  +27 67-023-4576"
            id="phoneNumber"
            required
          />
          <label htmlFor="emailMessage">Write your message here</label>
          <textarea
            type="text"
            name="message"
            id="emailMessage"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark_btn">
            Submit
            <FontAwesomeIcon icon={faArrowRight} className="btn_arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
