import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Menu from "./Menu/Menu";
// import Footer from "./components/Footer";

import "./Portfolio.css";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Menu />
        <div className="container customColumnWidth">
          <Route exact path="/vivi-cowan">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
