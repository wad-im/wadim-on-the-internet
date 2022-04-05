import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = ()=>{
    return (
        <StyledHeader>
            <Link to='/' className="dummy-logo">WB</Link>
            <h1>wadim baslow</h1>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    h1 {
        margin-bottom: 0;
        font-weight: 700;
        font-size: ${({theme})=> theme.text.h2};
    }
    .dummy-logo {
        padding: 1rem;
        font-weight: 700;
        background-color: ${({theme})=> theme.color.primary};
        color: #fff;
        border-radius: 50%;
        margin-right: 2rem;
        text-decoration: none;
    }
`