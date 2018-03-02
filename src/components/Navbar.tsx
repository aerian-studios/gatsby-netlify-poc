import * as React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar: React.SFC = () => (
  <header id="page-header" className="block--full">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="logo" style={{ width: "88px" }}>
              <svg>
                <use xlinkHref="#logo" />
              </svg>
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/products">
            Products
          </Link>
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/aerian-studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="icon">
              <use xlinkHref="#logo" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
