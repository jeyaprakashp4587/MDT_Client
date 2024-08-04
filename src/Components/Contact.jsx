import React from "react";
import "../styles/contact.css";
import { Divider, Paper, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h3>Let connect us</h3>
      <div className="contact-wrapper-inputs">
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        <button>
          <FontAwesomeIcon icon={faEnvelope} /> submit
        </button>
      </div>
      <Divider textAlign="center">OR</Divider>
      <div className="contact-options">
        <Paper className="contact-option bg-dark" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faPhone} />
          +91 9025167302
        </Paper>
        <Paper className="contact-option bg-primary" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faEnvelope} />
          mdtlib.Gmail.com
        </Paper>
        <Paper className="contact-option bg-danger" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faWhatsapp} />
          WhatsApp
        </Paper>
      </div>
    </div>
  );
};

export default Contact;
