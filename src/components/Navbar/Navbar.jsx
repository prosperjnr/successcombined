import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`nav_container ${sticky ? "dark_nav" : ""}`}>
      <div className="logo">
        <img src={logo} alt="success combined logo" className="logo_image" />
        <h1 className="logo_header">Success</h1>
      </div>

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            offset={-250}
            duration={500}
            onClick={toggleMenu}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={toggleMenu}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="school"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
        </li>
      </ul>

      <FontAwesomeIcon
        className="menu-icon"
        onClick={toggleMenu}
        icon={faBars}
      />
    </nav>
  );
};

export default Navbar;
