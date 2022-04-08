import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { IBlogpost } from '../types/blogpost.types'

interface IBlogPostProps {data: {mdx: IBlogpost}}

const Blogpost = ({data}: IBlogPostProps) => {

    const {
        frontmatter,
        body
    } = data.mdx

    const {
        localHeroImage,
        heroImageAlt,
        title,
        description,
        date
    } = frontmatter

    const image = localHeroImage && getImage(localHeroImage)

    return (
        <Layout title={title} description={description}>
            <Container>
                <div className="hero">
                    <GatsbyImage image={image} alt={heroImageAlt}/>
                    <div className="title">
                        <p className='created-at'>{date}</p>
                        <h1 className='blog-title'>{title}</h1>
                    </div>
                </div>
                
                <div className='text-body'>
                    <MDXRenderer>
                            {body}
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
            description
            date (formatString: "DD MMMM YYYY")
            localHeroImage {
                childImageSharp {
                  gatsbyImageData (
                    width: 816
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              heroImageAlt
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
        a {
            transition: color 0.3s ease;
            text-decoration: underline;
            :hover {
                color:${({theme})=> theme.color.primary};
            }
        }
    }
    @media screen and (max-width: 55rem){
        grid-template-columns: 1fr;
        .hero {
            grid-column: span 1;
            flex-direction: column;
            margin-bottom: 0rem;
            
            background-color: ${({theme})=> theme.color.background.main};
            .title {
                margin-left: 0;
                padding-left: 0.5rem;
                padding-bottom: 0;
            }
        }
        .text-body {
            grid-column: 1 / span 1;
            padding: 0 0.5rem;
        }
    }
    
`