import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import Timer from './components/Timer';
import Footer from './components/Footer'; // Import the Footer component
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './App.css';
import FAQ from "./pages/FAQ";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Router>
          <Navbar />
          <div className="content-container">
            <div className="timer-wrapper">
              <Timer />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer /> {/* Include the Footer component here */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
