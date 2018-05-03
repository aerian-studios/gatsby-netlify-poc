const config = require("./site-config");
const autoprefixer = require("autoprefixer");

const postCssPlugins = [
  autoprefixer({
    browsers: ["last 2 versions", "IE 11", "iOS 9"]
  })
];

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: config.siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sourcemaps: true,
        // sourceMapEmbed: true,
        sourceComments: true,
        outFile: `${__dirname}/src/pages`,
        precision: 8,
        outputStyle: "compressed"
      }
    },
    `gatsby-plugin-typescript`,
    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.ts`
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-postcss-sass`,
    //   options: {
    //     postCssPlugins,
    //     precision: 8 // SASS default: 5
    //   }
    // },
    `gatsby-plugin-react-next`, // use react 16
    `gatsby-plugin-react-helmet`,
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
    // transform all iamge files
    `gatsby-plugin-sharp`, // Used manipulate images
    `gatsby-transformer-sharp`, // used to insert images
    // Manifest for AppCache and PWA compatibility
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest
    },
    // must come AFTER manifest plugin, Generates a service worker and AppShell
    `gatsby-plugin-offline`,
    `gatsby-plugin-accessibilityjs` // Inserts accessibility warnings in the code
  ]
};
