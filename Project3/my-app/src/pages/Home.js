import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import printerImage from './printer.jpg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate('/products');
  };

  return (
    <div className="home-container">
      <div className="background-image">
        <img src={printerImage} alt="3D Printer" />
      </div>
      <div className="content">
        <Typography variant="h1" className="home-title" >Welcome to Our 3D Printer Store</Typography>
        <Typography variant="body1" className="home-text">
          Get your high-quality 3D printer today!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuyNowClick}
          style={{ marginTop: '10px' }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default Home;
