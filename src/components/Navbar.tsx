import * as React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import {
  NavbarHeader,
  BurgerMenuWrapper,
  MenuToggle,
  MenuToggleLabel,
  MenuMain,
  BurgerMenuContentIcon,
  MenuOnwardJourneys
} from "./NavBarStyles";

import * as github from "../img/github-icon.svg";
import * as logo from "../img/logo.svg";

const LogoWrapper = styled.figure`
  align-self: flex-start;
  height: 55px;
`;

const Navbar: React.SFC = () => (
  <NavbarHeader id="page-header" className="block--full">
    <nav className="navbar layout-grid grid">
      <LogoWrapper className="navbar-brand">
        <Link to="/" className="navbar-item" title="Aerian Studios brand">
          <figure className="logo" style={{ width: "88px" }}>
            <svg>
              <use xlinkHref={`#${logo.id}`} />
            </svg>
          </figure>
        </Link>
      </LogoWrapper>
      <BurgerMenuWrapper className="burger-menu-wrapper">
        <MenuToggle />
        <MenuToggleLabel htmlFor="menu-toggle">
          <BurgerMenuContentIcon
            className="burger-menu__content-icon"
            aria-hidden="true"
          />
          <span className="helper-text">Toggle menu open and closed</span>
        </MenuToggleLabel>

        <MenuMain id="menu--main" className="navigation menu--main grid">
          <ul className="menu">
            <li className="menu-item list-plain">
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li className="menu-item list-plain">
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="menu-item list-plain">
              <Link className="navbar-item" to="/products">
                Products
              </Link>
            </li>
          </ul>

          <MenuOnwardJourneys className="menu__onward-journeys block--full grid">
            <div className="subscribe-wrapper">
              <p className="subscribe-text">Subscribe</p>
              <a className="subscribe_link" href="/">
                <svg className="icon icon--subscribe">
                  <use xlinkHref="#subscribe" />
                </svg>
                <span className="helper-text">Subscribe to us</span>
              </a>
            </div>
            <div className="social-wrapper">
              <p className="social-text">Follow us</p>
              <div className="social-links-wrapper">
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
                  <span className="helper-text">Visit us on Github</span>
                </a>
              </div>
            </div>
          </MenuOnwardJourneys>
        </MenuMain>
      </BurgerMenuWrapper>
    </nav>
  </NavbarHeader>
);

export default Navbar;
