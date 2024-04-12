// components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Have a question or need assistance? Feel free to reach out to us:</p>
      <p>
        <strong>Email:</strong> m.okeke@alustudent.com
      </p>
      <p>
        <strong>Phone:</strong> +250 (790) 8010-63
      </p>
      <p>
        <strong>Address:</strong> Free Economic Zone, Kigali City, Rwanda
      </p>
      <h3>Send us a message</h3>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
