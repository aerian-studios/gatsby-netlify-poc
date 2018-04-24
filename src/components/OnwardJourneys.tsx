import * as React from "react";

import * as github from "../img/github-icon.svg";

// @TODO: split out the the social wrappers
export const OnWardJourneys: React.SFC = () => (
  <div className="MenuOnwardJourneys">
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
);
