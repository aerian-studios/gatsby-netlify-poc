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
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta
                name="description"
                content="A little Proof of Concept for Gatsby and Netlify-CMS"
            />
            <title>Home | Gatsby + Netlify CMS"</title>
        </Helmet>
        <Navbar />
        <ErrorBoundary>
            <div id="content-wrapper">{children()}</div>
        </ErrorBoundary>
    </div>
);

export default TemplateWrapper;
