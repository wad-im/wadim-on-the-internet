import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IBlogpostFrontmatter } from '../types/blogpost.types'


export interface BlogPostCardProps {
    data: {
        frontmatter: IBlogpostFrontmatter,
        timeToRead: number,
        excerpt?: string,
        remoteHeroImage: any
    }
    
}

const BlogpostCard = ({data}: BlogPostCardProps)=>{

    const {
        frontmatter,
        timeToRead,
        remoteHeroImage
    } = data

    const {
        title,
        date,
        slug,
        localHeroImage,
        heroImageAlt
    } = frontmatter

    const image= remoteHeroImage && getImage(remoteHeroImage)


    return (
        <Card to={slug}>
            <GatsbyImage
                image={image}
                alt={heroImageAlt}
            />
            <p className='created-at'> {date} &#8226; {timeToRead} min.</p>
            <h2 className='title'>{title}</h2>
        </Card>
    )
}

export default BlogpostCard

const Card = styled(Link)`
    grid-column: span 1;
    padding: 1rem 0;
    text-decoration: none;
    h2 {
        font-weight: 600;
    }
    .image-placeholder {
        aspect-ratio: 4/3;
        background-color: ${({theme}) => theme.color.background.dark};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .created-at {
        margin: 2rem 0 1rem 0;
    }
    @media screen and (min-width: 40rem){
        transition: color 0.3s ease;
        :hover {
            color: ${({theme}) => theme.color.primary};
        }
    }
    @media screen and (max-width: 37rem){
        h2 {
            font-weight: 700;
        }
    }
`