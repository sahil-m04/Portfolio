import React from "react";
import './Contact.css';
import { Navbar } from "./Navbar";

const contact = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h1>Contact Me</h1>
<div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Your Full Name" id="email" name="email" required/>
          <label for="email">Email</label>
          <input type="text" placeholder="Enter Your Email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="textarea">Your Message</label>
          <textarea name="textarea"  id="textarea" rows="10" cols="50" required></textarea>
        </div>
        <button class="form-submit-btn" type="submit" disabled>Send</button>
      </form>
    </div>
    </div>
    </>
    
  );
};

export default contact;
