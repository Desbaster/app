import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footerContainer align-items-center">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <nav className="footerTitles">
                <h3 className="footerLink">Contacto</h3>
                <li>
                  <Link to="/">Nosotros</Link>
                </li>
                <li>
                  <Link to="/">Whatsapp</Link>
                </li>
              </nav>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
