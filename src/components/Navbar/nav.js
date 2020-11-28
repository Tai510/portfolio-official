import React from "react";
import './navBar.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a className='active' href="#home">Home</a>
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
      </ul>
    </nav>
  );
};

export default Navigation;
