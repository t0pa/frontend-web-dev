import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import Products from "./pages/Products"; // Import Products page
import Posts from "./pages/Posts";
import Timer from './components/Timer'; // Import the Timer component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="timer-wrapper">
          <Timer /> {/* Include the Timer component here */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route path="/about" element={<About />} /> {/* Route for About */}
          <Route path="/products" element={<Products />} /> {/* Route for Products */}
          <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
          <Route path="/posts" element={<Posts />} /> {/* Route for Posts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
