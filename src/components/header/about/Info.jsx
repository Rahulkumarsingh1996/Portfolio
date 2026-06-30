import React from 'react';

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box" style={{ "--tech-color": "#a061fb", "--glow-color": "rgba(160, 97, 251, 0.15)" }}>
        <i className="uil uil-award-alt about__icon" style={{ color: "#a061fb" }}></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3+ Years Working</span>
      </div>

      <div className="about__box" style={{ "--tech-color": "#25d366", "--glow-color": "rgba(37, 211, 102, 0.15)" }}>
        <i className="uil uil-bag about__icon" style={{ color: "#25d366" }}></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12+ Projects</span>
      </div>

      <div className="about__box" style={{ "--tech-color": "#3178c6", "--glow-color": "rgba(49, 120, 198, 0.15)" }}>
        <i className="fa-solid fa-headset about__icon" style={{ color: "#3178c6" }}></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;