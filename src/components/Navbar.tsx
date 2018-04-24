import * as React from "react";
import Link from "gatsby-link";

import * as styles from "./navBarStyles.scss";

import * as logo from "../img/logo.svg";
import MainMenu from "./MainMenu";

const Navbar: React.SFC = () => (
  <header id="page-header" className="NavbarHeader block--full">
    <div className="navbar layout-grid">
      <figure className="LogoWrapper">
        <Link to="/" title="Aerian Studios brand">
          <figure className="logo" style={{ width: "88px" }}>
            <svg>
              <use xlinkHref={`#${logo.id}`} />
            </svg>
          </figure>
        </Link>
      </figure>
      <MainMenu />
    </div>
  </header>
);

export default Navbar;
