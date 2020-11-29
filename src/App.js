import React from "react";
import "./App.css";
// import Footer from "./components/Footer/footer";
import HomePage from "./components/Home-Page/home";
import AboutPage from "./components/About-Page/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Resume from './components/Resume/Resume';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Router>
      {/* <Footer />       */}
    </div>
  );
}

export default App;
