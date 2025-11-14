import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import "./style.css";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";

import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";

import EducationJourney from "./components/aboutme/journey/EducationJourney";


import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";

import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";


// import Zoom from 'react-reveal/Zoom';
import Toolkit from "./components/aboutme/skills/Toolkit";

function App() {
  const [load, updateLoad] = useState(true);
    useEffect(() => {
    document.title = "Pranav Kashikey | Portfolio";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}></Route>
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            
            <Route
              path="educationjourney"
              element={<EducationJourney />}
            ></Route>
            
            <Route path="toolkit" element={<Toolkit />}></Route>
          </Route>
          
         
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<ComingSoon />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
