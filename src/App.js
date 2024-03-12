import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
  once: true,
});
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/projects" Component={Projects} />
          <Route path="/certificate" Component={Certificate} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
