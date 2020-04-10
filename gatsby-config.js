require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `筑波大学新歓Web`,
    description: `筑波大学内の学生団体情報ポータルサイトです。`,
    author: `@tsukuba_shinkan`,
  },
  pathPrefix: process.env.PATH_PREFIX || `/`,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `筑波大学 新歓Web`,
        short_name: `新歓Web`,
        start_url: `/`,
        background_color: `#6600cc`,
        theme_color: `#6600cc`,
        display: `minimal-ui`,

        icon: `src/images/shinkan-web-icon-transparent.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shinkan-web",
      options: {
        fileId:
          process.env.SRC_FILE_ID ||
          "1r4c4E7r1PDnaf6Mk6YIS6FAOblLBiX66socla-x8ct4",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-162922927-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
