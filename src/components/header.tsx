import React from "react";
import styled from "styled-components";

const Header = ()=>{
    return (
        <StyledHeader>
            <h1>wadim on the internet</h1>
            <p>Hi, I am Wadim and this will be my personal blog.</p>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 2rem 0;
`