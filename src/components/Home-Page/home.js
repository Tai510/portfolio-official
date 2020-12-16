import React from "react";
import Projects from "../Projects/projects";
import AboutPage from "../About-Page/about";
import Contact from "../Contact/contact";
import Navigation from "../Navbar/nav";
import './home.css'
// import Navbar from '../Navbar/navbar';


class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <div className="Home">
          <div className="intro">
            <p>Hi, my name is</p>
            <h1>Tashi Woeser.</h1>
            <h1>I design & build user interfaces.</h1>
            <h6>
              <div>
                <span>JavaScript</span> <span>React</span> <span>Material Ui</span>
              </div>
              <div>
                <span>Html</span> <span className="css">Css</span>{" "}
              </div>
              <div>
                <span>Bootstrap</span> <span>Responsive</span>
              </div>
            </h6>
          </div>
          <div className='Buttons'>
            <div className='button-div'>
              <a href="/#projects">
                <span className="view-projects-button ">
                  View Projects <i class="fas fa-arrow-down"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        {/* <Navbar /> */}
        <Projects />
        <AboutPage />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
