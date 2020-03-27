/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/PostTemplate.js`)
  const result = await graphql(`
    query CreatePage {
      allShinkanWebOrg {
        edges {
          node {
            activityIntroduce
            activityType
            id
            imageUrls
            instagram
            name
            otherImageUrls
            pdfUrl
            posterImageUrls
            primaryKey
            twitter
            type
            website
          }
        }
      }
    }
  `)
  // GraphQLのデータを使ってページを追加する処理
  result.data.allShinkanWebOrg.edges.forEach(edges => {
    const node = edges.node
    createPage({
      path: `/org/${node.primaryKey}`,
      component: postTemplate,
      context: {
        primaryKey: node.primaryKey,
      },
    })
  })
}
