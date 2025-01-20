import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactFormWithMap.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", 
        "YOUR_TEMPLATE_ID", 
        form.current, 
        "YOUR_PUBLIC_KEY" // Replace this with your actual public key
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" required />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="4" required />

      <button type="submit" className="submit-button">Send</button>
    </form>
  );
};

const ContactFormWithMap = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 52.3759, // Latitude of Hannover
    lng: 9.7320,  // Longitude of Hannover
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77935.73165405088!2d9.67907158907445!3d52.37963775168948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b514d494f85%3A0x425ac6d94ac4720!2sHanover!5e0!3m2!1sen!2sde!4v1737028223305!5m2!1sen!2sde" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div className="form-container">
        <h2>Sign Up for Our Classes</h2>
        <p>
          To be invited to the nearest call center and get free physical advice
          to learn more about the program.
        </p>
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactFormWithMap;
