import * as React from "react";
import Link from "gatsby-link";

import * as styles from "./navBarStyles.scss";

import * as github from "../img/github-icon.svg";

//@TODO tie the opening of the menu with central state
class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
      subMenuElement: null
    };
  }

  onChange = event => {
    this.setState({ menuActive: event.target.checked });
  };

  render() {
    return (
      <div className={styles.BurgerMenuWrapper}>
        <input
          type="checkbox"
          id="menu-toggle"
          className={`${styles.MenuToggle} menu-toggle`}
          onChange={this.onChange}
        />
        <label htmlFor="menu-toggle" className={styles.MenuToggleLabel}>
          <span className={styles.BurgerMenuContentIcon} aria-hidden="true" />
          <span className="helper-text">Toggle menu open and closed</span>
        </label>

        <nav
          id="menu--main"
          className={`${styles.MenuMain} ${
            this.state.menuActive ? "active" : ""
          }`}
        >
          <div className={styles.MenuMain__ContentWap}>
            <ul className={styles.FirstLevelMenu}>
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

          <div className={`block--full grid ${styles.MenuOnwardJourneys}`}>
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
          </div>
        </nav>
      </div>
    );
  }
}

export default MainMenu;
