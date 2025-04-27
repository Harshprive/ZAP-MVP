import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    primaryPhone: "",
    alternatePhone: "",
    gmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Details</h2>

      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
        placeholder="Enter Your Name"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="primaryPhone">Primary Phone:</label>
        <input
        placeholder="+91"
          type="tel"
          id="primaryPhone"
          name="primaryPhone"
          value={formData.primaryPhone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="alternatePhone">Alternate Phone:</label>
        <input
        placeholder="Alternate Phone"
          type="tel"
          id="alternatePhone"
          name="alternatePhone"
          value={formData.alternatePhone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="gmail">Gmail:</label>
        <input
        placeholder="@gmail.com"
          type="email"
          id="gmail"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          required
        />
      </div>

      
    </div>
  );
};

export default ContactForm;
