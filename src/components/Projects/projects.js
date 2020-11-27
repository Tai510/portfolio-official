import React from "react";
import "./projects.css";
import styled from "styled-components";
import weather from "../images/weather-app.png";
import taste from "../images/taste.png";
import organize from "../images/organize.png";

const PortfolioPage = styled.div`
  background: #b3d9b3;
  height: 100%;
  .project-top {
    background: white;
    padding-top: 35px;
    p {
      text-align: center;
      padding-bottom: 80px;
    }
  }
  .pencil-image {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid black;
    margin: auto !important;
    display: flex;
    align-items: center !important;
  }
  /* PortfolioPage Media Query */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    height: 100%;
  }
  /* PortfolioPage Media Query end */
`;

const H1Top = styled.div`
  text-align: center;
  color: black;
  margin-top: 0;
  padding-top: 30px;
  font-size: 35px;
  border-bottom: 2px solid black;
  width: 145px;
  margin: auto;
`;

const H3Top = styled.div`
  text-align: center;
  color: green;
  font-size: 22px;
  margin-top: 20px;
`;

const ProjectDiv = styled.div`
  .weather-div {
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin-left: -83px;
  }
  .taste-div {
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin-left: -83px;
  }
  .organize-div {
    display: flex;
    justify-content: space-between;
    width: 1100px;
    margin-left: -83px;
  }
  .div-info {
    border: 1px solid white;
    width: 420px;
    height: 390px;
    margin-top: 40px;
    background: white;
    box-shadow: 0px 15px 12px rgba(29, 29, 29, 1);
    margin-left: 245px;
    h3 {
      color: black;
      text-align: center;
      font-size: 27px;
      font-family: "Roboto Condensed", sans-serif;
      margin-top: 50px;
    }
    p {
      font-size: 22px;
      margin: 20px 70px;
      font-family: "Barlow Condensed", sans-serif;
    }
  }

  /* ProjectDiv Media Query */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    flex-direction: column;
    width: 100%;
  }
  /* ProjectDiv Media Query end */

  /* display: flex; */
  justify-content: space-between;
  width: 930px;
  margin: auto;
  padding: 70px 0;
  .post {
    width: 420px;
    height: 280px;
    position: relative;
    cursor: pointer;
    /* .post Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 235px;
      margin: auto;
      height: 230px;
    }
    /* .post Media Query end */
  }
  .post:hover .post-s {
    width: 662px;
    height: 392px;
    margin-top: 40px;
    /* .post:hover .post-s Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 232px;
      height: 162px;
    }
    /* .post Media Query end */
  }
  img {
    display: block;
    width: 660px;
    height: 390px;
    box-shadow: 0px 15px 12px rgba(29, 29, 29, 1);
    border: 1px solid white;
    margin-top: 40px;
    /* img Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 230px;
      height: 160px;
    }
    /* img Media Query end */
  }
  .post-s {
    width: 0px;
    height: 282px;
    background: #d0cb48;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.7s;
    /* margin-top: 40px; */
    .hover-buttons {
      /* .hover-buttons Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        display: flex;
      }
      /* .hover-buttons Media Query */
      a {
        margin: 5px;
        border-radius: 2px;
        font-weight: 500;
        /* a Media Query */
        @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
          width: 76px !important;
          height: 17px;
          border: 2px solid white;
          font-size: 12px;
          font-weight: 500;
          border-radius: 2px;
        }
        /* a Media Query end */
      }
    }
    h2 {
      color: white;
      font-size: 30px;
      border-bottom: 6px solid white;
      padding: 10px 30px;
      margin: 0;
      /* h2 Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        font-size: 20px;
        margin-top: -10px;
      }
      /* h2 Media Query end */
    }
    h4 {
      color: white;
      font-size: 20px;
      padding: 0px 30px;
      padding-top: 10px;
      padding-bottom: 20px;
      margin: 0;
      margin-bottom: 5px;
      /* h4 Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        font-size: 12px;
        text-align: center;
        padding-bottom: 4px;
      }
      /* h4 Media Query end */
    }
    a {
      border: 3px solid white;
      padding: 5px;
      color: white;
      text-decoration: none;
      /* h2 Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        margin-top: -8px;
      }
      /* h2 Media Query end */
      :hover {
        background: white;
        color: #d0cb48;
      }
    }
  }
`;

class Projects extends React.Component {
  render() {
    return (
      <PortfolioPage id="projects">
        <div className="project-top">
          <H1Top>Projects</H1Top>
          <H3Top>What I've been up to.</H3Top>
          <p>Here's a some of my recent work.</p>
        </div>
        <ProjectDiv>
          <div className="weather-div">
            <div className="post">
              <img src={weather}></img>
              <div className="post-s">
                <h2>Weather App</h2>
                <h4>Live weather from around the world</h4>
                <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" href="https://world-weather-website.herokuapp.com/">
                    Visit Site
                  </a>
                  <a style={{ display: "table-cell" }} target="_blank" href="https://github.com/Tai510/weather-app">
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="div-info">
              <h3>Weather app info</h3>
              <p>
                Get live Weather Update from around the world that you can
                search by City State or Country.
              </p>
              <p>Used React, Styled Component, Css</p>
              <p>Self Project using Public Api</p>
            </div>
          </div>

          <div className="taste-div">
            <div className="post">
              <img src={taste}></img>
              <div className="post-s">
                <h2>Taste Website</h2>
                <h4>Website for Taste of the Himalayas</h4>
                <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" href="https://taste-official.herokuapp.com/">Visit Site</a>
                  <a style={{ display: "table-cell" }} target="_blank" href="https://github.com/Tai510/taste-official">View GitHub</a>
                </div>
              </div>
            </div>
            <div className="div-info">
              <h3>Taste of Himalayas Website</h3>
              <p>
                Website for Himalayan restaurant located in downtown Sonoma.
              </p>
              <p>Used React, React Bootstrap, Styled Components, Css</p>
              <p>Fully Responsive on small devices</p>
            </div>
          </div>

          <div className="organize-div">
            <div className="post">
              <img src={organize}></img>
              <div className="post-s">
                <h2>Organize App</h2>
                <h4>Organize planner Website</h4>
                <div className="hover-buttons">
                  <a style={{ display: "table-cell" }} target="_blank" href="https://redux-apps.herokuapp.com/">Visit Site</a>
                  <a style={{ display: "table-cell" }} target="_blank" href="https://github.com/Tai510/firebase-app">
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="div-info">
              <h3>Organize App</h3>
              <p>
                Create an Account and use organize to help with daily planning
                with live news , weather and calender.
              </p>
              <p>
                Used React, React Bootstrap, Firebase, Styled Components, Css
              </p>
              <p>Full Stack Project</p>
            </div>
          </div>
        </ProjectDiv>

        {/* <div class="centerflipcards clearfix">

                    <div class="col-md-4">
                        <div class="card-flip">
                            <div id='weather-app' class='frontCard invCard'>
                                <div class="card-container">
                                    <i class="fas fa-bolt"></i>
                                    <h2 class="textshadow">Weather App</h2>
                                    <h3 class="textshadow">Live Weather from around the world</h3>
                                </div>
                            </div>

                            <div class='backCard invCard2'>
                                <div class="card-container2">
                                    <a class="boxshadow flip-button" href='https://my-world-weather-app.herokuapp.com/'>View Project</a>
                                    <a class="boxshadow flip-button" href='https://github.com/Tai510/world-weather-app'>View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card-flip">
                            <div class='frontCard applyCard'>
                                <div class="card-container">
                                    <i class="fas fa-utensils"></i>
                                    <h2 class="textshadow">Taste Website</h2>
                                    <h3 class="textshadow">Website for Taste of the Himalayas</h3>
                                </div>
                            </div>

                            <div class='backCard applyCard2'>
                                <div class="card-container2">
                                    <a class="boxshadow flip-button" href='https://warm-sea-79088.herokuapp.com/'>View Project</a>
                                    <a class="boxshadow flip-button" href='https://github.com/Tai510/toth'>View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card-flip">
                            <div class='frontCard directionsCard'>
                                <div class="card-container">
                                    <i class="fas fa-download"></i>
                                    <h2 class="textshadow">Organize App</h2>
                                    <h3 class="textshadow">Website to organize daily chores and live news.</h3>
                                </div>
                            </div>

                            <div class='backCard directionsCard2'>
                                <div class="card-container2">
                                    <a class="boxshadow flip-button" href="#">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
      </PortfolioPage>
    );
  }
}

export default Projects;
