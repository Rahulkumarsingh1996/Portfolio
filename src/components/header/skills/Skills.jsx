import React, { useState, useEffect } from "react";
import "./skill.css";
import Html from "../../../assets/html.png";
import Css from "../../../assets/css.png";
import js from "../../../assets/javascript.png";
import react from "../../../assets/React.png";
import Node from "../../../assets/nodeJs.png";
import MySql from "../../../assets/mySql.png";

const SKILLS_DATA = [
  // --- FRONTEND ---
  {
    name: "React-Native",
    category: "frontend",
    image: react,
    level: "Advanced",
    percentage: 100,
    color: "#a061fb",
    glow: "rgba(160, 97, 251, 0.25)"
  },
  {
    name: "React",
    category: "frontend",
    image: react,
    level: "Advanced",
    percentage: 85,
    color: "#61dafb",
    glow: "rgba(97, 218, 251, 0.25)"
  },
  {
    name: "TypeScript",
    category: "frontend",
    image: (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="100" height="100" fill="#3178c6" rx="6" />
        <text x="45" y="78" fill="#ffffff" fontSize="42" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold" letterSpacing="-2">TS</text>
      </svg>
    ),
    level: "Advanced",
    percentage: 75,
    color: "#3178c6",
    glow: "rgba(49, 120, 198, 0.25)"
  },
  {
    name: "JavaScript",
    category: "frontend",
    image: js,
    level: "Advanced",
    percentage: 80,
    color: "#f7df1e",
    glow: "rgba(247, 223, 30, 0.25)"
  },
  {
    name: "Next.js",
    category: "frontend",
    image: (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="48" fill="#000000" stroke="#333" strokeWidth="2" />
        <path d="M35 70V30h8l22 34V30h6v40h-8L41 36v34h-6z" fill="#ffffff" />
        <path d="M67 30h6v40h-6z" fill="url(#nextGrad)" />
        <defs>
          <linearGradient id="nextGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#888888" />
          </linearGradient>
        </defs>
      </svg>
    ),
    level: "Intermediate",
    percentage: 50,
    color: "#000000",
    glow: "rgba(0, 0, 0, 0.25)"
  },
  {
    name: "CSS",
    category: "frontend",
    image: Css,
    level: "Advanced",
    percentage: 85,
    color: "#1572b6",
    glow: "rgba(21, 114, 182, 0.25)"
  },
  {
    name: "HTML",
    category: "frontend",
    image: Html,
    level: "Advanced",
    percentage: 90,
    color: "#e34f26",
    glow: "rgba(227, 79, 38, 0.25)"
  },

  // --- BACKEND & OTHERS ---
  {
    name: "Native Modules",
    category: "backend",
    image: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="25" y="10" width="50" height="80" rx="8" fill="rgba(160, 97, 251, 0.1)" stroke="#a061fb" />
        <line x1="40" y1="80" x2="60" y2="80" stroke="#a061fb" />
        <circle cx="50" cy="45" r="12" stroke="#a061fb" />
        <path d="M50 25v8M50 57v8M30 45h8M62 45h8" stroke="#a061fb" />
      </svg>
    ),
    level: "Intermediate",
    percentage: 50,
    color: "#a061fb",
    glow: "rgba(160, 97, 251, 0.25)"
  },
  {
    name: "My Sql",
    category: "backend",
    image: MySql,
    level: "Basics",
    percentage: 50,
    color: "#00758f",
    glow: "rgba(0, 117, 143, 0.25)"
  },
  {
    name: "System Design",
    category: "backend",
    image: (
      <svg viewBox="0 0 100 100" width="100%" height="100%" stroke="currentColor" strokeWidth="4" fill="none">
        <rect x="10" y="40" width="18" height="20" rx="3" fill="rgba(255, 87, 34, 0.1)" stroke="#ff5722" />
        <circle cx="48" cy="50" r="10" fill="rgba(255, 87, 34, 0.1)" stroke="#ff5722" />
        <rect x="72" y="20" width="18" height="20" rx="3" fill="rgba(255, 87, 34, 0.1)" stroke="#ff5722" />
        <rect x="72" y="60" width="18" height="20" rx="3" fill="rgba(255, 87, 34, 0.1)" stroke="#ff5722" />
        <path d="M28 50h10M58 45l14-15M58 55l14 15" stroke="#ff5722" strokeWidth="3" />
      </svg>
    ),
    level: "Intermediate",
    percentage: 55,
    color: "#ff5722",
    glow: "rgba(255, 87, 34, 0.25)"
  },
  {
    name: "Node js",
    category: "backend",
    image: Node,
    level: "Basics",
    percentage: 30,
    color: "#339933",
    glow: "rgba(51, 153, 51, 0.25)"
  }
];

const Skills = ({ blackAndWhite }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Reset animation trigger when switching filters
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeFilter === "all") return true;
    return skill.category === activeFilter;
  });

  const textColorStyle = blackAndWhite ? { color: "white" } : null;

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title" style={textColorStyle}>Skills</h2>
      <span className="section__subtitle" style={textColorStyle}>My technical level</span>

      {/* Tabs Filter */}
      <div className="skills__filters">
        <button
          className={`skills__filter-btn ${activeFilter === "all" ? "active-filter" : ""}`}
          onClick={() => setActiveFilter("all")}
          style={blackAndWhite && activeFilter === "all" ? { backgroundColor: "white", color: "black" } : null}
        >
          All
        </button>
        <button
          className={`skills__filter-btn ${activeFilter === "frontend" ? "active-filter" : ""}`}
          onClick={() => setActiveFilter("frontend")}
          style={blackAndWhite && activeFilter === "frontend" ? { backgroundColor: "white", color: "black" } : null}
        >
          Frontend
        </button>
        <button
          className={`skills__filter-btn ${activeFilter === "backend" ? "active-filter" : ""}`}
          onClick={() => setActiveFilter("backend")}
          style={blackAndWhite && activeFilter === "backend" ? { backgroundColor: "white", color: "black" } : null}
        >
          Backend & Other
        </button>
      </div>

      <div className="skills__container container">
        <div className="skills__grid">
          {filteredSkills.map((skill, index) => {
            // Adjust colors for Next.js in dark mode so it contrast-scales perfectly
            const isNextjs = skill.name === "Next.js";
            const techGlow = isNextjs && blackAndWhite ? "rgba(255, 255, 255, 0.25)" : skill.glow;
            const techColor = isNextjs && blackAndWhite ? "#ffffff" : skill.color;

            const cardStyle = {
              "--glow-color": techGlow,
              "--tech-color": techColor,
              ...(blackAndWhite
                ? {
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }
                : null)
            };

            return (
              <div
                className="skill__card"
                key={index}
                style={cardStyle}
              >
                <div className="skill__icon-wrapper">
                  {typeof skill.image === "string" ? (
                    <img src={skill.image} alt={skill.name} className="skill__icon" />
                  ) : (
                    <div className="skill__icon-svg">
                      {skill.image}
                    </div>
                  )}
                </div>
                <div className="skill__info">
                  <h3 className="skill__name" style={textColorStyle}>{skill.name}</h3>
                  <span className="skill__level">{skill.level}</span>
                </div>
                <div className="skill__progress-container">
                  <div className="skill__progress-bar">
                    <div
                      className="skill__progress-fill"
                      style={{
                        width: animate ? `${skill.percentage}%` : "0%",
                        backgroundColor: techColor
                      }}
                    ></div>
                  </div>
                  <span className="skill__percentage">{skill.percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
