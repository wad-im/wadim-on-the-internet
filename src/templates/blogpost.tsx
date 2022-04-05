import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Blogpost = ({data}) => {

    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout>
            <Container>
                <p className='created-at'>{data.mdx.frontmatter.date}</p>
                <h1 className='title'>{data.mdx.frontmatter.title}</h1>
                <div className='text-body'>
                    <MDXRenderer>
                            {data.mdx.body}
                    </MDXRenderer>
                </div>
            </Container>
        </Layout>
    )
}

export default Blogpost

export const query = graphql`
    query Blogpost($id: String) {
        mdx(id: {eq: $id}) {
        frontmatter {
            title
            date (formatString: "DD MMMM YYYY")
            hero_image {
                childImageSharp {
                  gatsbyImageData (
                    width: 1024
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              hero_image_alt
        }
        body
        }
    }
`

// styled-component

const Container = styled.article`
    display: grid;
    grid-template-columns: auto 45rem auto;
    grid-column-gap: 1rem;
    }
    .title, .created-at, .text-body {
        grid-column: 2 / span 1;
    }
    
    
`