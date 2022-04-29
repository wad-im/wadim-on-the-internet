import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { IBlogpost } from '../types/blogpost.types'
import BlogpostCard from './blogpost-card'
import FeaturedPost from './featured-post'


const BlogpostsList = ()=>{

    const data = useStaticQuery(allBlogposts)

    const blogposts:IBlogpost[] = data.allMdx.nodes.slice(1)
    let featuredPost = data.allMdx.nodes[0]

    return (
        <Grid>
            <FeaturedPost data={featuredPost} />
            {blogposts.map((blogpost) => (<BlogpostCard key={blogpost.id} data={blogpost} />))}
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

// data

const allBlogposts = graphql`
    query Blogposts {
        allMdx (sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
            frontmatter {
                date (formatString: "DD MMMM YYYY")
                slug
                title
                localHeroImage {
                    childImageSharp {
                    gatsbyImageData (
                        width: 624
                        )
                    }
                }
                heroImageAlt
            }
            remoteHeroImage {
                childImageSharp {
                  gatsbyImageData (
                    width: 624
                    aspectRatio: 1.3333333
                    )
                }
              }
            excerpt
            id
            timeToRead
            }
        }
    }
`
