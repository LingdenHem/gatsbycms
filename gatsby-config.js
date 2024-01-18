/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    navLinks: [
      {link: "/", name: "Home"},
      {link: "/project", name: "Projects"},
      {link: "/about", name: "About"},
      {link: "/contact", name: "Contact"},
    ]
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: "Tcsln1XNTqRVzcxbXYBkqhr_DyoT9vAMnFhBQvOV8iE",
      spaceId: "75ijk98hye8q" // Replace with your Contentful Space ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "images",
      path: "./src/images/"
    },
    __key: "images"
  }]
};
