import React from "react";

const ContactUs = () => {
  const inputFieldHeight = {
    height: "40px",
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "10px",
      }}
    >
      <div>
        <h2>Get in Touch</h2>
        <p>Fill in the form to start a conversation.</p>
      </div>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Telephone" />
      <textarea
        placeholder="Leave a message here"
        style={inputFieldHeight}
      ></textarea>
      <br />

      <button>Submit</button>
    </section>
  );
};

export default ContactUs;
