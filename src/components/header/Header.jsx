import React, { useState, useEffect } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { TiWeatherSunny } from "react-icons/ti";

const Header = ({ onButtonClick, blackAndWhite }) => {
  /* ---------------- change background color -------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "black" }
    : null;
  const headerClassName = `header`;
  return (
    <header id="header" className={headerClassName}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Rahul
        </a>

        <div
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
          style={backgroundButtonColorStyle}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                  showMenu(false);
                }}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                  showMenu(false);
                }}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                  showMenu(false);
                }}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"> </i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => {
                  setActiveNav("#qualification");
                  showMenu(false);
                }}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                  showMenu(false);
                }}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                  showMenu(false);
                }}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>

            <div className="toggle-color-button" onClick={onButtonClick}>
              {blackAndWhite ? (
                <i className="uil uil-sun" style={{ fontSize: "1.25rem", color: "white" }}></i>
              ) : (
                <i className="uil uil-moon" style={{ fontSize: "1.25rem" }}></i>
              )}
            </div>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
            style={textColorStyle}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu(true)}
          style={textColorStyle}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
