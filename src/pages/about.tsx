import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { Container, IBlogPostProps } from '../templates/blogpost'

const AboutPage = ({data}: IBlogPostProps)=>{

    const {
        frontmatter,
        body,
        remoteHeroImage,
        excerpt
    } = data.mdx

    const {
        heroImageAlt,
        title,
        description,
        slug
    } = frontmatter

    const image = remoteHeroImage && getImage(remoteHeroImage)

    return (
        <Layout  title="About | Wadim Baslow" description={description || excerpt} seoImage={remoteHeroImage.url} slug={slug}>
            <Container>
            <div className="hero">
                    <GatsbyImage image={image} alt={heroImageAlt} className='hero-image'/>
                    <div className="title">
                        {/* <Link className="allposts-link" to='/'>
                            <IconArrowLeft/>
                            <span>all posts</span>
                        </Link> */}
                        <h1 className='blog-title'>Hi.<br/>{title}</h1>
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

export default AboutPage

export const query = graphql`
query AboutContent {
    mdx(frontmatter: {slug: {eq: "/about"}}) {
      frontmatter {
        date
        description
        heroImageAlt
        title
        slug
      }
      remoteHeroImage {
        url
        childImageSharp {
          gatsbyImageData (
            width: 816
            )
        }
      }
      body
      excerpt
    }
  }
`