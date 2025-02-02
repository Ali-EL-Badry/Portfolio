import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h1 className="footer-title">Contact Me</h1>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://wa.me/+201286964627" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/aly-el-badry/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/Ali-EL-Badry" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>

          <a href="mailto:ali.el.badry.747@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon" />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-text">© {new Date().getFullYear()} Aly El-Badry. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
