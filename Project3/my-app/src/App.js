import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Posts from "./pages/Posts";
import Timer from './components/Timer';
import Footer from './components/Footer'; // Import the Footer component
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <div className="container">
          <div className="timer-wrapper">
            <Timer />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component here */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
