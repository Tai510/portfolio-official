import React from "react";
import "./about.css";
import images from "../images/profilePic.jpg";


class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage " id="aboutpage">
        <div className="project-top">
          <div className='h1-top'>About Me</div>
          <div className='h3-top'>Hard working, Passionate, Team Player.</div>
          <p>I am extremely passionate about Web Development</p>
        </div>
        <div className="about-image-div">
          <div className="about-Image">
            <img src={images}></img>
          </div>

          <div className="about-Info">
            <div>
              <h1>Hi. I'm Tashi, nice to meet you.</h1>
            </div>
            <div>
              <p>
                I am passionate Web Developer. Recently Graduated from Lambda
                School 9-month coding acedemy. I am a Front End Developer with
                passion for problem solving and creating intuitive, dynamic user
                experiences. Currently looking for a job and can start
                immediately.
              </p>
            </div>

            <div>
              <div className="about-Links">
                <div>
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    href="https://www.linkedin.com/in/tashi-woeser-62b538167/"
                  >
                    <i id="aboutIcon" class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div id="about-github-Icon">
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    href="https://github.com/Tai510"
                  >
                    <i id="aboutIcon" class="fab fa-github"></i>
                  </a>
                </div>
                <div id="about-email-Icon">
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    href="mailto:tashiwoeser@gmail.com"
                  >
                    <i id="aboutIcon" class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
