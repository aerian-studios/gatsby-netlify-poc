import * as React from "react";
import Link from "gatsby-link";

import "./navBarStyles.scss";

import { OnWardJourneys } from "./OnwardJourneys";

//@TODO tie the opening of the menu with central state
class MainMenu extends React.Component {
  public state = {
    menuActive: false
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ menuActive: event.currentTarget.checked });
  };

  render() {
    return (
      <div className="BurgerMenuWrapper layout-grid">
        <input
          type="checkbox"
          id="menu-toggle"
          className="MenuToggle menu-toggle"
          onChange={this.onChange}
        />
        <label htmlFor="menu-toggle" className="MenuToggleLabel">
          <span className="BurgerMenuContentIcon" aria-hidden="true" />
          <span className="helper-text">Toggle menu open and closed</span>
        </label>

        <nav
          id="menu--main"
          className={`MenuMain layout-grid ${
            this.state.menuActive ? "active" : ""
          }`}
        >
          <div className="MenuMain__ContentWap">
            <ul className="FirstLevelMenu">
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
          </div>

          <OnWardJourneys />
        </nav>
      </div>
    );
  }
}

export default MainMenu;
