import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./ContactFormWithMap.css"; 
const ContactFormWithMap = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = {
    lat: 52.3759, // Latitude von Hannover
    lng: 9.7320,  // Longitude von Hannover
  };
  
  return (
    <div className="contact-container">
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="form-container">
        <h2>Sign Up for Our Classes</h2>
        <p>
          To be invited to the nearest call center and get free physical advice
          to learn more about the program.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="submit-button">GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormWithMap;
