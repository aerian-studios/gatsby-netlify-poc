import * as React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import * as github from "../img/github-icon.svg";
import * as logo from "../img/logo.svg";

const NavbarHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--c-black-90, #0c0c0c);
  top: 0;
  left: 0;
  z-index: 300;
  transition: transform 0.5s ease 0s, opacity 0.2s ease 0.2s;
  height: 55px;
  color: var(--whiteish, #fff);

  & svg {
    height: 55px;
  }
`;

const LogoWrapper = styled.figure``;

const Navbar: React.SFC = () => (
  <NavbarHeader id="page-header" className="block--full">
    <nav className="navbar layout-grid grid">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Aerian Studios brand">
          <figure className="logo" style={{ width: "88px" }}>
            <svg>
              <use xlinkHref={`#${logo.id}`} />
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
          title="Visit Aerian studios' github account"
        >
          <svg className="icon">
            <use xlinkHref={`#${github.id}`} />
          </svg>
        </a>
      </div>
    </nav>
  </NavbarHeader>
);

export default Navbar;
