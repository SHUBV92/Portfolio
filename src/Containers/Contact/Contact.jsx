import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Your Email address</h1>
      <form>
        <input
          type="email"
          placeholder="Enter your email address"
        />
        <h1>Your Message</h1>
        <textarea>
          Enter Your Epic Message
        </textarea>
        <button>Submit</button>
      </form>
      <a href="linkedin.com/in/shubinder-virk-40508982/">
        <button>Linkedin</button>
      </a>
    </div>
  );
};

export default Contact;
