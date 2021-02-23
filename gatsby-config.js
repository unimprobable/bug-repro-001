/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "graphql",
        accessToken: "dd4d4dc146542ba7763305d71d1b3d38",
      }
    }
  ],
}
