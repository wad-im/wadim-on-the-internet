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
        body,
        timeToRead,
        remoteHeroImage,
        excerpt
    } = data.mdx

    const {
        heroImageAlt,
        title,
        description,
        date,
        slug
    } = frontmatter

    const image = remoteHeroImage && getImage(remoteHeroImage)

    console.log(remoteHeroImage.url)

    return (
        <Layout title={title} description={description || excerpt} seoImage={remoteHeroImage.url} slug={slug}>
            <Container>
                <div className="hero">
                    <GatsbyImage image={image} alt={heroImageAlt} className='hero-image'/>
                    <div className="title">
                        <h1 className='blog-title'>{title}</h1>
                        <p className='created-by'>by Wadim Baslow</p>
                        <p className='created-at'>published on {date} &bull; {timeToRead} min.</p>
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
            slug
            description
            date (formatString: "DD MMMM YYYY")
            heroImageAlt
        }
        remoteHeroImage {
            url
            childImageSharp {
              gatsbyImageData (
                width: 816
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 80
                )
            }
          }
        body
        timeToRead
        excerpt
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
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        grid-column-gap: 2rem;
        margin-bottom: 4rem;
        background-color: ${({theme})=> theme.color.background.dark};
        .hero-image {
            grid-column: 1 / span 3;
        }
        .title {
            grid-column: 4 / span 2;
            padding: 2rem 2rem 2rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-width: 33%;
        }
        .created-by {
            margin-bottom: 0;
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
        blockquote {
            padding-left: 1rem;
            border-left: solid 0.2rem ${({theme})=> theme.color.background.darker};
        }
    }
    @media screen and (max-width: 55rem){
        grid-template-columns: 1fr;
        .hero {
            grid-column: span 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 0rem;
            background-color: ${({theme})=> theme.color.background.main};
            .title {
                margin-left: 0;
                padding-left: 0.5rem;
                padding-bottom: 0;
                h1 {
                    line-height: ${({theme}) => theme.lineheight.snug};
                }
            }
        }
        .created-at {
            margin-bottom: 2rem;
        }
        .text-body {
            grid-column: 1 / span 1;
            padding: 0 0.5rem;
        }
    }
    
`