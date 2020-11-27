import React from "react";
import "./about.css";
import images from "../images/profilePic.jpg";
import styled from "styled-components";

const AboutPageMain = styled.div`
  background: #df7e5f;;
  height: 890px;
  .about-Page {
    display: flex;
    justify-content: space-between;
    border: 1px solid #f6f1f1;
    margin: 35px auto;
    width: 1000px;
    height: 550px;
    background-color: white;
    border-radius: 5px;
    /* .about-Page Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      flex-direction: column;
      width: 100%;
      height: 800px;
    }
    /* .about-Page Media Query end */
  }
  .about-Image img {
    height: 450px;
    width: 477px;
    margin: 50px;
    /* .about-Image img Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 200px;
      height: 200px;
      margin: 60px;
      margin-bottom: 10px;
    }
    /* .about-Image img Media Query end */
  }
  .about-Info {
    text-align: center;
    color: #736e6e;
    height: 450px;
    width: 477px;
    margin: 50px;
    padding-top: 50px;
    margin-bottom: 0;
    /* .about-Info  Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 200px;
      height: 100%;
      margin: auto;
      padding-top: 0;
      padding-right: 0;
    }
    /* .about-Info  Media Query end */
  }
  .about-Links {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-right: 49px;
    margin-left: 43px;
    /* .about-Links  Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 200px;
      margin: auto;
      margin-top: 40px;
    }
    /* .about-Links   Media Query end */
    #aboutIcon {
      border: 1px solid white;
      height: 35px;
      width: 58px;
      padding-top: 18px;
      background-color: #c5c5c5;
      text-shadow: 1px 1px #736e6e;
      border-radius: 5px;
      :hover {
        background-color: #f2f0f0;
        border: 1px solid black;
      }
    }
  }
  .about-Links a {
    color: white;
  }
  .project-top {
    background: white;
    padding-top: 35px;
    p {
      text-align: center;
      padding-bottom: 80px;
    }
  }
`;

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
      <AboutPageMain id="aboutpage">
        <div className="project-top">
          <H1Top>About Me</H1Top>
          <H3Top>Hard working, Passionate, Team Player.</H3Top>
          <p>I am extremely passionate about Web Development</p>
        </div>
        <div className="about-Page">
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
                School 9-month coding acedemy. Currently looking for a job and
                can start immediately.
              </p>
            </div>

            <div>
              <div className="about-Links">
                <div>
                  <a href="https://www.linkedin.com/in/tashi-woeser-62b538167/">
                    <i id="aboutIcon" class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div id="about-github-Icon">
                  <a href="https://github.com/Tai510">
                    <i id="aboutIcon" class="fab fa-github"></i>
                  </a>
                </div>
                <div id="about-email-Icon">
                  <a href="mailto:tashiwoeser@gmail.com">
                    <i id="aboutIcon" class="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutPageMain>
    );
  }
}

export default AboutPage;
