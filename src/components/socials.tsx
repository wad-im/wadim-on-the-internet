import React from "react";
import styled from "styled-components";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons";
import { Link } from "gatsby";

const Socials = ()=>{
    return (
        <SocialMediaIcons>
            <a href="https://www.linkedin.com/in/wbaslow/" className="icon-container"><IconBrandLinkedin/></a>
            <a href="https://twitter.com/w_baslow" className="icon-container"><IconBrandTwitter/></a>
            <a href="https://github.com/wad-im" className="icon-container"><IconBrandGithub/></a>
        </SocialMediaIcons>
    )
}

export default Socials

const SocialMediaIcons = styled.div`
    .icon-container {
        padding: 0.25rem;
        margin-right: 0.5rem;
        :hover svg {
            stroke: ${({theme})=> theme.color.primary};
        }
    }
`