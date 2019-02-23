module.exports = {
  siteMetadata: {
    title: "Andrej Gorovoj Personal",
    author: "Andrej Gorovoj",
    description: "Personal Portfolio Website",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-personal",
        short_name: "personal",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
}
