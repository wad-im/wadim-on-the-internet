import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


interface BlogpostCardProps {
    title: string,
    author: string,
    date: string,
    slug: string,
    hero_image: any,
    image_alt: string

}

const BlogpostCard = ({title, author, date, slug, hero_image, image_alt}: BlogpostCardProps)=>{

    const image= getImage(hero_image)

    return (
        <Card to={slug}>
            <GatsbyImage
                image={image}
                alt={image_alt}
            />
            <p className='created-at'> {date}</p>
            <h2 className='title'>{title}</h2>
        </Card>
    )
}

export default BlogpostCard

const Card = styled(Link)`
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
`