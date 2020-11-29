import React from "react";
import "./about.css";
import images from "../images/profilePic.jpg";
import styled from "styled-components";

const H1Top = styled.div`
  text-align: center;
  color: black;
  margin-top: 0;
  padding-top: 30px;
  font-size: 35px;
  border-bottom: 2px solid black;
  width: 150px;
  margin: auto;
`;

const H3Top = styled.div`
  text-align: center;
  color: green;
  font-size: 22px;
  margin-top: 20px;
`;

const AboutH1 = styled.h1`
  font-size: 2.25rem;
  font-weight: lighter;
  text-align: center;
  padding: 0.5rem;
  font-weight: bolder;
  font-family: "Amatic SC", cursive;
`;

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage ">
        <div className="project-top">
          <H1Top>About Me</H1Top>
          <H3Top>Hard working, Passionate, Team Player.</H3Top>
          <p>I am extremely passionate about Web Development</p>
        </div>
        <div className="about-image-div">
          <div className="about-Image">
            <img src={images}></img>
          </div>

          <div className="about-Info">
            <div>
              <AboutH1>Hi. I'm Tashi, nice to meet you.</AboutH1>
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
