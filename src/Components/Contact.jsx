import React from "react";
import "../styles/contact.css";
import { Divider, Paper, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import Api from "../Api";
import axios from "axios";

const Contact = () => {
  // whats app link
  const link = "https://wa.me/message/6NF3SS3SXRUUM1";
  const whatsApp = () => {
    window.open(link);
  };

  const sendMail = async () => {
    const res = await axios.post(
      "http://192.168.43.90:3000/Email-System/send-email",
      {
        name: "jp",
        emailId: "jeyaprakashp431@gmail.com",
        message: "jnjf",
      }
    );
  };

  return (
    <div className="contact-wrapper">
      <h3 data-aos="zoom-in">Let connect us</h3>
      <div className="contact-wrapper-inputs">
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          data-aos="fade-up-left"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          data-aos="fade-up-right"
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          data-aos="fade-up-left"
        />
        <button onClick={() => sendMail()} data-aos="zoom-in">
          <FontAwesomeIcon icon={faPaperPlane} /> submit
        </button>
      </div>
      <Divider textAlign="center">OR</Divider>
      <div className="contact-options">
        <Paper
          className="contact-option bg-dark"
          style={{ color: "white" }}
          elevation={5}
        >
          <FontAwesomeIcon icon={faPhone} />
          +91 9025167302
        </Paper>
        <Paper className="contact-option bg-primary" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faEnvelope} />
          mdtlib.Gmail.com
        </Paper>
        <Paper
          className="contact-option bg-danger"
          style={{ color: "white" }}
          onClick={whatsApp}
        >
          <FontAwesomeIcon icon={faWhatsapp} onClick={whatsApp} />
          WhatsApp
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
