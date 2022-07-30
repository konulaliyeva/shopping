import React from "react";
import "./Footer.css";
function Footer() {

  return (
    <div className="footer_container">
      <div className="icons">
        <a href="https://www.linkedin.com/in/konul-aliyeva-3418aa190" style={{backgroundColor:"transparent", border:'none'}}>
          <i className="fa-brands fa-linkedin mx-2 mb-3"></i>
        </a>
        <a  href ="https://github.com/konulaliyeva" style={{backgroundColor:"transparent", border:'none'}}>
          <i className="fa-brands fa-github mx-2"></i>
        </a>
      </div>
      <div>
        <p>The page was created for e-commerce purpose</p>
        <span>© 2022 Konul Ali. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
