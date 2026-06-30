import React, { useState } from "react";
import "./qualification.css";

const Qualification = ({ blackAndWhite }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const activeTabStyle = blackAndWhite
    ? { color: "white" }
    : { color: "var(--title-color-dark, #000)" };
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "white", color: "black" }
    : null;

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title" style={textColorStyle}>
        Qualification
      </h2>
      <span className="section__subtitle" style={textColorStyle}>
        My personal journey
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__tabs-container">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
              onClick={() => toggleTab(1)}
              style={toggleState === 1 ? activeTabStyle : textColorStyle}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active"
                  : "qualification__button"
              }
              onClick={() => toggleTab(2)}
              style={toggleState === 2 ? activeTabStyle : textColorStyle}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
        </div>

        <div className="qualification__sections">
          {/* EDUCATION SECTION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* 1. Graduation */}
            <div className="qualification__data">
              <div className="qualification__info-box" style={{ "--tech-color": "#61dafb" }}>
                <h3 className="qualification__title" style={textColorStyle}>Graduation</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Narula Institute of Technology
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#61dafb" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>
              
              <div></div>
            </div>

            {/* 2. Diploma */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#3178c6" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div className="qualification__info-box" style={{ "--tech-color": "#3178c6" }}>
                <h3 className="qualification__title" style={textColorStyle}>Diploma</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Shaheed Bhagat Singh State University
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>

            {/* 3. 10+2 */}
            <div className="qualification__data">
              <div className="qualification__info-box" style={{ "--tech-color": "#e34f26" }}>
                <h3 className="qualification__title" style={textColorStyle}>10+2</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  High School, Jalalpur Bazar
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#e34f26" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div></div>
            </div>

            {/* 4. 10th */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#1572b6" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div className="qualification__info-box" style={{ "--tech-color": "#1572b6" }}>
                <h3 className="qualification__title" style={textColorStyle}>10th</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Adarsh Janta High School Naini (Saran)
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2014
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* 1. Extended Dynamic Systems */}
            <div className="qualification__data">
              <div className="qualification__info-box" style={{ "--tech-color": "#a061fb" }}>
                <h3 className="qualification__title" style={textColorStyle}>Frontend Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Extended Dynamic Systems Pvt Ltd
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> January 2026 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#a061fb" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div></div>
            </div>

            {/* 2. Atologist Infotech */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#61dafb" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div className="qualification__info-box" style={{ "--tech-color": "#61dafb" }}>
                <h3 className="qualification__title" style={textColorStyle}>React-Native Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Atologist Infotech Pvt. Ltd.
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> July 2025 - December 2025
                </div>
              </div>
            </div>

            {/* 3. Cylsys Software */}
            <div className="qualification__data">
              <div className="qualification__info-box" style={{ "--tech-color": "#ff5722" }}>
                <h3 className="qualification__title" style={textColorStyle}>Software Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Cylsys Software Solution Pvt Ltd
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> April 2023 - July 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#ff5722" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div></div>
            </div>

            {/* 4. Qwegle Technologies */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder" style={{ ...backgroundButtonColorStyle, "--tech-color": "#f7df1e" }}></span>
                <span className="qualification__line" style={backgroundButtonColorStyle}></span>
              </div>

              <div className="qualification__info-box" style={{ "--tech-color": "#f7df1e" }}>
                <h3 className="qualification__title" style={textColorStyle}>Frontend Developer</h3>
                <span className="qualification__subtitle" style={textColorStyle}>
                  Qwegle Technologies Private Limited
                </span>
                <div className="qualification__calendar-badge">
                  <i className="uil uil-calendar-alt"></i> November 2022 - March 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
