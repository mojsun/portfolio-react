import React from "react";

function Contact() {
  return (
    <form>
      <h1>Contact Me</h1>
      <div class="form-group">
        <label for="emailInput">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="your email"
        />
        <br></br>
        <br></br>
        <label for="nameInput">Name</label>
        <input
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="your name"
        />
        <br></br>
        <br></br>
      </div>
    </form>
  );
}

export default Contact;
