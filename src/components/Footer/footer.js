import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-Section">
        <div className="footer-Social-Links">
          <div id="fb-Icon">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div id="ig-Icon">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div id="linkedin-Icon">
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div id="github-Icon">
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2019, Tashi Woeser. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
