import React from "react";
import "../about/about.css";
import AboutImg from "../../../assets/rahul.svg";
import CV from "../../../assets/rahul.pdf";
import Info from "./Info";
import rahulImg from '../../../assets/rahul.png'
const About = ({ blackAndWhite }) => {
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "white", color: "black" }
    : null;
  return (
    <section className="about section" id="about">
      <h2 className="section__title" style={textColorStyle}>
        About Me
      </h2>
      <span className="section__subtitle" style={textColorStyle}>
        My introduction
      </span>

      <div className="about__container container grid">
        {blackAndWhite ? (
          <img src={rahulImg} alt="" className="about__img" />
        ) : (
          <img src={AboutImg} alt="" className="about__img" />
        )}
        <div className="about__data">
          <Info />

          <p className="about__description" style={textColorStyle}>
            Motivated React Native Developer with 3+ years of experience building high-performance mobile applications for iOS and Android. Delivered 12+ end-to-end projects across Healthcare, CRM, and Fintech domains. Skilled in RESTful APIs, scalable feature development, and performance optimization, with a strong focus on clean, maintainable code and user-centric solutions.
          </p>
          <br />

          <a
            download=""
            href={CV}
            className="button button--flex"
            style={backgroundButtonColorStyle}
          >
            Download CV
            <i className="uil uil-file-info-alt "></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
