import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BlogpostCard from './blogpost-card'
import FeaturedPost from './featured-post'

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
                            width: 624
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            aspectRatio: 1.3333333
                            quality: 80
                          )
                        }
                      }
                      hero_image_alt
                      hero_image_credit_text
                  }
                  excerpt
                  body
                  id
                }
              }
        }
    `)

    const blogposts = data.allMdx.nodes.slice(1)
    let featuredPost = data.allMdx.nodes.slice(0,1)

    return (
        <Grid>
            <FeaturedPost 
                title={featuredPost[0].frontmatter.title}
                author={featuredPost[0].frontmatter.author}
                date={featuredPost[0].frontmatter.date}
                slug={featuredPost[0].frontmatter.slug}
                hero_image={featuredPost[0].frontmatter.hero_image}
                image_alt={featuredPost[0].frontmatter.hero_image_alt}
                excerpt={featuredPost[0].excerpt}
            />
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
                        excerpt={blogpost.excerpt}
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    @media screen and (max-width: 55rem){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media screen and (max-width: 37rem){
        grid-template-columns: minmax(0, 1fr);
    }
`
