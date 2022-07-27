import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <div className="footer_container">
      <div className="icons">
        <a href="www.google.com">
          <i className="fa-brands fa-linkedin mx-2 mb-3"></i>
        </a>
        <a href="www.google.com">
          <i className="fa-brands fa-github mx-2"></i>
        </a>
      </div>
      <div>
        <p>The page is created by Konul Ali</p>
        <span>© 2022 Konul Ali. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
