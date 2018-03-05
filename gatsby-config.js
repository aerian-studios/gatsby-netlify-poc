const config = require("./site-config");
const cssnext = require("postcss-cssnext");
const customMedia = require("postcss-custom-media");

const postCssPlugins = [
  customMedia(),
  cssnext({
    browsers: ["last 2 versions", "IE 11", "iOS 9"]
  })
];

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: config.siteMetadata,
  plugins: [
    `gatsby-plugin-react-next`, // use react 16
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins,
        precision: 8 // SASS default: 5
      }
    },

    // @TODO: make this into a section controlled by site-config
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    // transform all iamge files
    `gatsby-plugin-sharp`, // Used manipulate images
    `gatsby-transformer-sharp`, // used to insert images
    `gatsby-plugin-svg-sprite`, // creates sprite from imported svg when used as sprites
    {
      resolve: "gatsby-transformer-remark", // to modify MD
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1168,
              backgroundColor: `#f7f0eb`
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.tsx`
      }
    },
    `gatsby-plugin-accessibilityjs`, // Inserts accessibility warnings in the code
    // Manifest for AppCache and PWA compatibility
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest
    },
    // must come AFTER manifest plugin
    // Generates a service worker and AppShell
    `gatsby-plugin-offline`
  ]
};
