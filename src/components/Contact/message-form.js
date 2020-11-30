import React, { useState } from "react";
import { db } from "../firebase";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ [e.target.name]: e.target.value });
    console.log("Input", input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted! 👍");
      })
      .catch((error) => {
        alert(error.message);
        console.log("Didnt send message!");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="MessageForm">
      <form className="form-div" onSubmit={handleSubmit}>
        <input placeholder="Name" name="name" onChange={handleChange}></input>
        <input
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Message"
          name="message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={() => {
        alert('Holy Crap it worked!!')
      }}>Alert</button> */}
    </div>
  );
};

export default MessageForm;
