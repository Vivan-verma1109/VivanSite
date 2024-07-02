import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./email.css";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_pyf9b8b";
    const templateID = "template_sq9uds4";
    const publicKey = "ajrfhIx9-xxGxGLG0";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Vivan Verma",
      message: message,
    };
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("email sent succesfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("there was an error", error);
      });
  };

  return (
    <div className="flexbox">
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeHolder="YourName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeHolder="YourEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="Submit">Send Email</button>
      </form>
    </div>
  );
};

export default Email;
