import React from "react";
import "./contact.css";
import profile from "../images/profilePic.jpg";
import styled from "styled-components";
import ContactForm from "./contact-form";

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

const Contact = () => {
  return (
    <div id="contact" className="ContactPage">
      <div className="contact-top">
        <H1Top>Contact</H1Top>
        <H3Top>Get in touch</H3Top>
        <p>I'm currently looking to find a job.</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
