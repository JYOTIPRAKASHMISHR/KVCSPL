import React, { useState } from 'react';
import "../styles/Navbar.css";
import logoImg from "../assets/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToProject = () => {
        document.getElementById("requestproject")?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Brand Section */}
                <div className="nav-brand">
                    <img src={logoImg} alt="Logo" className="logo-img" />
                    <div className="brand-text">
                        <span className="company-name">KUMUDVASAN</span>
                        <span className="company-tagline">CONSULTANCY & SERVICES PVT LTD</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
  <ul className="nav-links">
    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
    <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
    <li><a href="#technologie" onClick={() => setIsMenuOpen(false)}>Technologies</a></li>
    <li><a href="#" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
  </ul>

  <div className="nav-actions">
    <button className="nav-login" onClick={() => window.location.href="/login"}>
      Login
    </button>

    <button className="nav-btn" onClick={scrollToProject}>
      Request a Project
    </button>
  </div>
</div>
                {/* Mobile Toggle (Hamburger) */}
                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;