// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://tigerbite.io/",
    title: "Tigerbite landing page for REV Studio",
    author: `Tigerbite`,
    description: "A performative landing page for ad campaigns",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: 'SEGMENT_PRODUCTION_WRITE_KEY',
        devKey: 'SEGMENT_DEV_WRITE_KEY',
        trackPage: true,
        trackPageImmediately: true,
        trackPageOnlyIfReady: false,
        trackPageOnRouteUpdate: true,
        trackPageOnRouteUpdateDelay: 50,
        trackPageWithTitle: false,
        delayLoad: false,
        delayLoadDelay: 1000,
      }
    }
  ],
}
