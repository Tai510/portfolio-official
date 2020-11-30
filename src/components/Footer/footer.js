import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-Section">
        <Link to="/">
          <div className="footer-home">
            <i class="fas fa-chevron-up"></i>
            <i class="fas fa-chevron-up"></i>
          </div>
        </Link>
        <div className="copyright">
          <p>Copyright © 2020, Tashi Woeser. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
