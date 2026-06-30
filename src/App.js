import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/header/Home/Home";
import About from "./components/header/about/About";
import Skills from "./components/header/skills/Skills";
import Qualification from "./components/header/qualification/Qualification";
import Work from "./components/header/work/Work";
import Contact from "./components/header/contact/Contact";
import Footer from "./components/header/footer/Footer";
import Scrollup from "./components/header/scrollup/Scrollup";
// import DotLoader from "react-spinners/DotLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [blackAndWhite, setBlackAndWhite] = useState(false);

  const handleButtonClick = () => {
    setBlackAndWhite(!blackAndWhite);
  };

  const wrapperClassName = `app-wrapper ${blackAndWhite ? "black-and-white" : ""}`;

  return (
    <div >
      {loading ? (
        <div className="app-loder">
          <PropagateLoader
            loading={loading}
            // cssOverride={override}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#bc9ac1"
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className={wrapperClassName}>
          <div className="ambient-blob blob-1"></div>
          <div className="ambient-blob blob-2"></div>
          <div className="ambient-blob blob-3"></div>
          <Header onButtonClick={handleButtonClick} blackAndWhite={blackAndWhite} />

          <main className="main">
            <Home blackAndWhite={blackAndWhite} />
            <About blackAndWhite={blackAndWhite} />
            <Skills blackAndWhite={blackAndWhite} />
            <Qualification blackAndWhite={blackAndWhite} />
            <Work blackAndWhite={blackAndWhite} />
            <Contact blackAndWhite={blackAndWhite} />
          </main>
          <Footer blackAndWhite={blackAndWhite} />
          <Scrollup blackAndWhite={blackAndWhite} />
        </div>
      )}
    </div>
  );
}

export default App;
