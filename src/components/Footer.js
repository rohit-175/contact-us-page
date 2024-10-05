import React from "react";
import "../CSS/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>ContrivSmart</h3>
        <ul className="footer-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Resource</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          malesuada eros nec magna dapibus, in gravida ex feugiat. Mauris at eros
          facilisis libero feugiat ullamcorper.
        </p>
        <div className="social-icons">
      <a href="#" aria-label="Facebook">
        <FacebookIcon/>
      </a>
      <a href="#" aria-label="Twitter">
        <TwitterIcon/>
      </a>
      <a href="#" aria-label="LinkedIn">
        <LinkedInIcon/>
      </a>
      <a href="#" aria-label="Instagram">
        <InstagramIcon/>
      </a>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
