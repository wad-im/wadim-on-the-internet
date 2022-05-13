import React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Footer = ()=>{
    return (
        <StyledFooter>
            <Socials/>
            <p><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>   { new Date().getFullYear().toString()} </p>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    p {margin-bottom: 0;}
    a {
        text-decoration: none;
        transition: color 0.2s ease;
        :hover {
            color: ${({theme})=> theme.color.primary};
        }
     }
`