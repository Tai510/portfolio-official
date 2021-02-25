import React from "react";
import "./projects.css";
import weather from "../images/weather-app.png";
import taste from "../images/taste.png";
import organize from "../images/organize.png";
import myphy from "../images/myphy.png";


class Projects extends React.Component {
  render() {
    return (
      <div className='PortfolioPage' id="projects">
        <div className="project-top">
          <div className='h1-top'>Projects</div>
          <div className='h3-top'>What I've been up to.</div>
          <p>Here are some of my recent work.</p>
        </div>
        <div className='ProjectDiv'>
          <div className="weather-div">
            <div className="post">
              <img src={weather}></img>
            </div>
            <div className="div-info">
              <h3>Weather app info</h3>
              <p>
                Get live Weather Update from around the world that you can
                search by City State or Country.
              </p>
              <p>Used React, Styled Component, Css</p>
              <p>Self Project using Public Api</p>
              <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://world-weather-website.herokuapp.com/">
                    Visit Site
                  </a>
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://github.com/Tai510/weather-app">
                    View GitHub
                  </a>
              </div>
            </div>
          </div>

          <div className="taste-div">
            <div className="post">
              <img src={taste}></img>
            </div>
            <div className="div-info">
              <h3>Taste of Himalayas Website</h3>
              <p>
                Website for Himalayan restaurant located in downtown Sonoma.
              </p>
              <p>Used React, React Bootstrap, Styled Components, Css</p>
              <p>Fully Responsive on small devices</p>
              <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="http://himalayasinsonoma.com/">
                    Visit Site
                  </a>
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://github.com/Tai510/taste-official">
                    View GitHub
                  </a>
              </div>
            </div>
          </div>

          <div className="organize-div">
            <div className="post">
              <img src={organize}></img>
            </div>
            <div className="div-info">
              <h3>Daily Planner App</h3>
              <p>
                Create an Account and use organize to help with daily planning
                with live news , weather and calender.
              </p>
              <p>
                Used React, React Bootstrap, Firebase, Styled Components, Css
              </p>
              <p>Full Stack Project</p>
              <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://auth-production-8d2eb.web.app">Visit Site</a>
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://github.com/Tai510/firebase-app">
                    View GitHub
                  </a>
                </div>
            </div>
          </div>

          <div className="organize-div">
            <div className="post">
              <img src={myphy}></img>
            </div>
            <div className="div-info">
              <h3>Myphy Dreams</h3>
              <p>
              Mympy Dream is a marketplace where individuals 
              can create a profile and post their project and 
              needs and find funding from the Mymphy Dreams community.
              </p>
              <p>React, Redux, Postgress,Rest API, AuthO, Stripe, Cloudnary, Node</p>
              <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://mympydreamers.netlify.app/">Visit Site</a>
                  <a style={{ display: "table-cell" }} target="_blank" rel="noopener noreferrer" href="https://github.com/mympy-dreamers/Frontend">
                    View GitHub
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
