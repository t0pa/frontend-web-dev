import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useTheme, useMediaQuery } from "@mui/material";
import contactImage from './contactus.jpg';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here (e.g., send data to server)
      console.log("Form submitted:", formData);
      setIsFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCloseSnackbar = () => {
    setIsFormSubmitted(false);
  };

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="contact-page-container">
      <div className="contact-background-image" style={{ backgroundImage: `url(${contactImage})` }}></div>
      <div className="contact-content">
        <Typography variant={isSmallScreen ? 'h4' : isMediumScreen ? 'h3' : 'h1'} className="contact-title">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            name="message"
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={formData.message}
            onChange={handleChange}
            error={errors.message ? true : false}
            helperText={errors.message}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Snackbar open={isFormSubmitted} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
