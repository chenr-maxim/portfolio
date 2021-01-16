/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Maxim Chen Portfolio",
        short_name: "Max Chen Portfolio",
        start_url: "/",
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        icon: `static/images/favicon.png`,
        lang: `en`,
      }
    }
  ],
  pathPrefix: "/portfolio",
}
