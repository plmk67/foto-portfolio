const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      project: allContentfulJapan2019 {
        edges {
          node {
            slug
            images {
              id
            }
          }
        }
      }
    }
  `)

  data.project.edges.forEach(({ node }) => {
    createPage({
      path: `project/${node.slug}/`,
      component: path.resolve("./src/templates/project-template.js"),
      context: {
        slug: node.slug,
        project: 'contentfulJapan2019'
      },
    })
  })


}
