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
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets`,
                name: "uploads",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    // gatsby-remark-relative-images must
                    // go before gatsby-remark-images
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            // Set the name option to the same
                            // name you set for gatsby-source-filesystem
                            name: "uploads", // default
                        },
                    },
                    // Make responsive, blur-up images from markdown images
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 693,
                            wrapperStyle: ` flex: 1; margin: var(--pad-0) 0;`,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    "gatsby-remark-copy-linked-files",
                ],
            },
        },
        // This plugin identifies file nodes that are images and
        // transforms these to create new “ImageSharp” nodes.
        // With them you can resize images and
        // generate responsive image thumbnails.
        `gatsby-transformer-sharp`,
        // This plugin exposes helper functions for processing
        // images with the NPM package “sharp”. It's used by
        // several plugins.
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
            resolve: `gatsby-plugin-sass`,
            options: {
                sourceMaps: `inline`,
            },
        },
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
