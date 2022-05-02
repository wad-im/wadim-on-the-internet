const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    // get the template
    const blogpost = path.resolve('./src/templates/blogpost.tsx')
    // get the blogpost slug & id
    const response = await graphql(`
    query Blogposts {
        allMdx (sort: {fields: frontmatter___date, order: DESC}) {
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
            path: `${node.frontmatter.slug}`,
            context: {
                id: node.id
            }
        })
    })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      remoteHeroImage: File @link(from: "fields.remoteHeroImage")
    }

    type Frontmatter {
      title: String!
      date: Date @dateformat
      lastModified: Date @dateformat
      title: String
      description: String
      slug: String
      localHeroImage: File @fileByRelativePath
      remoteHeroImage: String
      heroImageAlt: String
      ogImage: String
    }
    
    `);
};

const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNodeField, createNode },
  cache,
  store
}) => {
  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter &&
    node.frontmatter.remoteHeroImage
  ) {
    let remoteHeroImage =   await createRemoteFileNode({
      url: node.frontmatter.remoteHeroImage,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    })

  

    if (remoteHeroImage) {
      createNodeField({
        node,
        name: 'remoteHeroImage',
        value: remoteHeroImage.id
      });
    }
  }
};