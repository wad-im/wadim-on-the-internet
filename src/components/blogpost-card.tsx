import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { IBlogpostFrontmatter } from '../types/blogpost.types'


interface BlogPostCardProps extends IBlogpostFrontmatter {
    timeToRead: number
}

const BlogpostCard = ({title, date, slug, hero_image, hero_image_alt, timeToRead}: BlogPostCardProps)=>{

    const image = hero_image && getImage(hero_image)

    return (
        <Card to={slug}>
            <GatsbyImage
                image={image}
                alt={hero_image_alt}
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