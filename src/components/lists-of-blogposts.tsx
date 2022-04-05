import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import BlogpostCard from './blogpost-card'

const BlogpostsList = ()=>{

    const data = useStaticQuery(graphql`
        query Blogposts {
            allMdx {
                nodes {
                  frontmatter {
                    author
                    date (formatString: "DD MMMM YYYY")
                    slug
                    title
                    hero_image {
                        childImageSharp {
                          gatsbyImageData (
                            width: 320
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            aspectRatio: 1.3333333
                          )
                        }
                      }
                      hero_image_alt
                      hero_image_credit_text
                  }
                  body
                  id
                }
              }
        }
    `)

    const blogposts = data.allMdx.nodes

    return (
        <Grid>
            {
                blogposts.map((blogpost):any => (
                    <BlogpostCard 
                        key={blogpost.id}
                        title={blogpost.frontmatter.title}
                        author={blogpost.frontmatter.author}
                        date={blogpost.frontmatter.date}
                        slug={blogpost.frontmatter.slug}
                        hero_image={blogpost.frontmatter.hero_image}
                        image_alt={blogpost.frontmatter.hero_image_alt}
                    />
                ))
            }
        </Grid>
    )
}

export default BlogpostsList

//styled-components
const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

`