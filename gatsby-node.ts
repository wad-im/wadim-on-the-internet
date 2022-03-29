const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    // get the template
    const blogpost = path.resolve('./src/templates/blogpost.tsx')
    // get the blogpost slug & id
    const response = await graphql(`
    query Blogposts {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    `)
    // create page for each blogpost
    response.data.allMdx.nodes.forEach((node) =>{
        createPage({
            component: blogpost,
            path: `/${node.frontmatter.slug}`,
            context: {
                id: node.id
            }
        })
    })
}