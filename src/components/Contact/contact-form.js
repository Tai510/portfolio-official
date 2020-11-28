import React, { useState } from "react";
import { db } from "../firebase";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted!!!!");
      })
      .catch((error) => {
        alert(error.message);
        console.log("Didnt send message!!!");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="ContactForm">
      <div className="contact-form">
        <div className="c-f-links">
          <div className="contact-links-left">
            <div className="cll-1">
              <a href="https://www.linkedin.com/in/tashi-woeser-62b538167/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="cll-2">
              <a href="https://github.com/Tai510">
                <i class="fab fa-github"></i>
              </a>
            </div>
            <div className="cll-3">
              <a href="mailto:tashiwoeser@gmail.com">
                <i class="far fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-links-right">
            <div className="c-l-phone">
              <a href="tel:+1-510-409-2855">
                Phone Call <i class="fas fa-phone"></i>
              </a>
            </div>
            <div className="c-l-mail">
              <a href="mailto:tashiwoeser@gmail.com">
                <label>E-mail </label>
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;