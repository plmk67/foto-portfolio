const path = require("path")

exports.onCreatePages = async ({ page, actions }) => {
  const { createPage } = actions
  
  console.log("Page - ", page.path)
  if(page.path.match(/^\/groups/)) {
      createPage({
          path:"/groups",
          matchPath: "/groups/*",
          component: path.resolve(`src/image.js`),
      })
  }
}
