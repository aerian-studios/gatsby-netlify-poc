import * as React from "react";
import Link from "gatsby-link";

import "./navBarStyles.scss";

import { OnWardJourneys } from "./OnwardJourneys";

interface State {
  menuActive: boolean;
}

interface Props {}

const DEFAULT_STATE: State = {
  menuActive: false
};
//@TODO tie the opening of the menu with central state
class MainMenu extends React.Component<Props, State> {
  public readonly state = DEFAULT_STATE;

  toggleMenu = () => {
    console.log("it is here", this.state.menuActive);

    this.setState({ menuActive: !this.state.menuActive });
  };

  render() {
    return (
      <div className="BurgerMenuWrapper layout-grid" onClick={this.toggleMenu}>
        <input
          type="checkbox"
          id="menu-toggle"
          className="MenuToggle menu-toggle"
          checked={this.state.menuActive}
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
