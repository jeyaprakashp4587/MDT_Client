import React from "react";
import "../styles/contact.css";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h3>Let connect us</h3>
      <div className="contact-wrapper-inputs">
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        <button>submit</button>
      </div>
    </div>
  );
};

export default Contact;
