import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
