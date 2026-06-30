import React, { useEffect } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
const Data = ({ theamLight }) => {
  const textColorStyle = theamLight ? { color: "white" } : null;
  // const textbuttonColorStyle = theamLight ? { color: 'black' } : null;
  const backgroundButtonColorStyle = theamLight
    ? { backgroundColor: "white", color: "black" }
    : null;
  useEffect(() => {
    // console.log("theamLight in Home component:", theamLight);
  }, [theamLight]);


  return (
    <div className="home__data" data-aos="fade-left">
      <h1 className="home__title" style={textColorStyle}>
        Rahul Singh
      </h1>
      <Typewriter
        options={{
          strings: ["Mobile App Developer", "Frontend Developer"],
          autoStart: true,
          loop: true,
          wrapperClassName: "custom-typewriter-wrapper",
          cursorClassName: "custom-typewriter-cursor",
        }}
      />

      <p className="home__description" style={textColorStyle}>
        Passionate React Native Developer dedicated to crafting high-performance mobile applications and beautiful user interfaces.
      </p>
      <br />

      <a
        href="#contact"
        className="button button--flex"
        style={backgroundButtonColorStyle}
      >
        say Hello<i className="uil uil-message"></i>
      </a>
    </div>
  );
};

export default Data;
