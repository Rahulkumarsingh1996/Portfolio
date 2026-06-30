import React from "react";
import './home.css'

const Social = ({ blackAndWhite }) => {
  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  return (
    <div className="home__social">
      <a href="https://github.com/Rahulkumarsingh1996" className="home__social-icon github" target="_blank" rel="noreferrer">
        <i className="uil uil-github" style={textColorStyle}></i>
      </a>

      <a
        href="https://www.linkedin.com/in/rahulkumarsingh1996"
        className="home__social-icon linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt" style={textColorStyle}></i>
      </a>

      <a
        href="https://wa.me/918678827215"
        className="home__social-icon whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-whatsapp" style={textColorStyle}></i>
      </a>
    </div>
  );
};

export default Social;
