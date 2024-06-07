import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"; // Import MUI Button component
import "./Home.css";
import printerImage from "./printer.jpg";

function Home() {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/products");
  };

  return (
    <div className="home-container">
      <div className="background-image">
        <img src={printerImage} alt="3D Printer" />
      </div>
      <div className="content">
        <h1>Welcome to Our 3D Printer Store</h1>
        <p>Get your high-quality 3D printer today!</p>
        <Button variant="contained" color="primary" onClick={handleBuyNowClick}>
          Buy Now
        </Button> {/* Modified button */}
      </div>
    </div>
  );
}

export default Home;
