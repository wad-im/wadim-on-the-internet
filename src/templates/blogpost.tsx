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
                <div className="hero">
                    <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
                    <div className="title">
                        <p className='created-at'>{data.mdx.frontmatter.date}</p>
                        <h1 className='blog-title'>{data.mdx.frontmatter.title}</h1>
                    </div>
                </div>
                
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
    grid-template-columns: 1fr 45rem 1fr;
    }
    .hero {
        grid-column: 1 / span 3;
        display: flex;
        margin-bottom: 4rem;
        background-color: ${({theme})=> theme.color.background.dark};
        .title {
            margin-left: 2rem;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 33%;
        }
    }
    .text-body {
        grid-column: 2 / span 1;
    }
    
    
`