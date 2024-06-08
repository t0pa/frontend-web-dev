import React from 'react';
import { Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import aboutImage from './about.jpg';
import './About.css';

function About() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="about-page-container">
      <div className="about-background-image" style={{ backgroundImage: `url(${aboutImage})` }}></div>
      <div className="about-content">
        <Typography variant={isSmallScreen ? 'h4' : isMediumScreen ? 'h3' : 'h1'} className="about-title">
          About Us
        </Typography>
        <Typography
          variant="body1"
          className="about-text"
          style={{
            fontSize: isSmallScreen ? '14px' : isMediumScreen ? '16px' : '18px',
            padding: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px'
          }}
        >
          Welcome to PrintIt Printers, where innovation meets creation. We are dedicated to providing high-quality 3D printers and accessories to enthusiasts, professionals, and businesses alike. Our mission is to empower individuals and organizations to bring their ideas to life through the power of 3D printing technology. Whether you're a hobbyist exploring the possibilities of 3D printing or a business looking to streamline your prototyping and manufacturing processes, we are here to support you every step of the way.
        </Typography>
      </div>
    </div>
  );
}

export default About;
