import React from "react";
import "./School.css";
import gallery_1 from "../../assets/gallery1.jpg";
import gallery_2 from "../../assets/gallery2.jpg";
import gallery_3 from "../../assets/gallery3.jpg";
import gallery_5 from "../../assets/gallery5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const School = () => {
  return (
    <div className="school">
      <div className="school_gallery">
        <img src={gallery_1} alt="gallery image" />
        <img src={gallery_2} alt="gallery image" />
        <img src={gallery_3} alt="gallery image" />
        <img src={gallery_5} alt="gallery image" />
      </div>
      <button className="dark_btn">
        <a
          href="https://web.facebook.com/profile.php?id=61557778382568"
          target="_blank"
          rel="noreferrer"
        >
          See more here
          <FontAwesomeIcon icon={faArrowRight} className="btn_arrow" />
        </a>
      </button>
    </div>
  );
};

export default School;
