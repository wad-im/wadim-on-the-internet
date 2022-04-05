import React from "react";
import styled from "styled-components";

const Footer = ()=>{
    return (
        <StyledFooter>
           &#169; { new Date().getFullYear().toString()} 
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 2rem 0;
`