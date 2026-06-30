import React, { useEffect } from "react";
import "./scroll.css";

const Scrollup = ({ blackAndWhite }) => {
  const backgroundButtonColorStyle = blackAndWhite
    ? { backgroundColor: "white", color: "black" }
    : null;
  const textColorStyle = blackAndWhite ? { color: "black" } : null;

  useEffect(() => {
    const handleScroll = () => {
      const scrollup = document.querySelector(".scrollup");
      if (scrollup) {
        if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <a
      href="#"
      className="scrollup"
      style={backgroundButtonColorStyle}
      onClick={handleScrollToTop}
    >
      <i className="uil uil-arrow-up scrollup__icon" style={textColorStyle}></i>
    </a>
  );
};

export default Scrollup;
