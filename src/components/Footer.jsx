import React from "react";
import { Mail, MapPin } from "lucide-react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="brand-logo">
  <img src={logo} alt="Company Logo" />
</div>

          <h3>KUMUDVASAN CONSULTANCY AND SERVICES PVT LTD</h3>
          <p>
            Professional software development company transforming ideas into
            scalable digital solutions with cutting-edge technologies.
          </p>

          <div className="footer-contact">
            <span><MapPin size={16}/> 260182, Tower U, 14th avenue, gaur city 2, Greater noida west, Gauttam Budha Nagar, U.P 201009</span>
            <span><Mail size={16}/> Satchidananda.panda@outlook.com</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li className="highlight">Careers →</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>HR Consulting</li>
            <li>Managed HR Services</li>
            
            <li>Perforamance Management</li>
            <li>Compliance Advisory</li>
            <li>Payroll & Benefits Administration</li>
            <li>Talent Acquisition & Development</li>
           
            <li>Web Development</li>
            <li>Mobile App Development</li>
            {/* <li>UI/UX Design</li>
            <li>Cloud & DevOps</li> */}
            <li>API Integrations</li>
            <li>Maintenance & Support</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get latest tech insights and project updates delivered to your inbox.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>

          <div className="socials">
            <span>in</span>
            <span>𝕏</span>
            <span>f</span>
            <span>◎</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} KUMUDVASAN CONSULTANCY AND SERVICES PVT LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
