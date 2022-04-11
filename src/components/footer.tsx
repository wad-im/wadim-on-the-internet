import React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Footer = ()=>{
    return (
        <StyledFooter>
            <Socials/>
            <p>CC BY-NC 3.0,  { new Date().getFullYear().toString()} </p>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    p {margin-bottom: 0;}
`