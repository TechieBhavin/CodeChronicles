import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link className="footer-brand" to="/">
            <h3 className="footer-brand">Code Chronicles</h3>
          </Link>

          <p className="footer-text">“Where Every Line Has a Story”</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/categories">categories</Link>
          <Link to="/about">About Me</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>

        <div className="mt-4">
          <a
            href="https://github.com/TechieBhavin"
            className="me-3 fs-4 text-dark"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/patelbhavin0205/"
            className="me-3 fs-4 text-primary"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/Bhavin0325" className="fs-4 text-info">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <hr />
        <p className="footer-copy">
          © {new Date().getFullYear()} Code Chronicles. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
