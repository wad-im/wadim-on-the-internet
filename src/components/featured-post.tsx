import React from 'react'
import { Link } from "gatsby";
import styled from "styled-components";
import { BlogpostCardProps } from './blogpost-card';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const FeaturedPost = ({title, date, slug, hero_image, image_alt, excerpt, timeToRead}: BlogpostCardProps)=>{

    const image= getImage(hero_image)

    return (
        <LargeCard to={slug}>
            <GatsbyImage
                image={image}
                alt={image_alt}
            />
            <div className="details">
                <p className='created-at'> {date} &#8226; {timeToRead} min.</p>
                <h2 className='title'>{title}</h2>
                <p>{excerpt}</p>
            </div>
        </LargeCard>
    )
}

export default FeaturedPost

const LargeCard = styled(Link)`
    grid-column: span 3;
    display: grid;
    grid-template-columns: 61.8% 38.2%;
    text-decoration: none;
    background-color: ${({theme})=> theme.color.background.dark};
    .details {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 55rem){
        grid-column: span 2;
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 40rem){
        transition: color 0.3s ease;
        :hover {
            color: ${({theme}) => theme.color.primary};
        }
    }
    @media screen and (max-width: 37rem){
        grid-column: span 1;
        .details {
            padding: 2rem 1rem 1rem 1rem;
        }
    }
    
`