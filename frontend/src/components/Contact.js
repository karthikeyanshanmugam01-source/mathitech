import React, { useRef, useState} from "react";
import "./Contact.css";

function Contact() {
  const form = useRef();
  
const [formData, setFormData] = useState({
    name: "",
    email:"",
    contact: "",
    address: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  
  // ✅ Email Validation Regex
  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Contact validation
    if (!formData.contact) {
      newErrors.contact = "Contact is required";
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    // Description validation
    if (!formData.description) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const sendData = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Email sent!");
    } else {
      alert("Error sending email");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form ref={form} onSubmit={sendData} onChange={handleChange} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        
        <input type="text" name="contact" placeholder="Contact Number" required />
        
 {/* ✅ EMAIL FIELD */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}


        <input type="text" name="address" placeholder="Address" required />
        
        <textarea
          name="description"
          placeholder="Description"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;