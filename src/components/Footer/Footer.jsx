import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">

        {/* SOCIAL ICONS */}
        <ul className="social-icons">
          <li><FacebookIcon className="footer-icon" /></li>
          <li><InstagramIcon className="footer-icon" /></li>
          <li><TwitterIcon className="footer-icon" /></li>
          <li><YouTubeIcon className="footer-icon" /></li>
        </ul>

        {/* FOOTER LINKS */}
        <div className="footer-links-grid">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>

          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Legal Notices</li>
            <li>Do Not Sell or Share My Personal Information</li>
          </ul>

          <ul>
            <li>Gift Cards</li>
            <li>Netflix Shop</li>
            <li>Cookie Preferences</li>
            <li>Ad Choices</li>
          </ul>

          <ul>
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <p className="footer-copy">&copy; 1997-2025 Netflix, Inc.</p>
      </div>
    </div>
  );
}
