import React from "react";
import "./contact.css";
import profile from "../images/profilePic.jpg";
import styled from "styled-components";
import ContactForm from "./contact-form";
import MessageForm from "./message-form";


const Contact = () => {
  return (
    <div id="contact" className="ContactPage">
      <div className="contact-top">
        <div className='h1-top'>Contact</div>
        <div className='h3-top'>Get in touch</div>
        <p>Have a question or want to work together?</p>
      </div>
      <MessageForm />
    </div>
  );
};

export default Contact;
