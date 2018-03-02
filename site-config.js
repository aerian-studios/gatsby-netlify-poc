const siteTitle = "Gatsby + Netlify CMS Proof of Concept";
const siteDescription = "This is a Proof of Concept for Gatsby and Netlify";
const siteLogo = "/img/furniture/logo.svg";
const siteLongTitle = "Proof of Concept for Gatsby and Netlify";
const copyright = "Copyright © 2017. Aerian Studios LLC";
const manifestShortName = "GatsbyNetlifyCMSPOC";
const siteUrl = "https://netlifycms-gatsby-poc.netlify.com/";
const frontPageURL = "/";
const backgroundColor = "#e0e0e0"; // Used for setting manifest background color.
const themeColor = "#c62828"; // Used for setting manifest and progress theme colors.

module.exports = {
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/my-site/.
  // meta-data for <head>, used by https://github.com/nfl/react-helmet
  siteMetaDate: {
    siteTitle,
    siteDescription,
    siteUrl,
    siteLanguage: "en",
    siteLongTitle
  },
  siteLogo,
  copyright, // Copyright string for the footer of the website and others like feeds, etc.
  // manifest.json, for more info: https://medium.com/dev-channel/how-to-add-a-web-app-manifest-and-mobile-proof-your-site-450e6e485638
  /* eslint-disable camelcase */
  manifest: {
    name: siteTitle,
    short_name: manifestShortName,
    start_url: frontPageURL,
    background_color: backgroundColor,
    theme_color: themeColor,
    display: "minimal-ui",
    icons: [
      // Everything in /static will be copied to an equivalent
      // directory in /public during development and build, so
      // assuming your favicons are in /static/favicons,
      // you can reference them here
      {
        src: "/img/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/img/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
  /* eslint-enable camelcase */
};
