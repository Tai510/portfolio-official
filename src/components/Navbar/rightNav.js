import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  margin-right: 35px;
  li {
    padding: 0px 10px;
    a {
      color: white;
      text-decoration: none;
      margin: 0 20px;
      :hover {
        border-bottom: 3px solid white;
        padding-bottom: 5px;
      }
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -16px;
    right: 0;
    left: 0;
    height: 470px;
    width: 100%;
    padding-top: 3.5rem;
    padding: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: white;
      margin-top: 60px;
    }
    a {
      color: white !important;
      text-decoration: none;
    }
  }
  /* @media only screen 
  and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 2) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -16px;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    padding: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: white;
      margin-top: 60px;
    }
    a {
        color: white !important;
        text-decoration: none;
    }
  } */
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#aboutpage">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
    </Ul>
  );
};

export default RightNav;
