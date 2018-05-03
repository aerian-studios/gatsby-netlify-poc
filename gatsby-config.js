const config = require("./site-config");

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: config.siteMetadata,
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // Manifest for AppCache and PWA compatibility
        {
            resolve: `gatsby-plugin-manifest`,
            options: config.manifest,
        },
        // must come AFTER manifest plugin, Generates a service worker and AppShell
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography",
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                // One convention is to place your Netlify CMS customization code in a
                // `src/cms` directory.
                modulePath: `${__dirname}/src/cms/cms.ts`,
            },
        },
        `gatsby-plugin-typescript`,
    ],
};
