import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_img} alt="About Image" className="about_img" />
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="about_play"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about_right">
        <h3>ABOUT OUR SCHOOL</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education program. Our Cutting edge curriculum is
          designed to empower students with the knowledge,skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning and personalised
          mentorship, our programs prepareaspiring educators to make a
          meaningful impact in classrooms, schools and communities.
        </p>
        <p>
          Whether your aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
