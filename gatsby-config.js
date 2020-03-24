require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `筑波大学新歓Web`,
    description: `筑波大学内の学生団体情報ポータルサイトです。`,
    author: `@tsukuba_shinkan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
