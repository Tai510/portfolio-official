import React, { useState } from "react";
import { db } from "../firebase";

const MessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}>
          </input>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={() => {
          alert('It Worked!!!')
        }}>Alert</button> */}    
    </div>
  );
};

export default MessageForm;
