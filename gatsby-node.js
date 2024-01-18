const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
  query {
    allContentfulFullBlogPost {
      nodes {
        id
      }
    }
  }
  `)


  const blogTemplate = path.resolve(`src/templates/fullBlogPost.js`)
  queryResults.data.allContentfulFullBlogPost.nodes.forEach(node => {
    createPage({
      path: `/project/${node.id}`,
      component: blogTemplate,
      context: {
        postId: node.id,
      },
    })
  })
}