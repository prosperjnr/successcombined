import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="next_btn"
        onClick={slideForward}
      />
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="back_btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={testimonial1} alt="testimonial1" />
                <div>
                  <h3>Kingsley Masibi</h3>
                  <span>Success Combined, SA</span>
                </div>
              </div>
              <p>
                Attending Success Combined School has been an incredible
                journey! The teachers are so supportive, and the opportunities
                for extracurricular activities are endless. I've made lifelong
                friends and learned valuable skills here.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={testimonial2} alt="testimonial1" />
                <div>
                  <h3>Tawana Makahe</h3>
                  <span>Success Combined, SA</span>
                </div>
              </div>
              <p>
                I couldn't have asked for a better high school experience than
                what I had at Success Combined. The academic rigor pushed me to
                excel, and the sense of community here is unmatched.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={testimonial3} alt="testimonial1" />
                <div>
                  <h3>Nobukhosi Mguni</h3>
                  <span>Success Combined, SA</span>
                </div>
              </div>
              <p>
                Success Combined School isn't just a place where you come to
                study; it's a home away from home. The teachers genuinely care
                about your success, and there's a real sense of belonging among
                students.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={testimonial4} alt="testimonial1" />
                <div>
                  <h3>Tatenda George</h3>
                  <span>Success Combined, SA</span>
                </div>
              </div>
              <p>
                Choosing Success Combined School was one of the best decisions
                I've ever made. From day one, I felt supported and encouraged to
                pursue my passions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
