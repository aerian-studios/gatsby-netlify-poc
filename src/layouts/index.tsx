import * as React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";

import "../scss/base-theme.scss";
import ErrorBoundary from "../components/ErrorBoundary";

interface Props {
  children: () => React.Component;
  className?: string;
}

const TemplateWrapper: React.SFC<Props> = ({ children }) => (
  <div className="layout-container">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <ErrorBoundary>
      <div id="content-wrapper">{children()}</div>
    </ErrorBoundary>
  </div>
);

export default TemplateWrapper;
