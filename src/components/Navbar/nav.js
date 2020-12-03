import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const Navigation = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/" className="active">
            Home
          </Link>
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
          <a href="Resume-Tashi-Woeser.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
