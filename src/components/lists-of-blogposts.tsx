import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogpostsList = ()=>{

    const data = useStaticQuery(graphql`
        query Blogposts {
            allMdx {
                nodes {
                  frontmatter {
                    author
                    created_at
                    slug
                    title
                  }
                  body
                  id
                  slug
                }
              }
        }
    `)

    const blogposts = data.allMdx.nodes

    return (
        <React.Fragment>
            {
                blogposts.map((blogpost):any => (
                    <Blogpost key={blogpost.id}>
                        <p>{blogpost.frontmatter.title}</p>
                        <p>written by {blogpost.frontmatter.author}</p>
                        <p>posted on {blogpost.frontmatter.created_at}</p>
                        <MDXRenderer>
                            {blogpost.body}
                        </MDXRenderer>
                        <Link to={blogpost.frontmatter.slug}>Vist it here</Link>
                    </Blogpost>
                ))
            }
        </React.Fragment>
    )
}

export default BlogpostsList

const Blogpost = styled.article`
    padding: 1rem 0;
`