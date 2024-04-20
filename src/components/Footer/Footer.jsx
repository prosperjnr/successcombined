import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import facebook_logo from "../../assets/facebook-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_container">
      <p>&copy;{currentYear} Success Combined School. All rights reserved.</p>
      <ul>
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=61557778382568"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebook_logo}
              alt="facebookLogo"
              className="facebookLogo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/PMugwagwa5053"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} className="xLogo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
