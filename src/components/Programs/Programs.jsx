import React from "react";
import "./Programs.css";
import program_1 from "../../assets/elementary.jpg";
import program_2 from "../../assets/programs-2.jpg";
import program_3 from "../../assets/programs-3.jpg";
import elementary_icon from "../../assets/elementary-icon.png";
import highSchool_icon from "../../assets/highSchool-icon.png";
import middleSchool_icon from "../../assets/middleSchool-icon.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="Elementary Level" />
        <div className="caption">
          <img src={elementary_icon} alt="elementary icon" />
          <p>Elementary School</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Middle School" />
        <div className="caption">
          <img src={middleSchool_icon} alt="elementary icon" />
          <p>Middle School</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="High School" />
        <div className="caption">
          <img src={highSchool_icon} alt="elementary icon" />
          <p>High School</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
