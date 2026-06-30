import React, { useState } from "react";
import "./work.css";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Zomo Health",
    subtitle: "Personalized Health & Coaching Mobile App",
    category: "react-native",
    tags: ["React Native CLI", "TypeScript", "Redux", "Health Assessment"],
    shortDescription: "A health checkup and coaching mobile app designed to provide personalized health plans and tools.",
    description: "Zomo Health is a comprehensive health and wellness mobile application built with React Native CLI and TypeScript that provides corporate employees with personalized health plans and step-by-step health checkups. It includes coaching interfaces and engagement tools to promote employee wellbeing.",
    features: [
      "Personal Health Plans: customized step-by-step wellness assessments.",
      "Support & Motivation: interactive coaching tools to keep users engaged.",
      "Corporate Savings: helps companies reduce overall healthcare costs by maintaining a healthier, happier workforce."
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.zomohealth",
    techColor: "#20c997"
  },
  {
    id: 2,
    title: "MailBlitz",
    subtitle: "Mobile Email Marketing & Campaign App",
    category: "react-native",
    tags: ["React Native", "Campaign Builder", "Email Delivery", "Automation"],
    shortDescription: "Engineered a marketing application for 1,000+ users, reducing setup times and raising email delivery rates by 25%.",
    description: "MailBlitz is a high-performance email marketing client. It automates campaign setups and schedules emails to optimize deliverability. Built with React Native, it features real-time notifications, contact group management, and robust campaign analytics.",
    features: [
      "Successful Delivery: increased email delivery success rates by 25%.",
      "Automated Scheduling: reduced manual campaign setup time by 30%.",
      "Mass Campaigns: engineered to reliably handle 1,000+ active marketing users."
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.Cylsysmailblitz",
    techColor: "#a061fb"
  },
  {
    id: 3,
    title: "Digital Visiting Card",
    subtitle: "Modern Digital Networking & QR Sharing",
    category: "react-native",
    tags: ["React Native", "QR Code Engine", "Contact Aggregator", "Biometrics"],
    shortDescription: "An app for generating QR-code-based digital business cards that recipients can scan and save to contacts instantly.",
    description: "Digital Visiting Card modernizes professional networking by replacing paper cards with QR codes. It features a dashboard to manage profile info (Name, Email, Organization, Photo, and Phone) and generates clean QR codes for seamless contact sharing.",
    features: [
      "QR Code Exchange: generates and displays scanned cards with complete details.",
      "Instant Contacts Save: recipient can scan the code to save information directly to their device contacts.",
      "User Dashboard: login page and details panel to manage and edit contact credentials easily."
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.cylsysdigicard",
    techColor: "#61dafb"
  },
  {
    id: 4,
    title: "HRMS Info",
    subtitle: "Mobile Employee Management & Attendance Portal",
    category: "react-native",
    tags: ["React Native", "HR Tools", "Shift Tracking", "Geofencing"],
    shortDescription: "Facilitates check-ins, check-outs, and leave applications to manage multiple companies' employee workflows.",
    description: "HRMS Info is a cross-platform mobile interface designed to manage organizational and employee operations. It supports secure staff attendance tracking, geo-fenced check-ins, and automated leave request workflows for multiple businesses.",
    features: [
      "Multi-Company Data: streamlines corporate data tracking across separate organizational units.",
      "Staff Check-in/out: records daily logs and shifts dynamically.",
      "Leave Management: simplifies leave application submissions and HR authorization."
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.cylsyshrms",
    techColor: "#ff9f43"
  },
  {
    id: 5,
    title: "Cylsys CRM",
    subtitle: "Mobile & Web Access Contact Search Portal",
    category: "react-native",
    tags: ["React Native", "Redux", "Axios", "Pagination"],
    shortDescription: "Offers secure, role-based mobile search for contacts by name, company, email, or phone number.",
    description: "Cylsys CRM is a mobile and web-friendly application designed to search and filter corporate contacts. It supports exact, similar, and related searches across all Cylsys CRM products, using role-based permissions to ensure compliance and privacy.",
    features: [
      "Advanced Search: supports exact, similar, and related contact searches.",
      "Security & Transparency: implements role-based viewing rights and traces data sources.",
      "Modern Core: features quick book-marking, robust search history, Redux state caching, Axios requests, and seamless pagination."
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.cylsys_crm",
    techColor: "#0d6efd"
  },
  {
    id: 6,
    title: "E-Admin (Evolve Admin)",
    subtitle: "Digital Operations & Logistics Web Dashboard",
    category: "react",
    tags: ["React JS", "RBAC Security", "Petty Cash Log", "Admin Panel"],
    shortDescription: "Built a web panel to manage couriers, travel, vendors, visitors, petty cash, and role-based permissions.",
    description: "E-Admin is an enterprise-grade digital administration dashboard built in React JS. It acts as a central hub for corporate logistics, managing office travel booking, courier statuses, vendor lists, visitor registers, and petty cash logs.",
    features: [
      "Role-Based Access: secure authentication and authorization systems that reduced unauthorized access incidents by 30%.",
      "Onboarding Efficiency: improved employee onboarding workflow speeds.",
      "Operations Hub: tracks courier deliveries, vendor information, visitor logs, and cash expenditures."
    ],
    demoUrl: "",
    techColor: "#3178c6"
  },
  {
    id: 7,
    title: "IT-Asset",
    subtitle: "IT Asset Inventory & Allocation System",
    category: "react",
    tags: ["React JS", "Inventory Control", "Asset Allocation", "Bootstrap 5"],
    shortDescription: "Developed a web application to efficiently track, manage, and assign IT assets and software licenses.",
    description: "IT-Asset is a react-based inventory management dashboard that keeps track of hardware inventory, software licenses, device assignments, and lifecycle details. It allows administrators to request, approve, and assign devices to employees.",
    features: [
      "Asset Life Tracking: tracks device details, software keys, and assignments.",
      "Stock Optimization: updates available stocks dynamically on allocation and retirement of assets.",
      "Admin Operations: intuitive dashboards for approval flows and license expiry warnings."
    ],
    demoUrl: "",
    techColor: "#e34f26"
  },
  {
    id: 8,
    title: "RichWaves",
    subtitle: "Audio Streaming & Interactive Wave Landing Page",
    category: "react",
    tags: ["React JS", "Vite", "Audio Wave Visuals", "AOS Animations"],
    shortDescription: "A high-fidelity landing page showcasing customizable wave layouts, glassmorphic UI, and media controls.",
    description: "RichWaves is a visually stunning web interface featuring advanced music streaming visualizers, modern glassmorphic card patterns, clean media dashboards, and custom CSS page scroll animation integrations.",
    features: [
      "Glassmorphism Design: beautiful translucent sections with vibrant backdrop blends.",
      "Interactive Waves: audio-reactive visualizers built with Web Audio API elements.",
      "Responsive Layouts: optimized cross-screen performance using CSS Grid and Flexbox."
    ],
    demoUrl: "",
    techColor: "#d63384"
  }
];

const Work = ({ blackAndWhite }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category === activeFilter);

  const textColorStyle = blackAndWhite ? { color: "white" } : null;
  const activeTabStyle = blackAndWhite
    ? { color: "white" }
    : { color: "var(--title-color-dark, #000)" };
  const modalStyle = blackAndWhite ? { backgroundColor: "#1e1e1e", color: "white" } : null;
  const closeBtnStyle = blackAndWhite ? { color: "white" } : null;

  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title" style={textColorStyle}>Portfolio</h2>
      <span className="section__subtitle" style={textColorStyle}>Most recent work</span>

      <div className="work__container container">
        {/* Filters */}
        <div className="work__filters">
          <button
            className={`work__filter-btn ${activeFilter === "all" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("all")}
            style={activeFilter === "all" ? null : textColorStyle}
          >
            All
          </button>
          <button
            className={`work__filter-btn ${activeFilter === "react-native" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("react-native")}
            style={activeFilter === "react-native" ? null : textColorStyle}
          >
            Mobile Application
          </button>
          <button
            className={`work__filter-btn ${activeFilter === "react" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("react")}
            style={activeFilter === "react" ? null : textColorStyle}
          >
            Web Application
          </button>
        </div>

        {/* Projects Grid */}
        <div className="work__grid grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="work__card"
              style={{ "--tech-color": project.techColor }}
            >
              <div className="work__card-icon-wrapper" style={{ "--tech-color": project.techColor }}>
                <i className={`uil ${project.category === "react-native" ? "uil-mobile-android" : "uil-react"} work__card-icon`}></i>
              </div>
              <h3 className="work__card-title" style={textColorStyle}>{project.title}</h3>
              <span className="work__card-subtitle" style={textColorStyle}>{project.subtitle}</span>
              <p className="work__card-desc">{project.shortDescription}</p>
              
              <div className="work__card-tags">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="work__tag" style={{ borderColor: project.techColor, color: project.techColor }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="work__button"
                onClick={() => setSelectedProject(project)}
                style={textColorStyle}
              >
                Demo & Details
                <i className="uil uil-arrow-right work__button-icon"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Details Overlay */}
      {selectedProject && (
        <div className="work__modal active-modal" onClick={() => setSelectedProject(null)}>
          <div
            className="work__modal-content"
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <i
              className="uil uil-times work__modal-close"
              onClick={() => setSelectedProject(null)}
              style={closeBtnStyle}
            ></i>
            
            <div className="work__modal-header">
              <span className="work__modal-badge" style={{ backgroundColor: selectedProject.techColor }}>
                {selectedProject.category === "react-native" ? "Mobile Application" : "Web Application"}
              </span>
              <h3 className="work__modal-title" style={textColorStyle}>{selectedProject.title}</h3>
              <span className="work__modal-subtitle">{selectedProject.subtitle}</span>
            </div>

            <p className="work__modal-description">{selectedProject.description}</p>

            <div className="work__modal-features">
              <h4 className="work__modal-features-title" style={textColorStyle}>Key Features & Deliverables</h4>
              <ul className="work__modal-list">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="work__modal-item">
                    <i className="uil uil-check-circle work__modal-icon" style={{ color: selectedProject.techColor }}></i>
                    <p style={textColorStyle}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="work__modal-tech">
              <h4 className="work__modal-tech-title" style={textColorStyle}>Technology Stack</h4>
              <div className="work__modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="work__modal-tag" style={{ border: `1px solid ${selectedProject.techColor}`, color: selectedProject.techColor }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="work__modal-actions">
              {selectedProject.demoUrl ? (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex work__modal-btn"
                  style={{ backgroundColor: selectedProject.techColor, color: "#fff" }}
                >
                  {selectedProject.demoUrl.includes("play.google.com") ? (
                    <>
                      Play Store
                      <i className="fa-brands fa-google-play work__button-icon" style={{ marginLeft: "0.5rem" }}></i>
                    </>
                  ) : (
                    <>
                      Launch Demo
                      <i className="uil uil-globe work__button-icon" style={{ marginLeft: "0.5rem" }}></i>
                    </>
                  )}
                </a>
              ) : (
                <span className="work__modal-tag" style={{ border: "1px dashed #999", color: "#999", padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
                  Internal / Enterprise Product
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
