import React from "react";
import styled from "styled-components";
import Projects from "../Projects/projects";
import AboutPage from "../About-Page/about";
import Contact from "../Contact/contact";
import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/navBar";
import Navigation from '../Navbar/nav';


const Home = styled.div`
  height: 630px;
  width: 100%;
  padding-top: 170px;
  text-shadow: 1px 1px black;
  border-bottom: 3px solid white;
  background-image: url('https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-repeat: no-reapeat;
  // opacity: 0.6;

  /* Home Media Query */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    padding-top: 15px;
    height: 493px;
    h1 {
      font-size: 35px !important;
    }
    h6 {
      font-size: 12px !important;
      width: 100%;
    }

    p {
      font-size: 20px !important;
    }
    span {
      font-size: 18px;
    }
  } /* Home Media Query end */

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: 737px;
    h1 {
      font-size: 40px !important;
    }
    h6 {
      font-size: 12px !important;
      width: 100%;
    }

    p {
      font-size: 28px !important;
    }
    span {
      font-size: 20px;
    }
  }

  .intro {
    margin: auto;
  }

  h1 {
    color: white;
    font-size: 50px;
    font-family: "Gayathri", sans-serif;
    margin: 0 auto 0 auto;
    text-align: center;
  }

  h6 {
    color: white;
    font-size: 18px;
    font-family: "Gayathri", sans-serif;
    text-shadow: 1px 1px black;
    margin: auto;
    font-weight: bolder !important;
    width: 100%;
    margin-top: 15px;
    justify-content: center;

    div {
      display: flex;
      width: 360px;
      margin: auto;
      justify-content: center;

      /* div Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        width: 100%;
        justify-content: center;
      } /* divMedia Query end */
    }

    span {
      border: 2px solid white;
      margin: 16px;
      padding: 7px 5px 1px 5px;
      border-radius: 2px;
      background: white;
      color: black;
      text-shadow: 1px 1px white;
      /* h6 div Media Query */
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        margin: 7px;
        background: white;
        color: black;
        text-shadow: 1px 1px white;
      } /* h6 div Media Query end */

      :hover {
        background: #2a4760;
        color: white;
        text-shadow: 1px 1px black;
      }
    }

    /* h6 div Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 100%;
    } /* h6 div Media Query end */
  }

  p {
    color: white;
    font-size: 20px;
    font-family: "Gayathri", sans-serif;
    font-weight: bolder;
    text-align: center;
  }

  a {
    width: 75px;
    border: 1px solid white;
    height: 30px;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 330px;
  margin: auto !important;

  /* Button Media Query */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    width: 242px;
    margin: auto !important;
    justify-content: center;
  } /* Button Media Query end */
`;

const ProjectButton = styled.div`
  margin: auto !important;
  width: 150px;
  margin-top: 50px !important;

  a {
    border: none;
  }

  .view-projects-button {
    display: inline-block;
    width: 200px;
    padding-top: 12px;
    color: #fff;
    border: 2px solid #fff;
    text-align: center;
    outline: none;
    text-decoration: none;
    font-size: 17px;
    font-weight: bolder !important;
    height: 32px;
    width: 155px;
    margin: 2px 3px;
    border-radius: 3px;
    text-shadow: 1px 1px black;

    /* .view-projects-button Media Query */
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      width: 140px;
      font-size: 15px;
    } /* .view-projects-button Media Query end */

    :hover,
    :active {
      background-color: #fff;
      color: #000;
      text-shadow: 1px 1px white;
    }
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .view-projects-button {
      height: 45px !important;
      width: 236px !important;
      font-size: 24px !important;
      margin-left: -45px;
    }
  }
`;

// const AboutButton = styled.div`
//   margin: auto !important;
//   width: 150px;
//   margin-top: 50px !important;

//   #link-projects {
//     border: none;
//   }

//   .view-about-button {
//     display: inline-block;
//     width: 200px;
//     padding-top: 15px;
//     color: #fff;
//     border: 2px solid #fff;
//     text-align: center;
//     outline: none;
//     text-decoration: none;
//     font-size: 17px;
//     font-weight: bolder !important;
//     height: 32px;
//     width: 140px;
//     margin: 2px 3px;
//     border-radius: 3px;
//     text-shadow: 1px 1px black;

//     /* .view-about-button Media Query */
//     @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
//       width: 110px;
//       font-size: 15px;
//     } /* .view-about-button Media Query end */

//     :hover,
//     :active {
//       background-color: #fff;
//       color: #000;
//       text-shadow: 1px 1px white;
//     }
//   }
// `;

class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <Home className="Home">
          <div className="intro">
            <p>Hi, my name is</p>
            <h1>Tashi Woeser.</h1>
            <h1>I design & build user interfaces.</h1>
            <h6>
              <div>
                <span>JavaScript</span> <span>React</span> <span>Redux</span>
              </div>
              <div>
                <span>Html</span> <span className="css">Css</span>{" "}
                <span className="sc">Styled Components</span>
              </div>
            </h6>
          </div>
          <Buttons>
            <ProjectButton>
              <a href='/#projects'>
                <span className="view-projects-button ">
                  View Projects <i class="fas fa-arrow-down"></i>
                </span>
              </a>
            </ProjectButton>
          </Buttons>
        </Home>
        {/* <Navbar /> */}
        <Navigation />
        <Projects />
        <AboutPage />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
