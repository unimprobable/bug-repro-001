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
        shopName: "gatsby-source-shopify-test-shop",
        accessToken: "example-wou7evoh0eexuf6chooz2jai2qui9pae4tieph1sei4deiboj",
      }
    }
  ],
}
