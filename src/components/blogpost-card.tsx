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
    }
    
}

const BlogpostCard = ({data}: BlogPostCardProps)=>{

    const {
        frontmatter,
        excerpt,
        timeToRead
    } = data

    const {
        title,
        date,
        slug,
        heroImage,
        heroImageAlt
    } = frontmatter

    const image= heroImage && getImage(heroImage)


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
`