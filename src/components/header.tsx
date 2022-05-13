import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = ()=>{
    return (
        <StyledHeader>
            <Link to='/' className="dummy-logo">WB</Link>
            <Link to='/'><h1>wadim baslow</h1></Link>
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
        font-weight: 600;
        font-size: ${({theme})=> theme.text.h2};
    }
    a {
        text-decoration: none;
    }
    .dummy-logo {
        padding: 1rem;
        font-weight: 600;
        background-color: ${({theme})=> theme.color.primary};
        color: #fff;
        border-radius: 50%;
        margin-right: 2rem;
    }
`