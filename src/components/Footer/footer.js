import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-Section">
        <div className='f-h-div'>
          <a href="/">
            <div className="footer-home">
              <i class="fas fa-angle-double-up"></i>
            </div>
          </a>
        </div>
        <div className="copyright">
          <p>Copyright © 2020, Tashi Woeser. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
