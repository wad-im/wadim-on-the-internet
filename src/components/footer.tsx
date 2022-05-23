import React from "react";
import styled from "styled-components";
import Socials from "./socials";

const Footer = ()=>{
    return (
        <StyledFooter>
            <address>
                <Socials/>
                <p>hello@wadimbaslow.com</p>
            </address>
            <p className="licence"><a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>,  { new Date().getFullYear().toString()} </p>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    p {margin-bottom: 0;}
    address {
        display: flex;
        align-items: center;
        margin-right: 1rem;
        p {
            font-style: normal;
        }
    }
    a {
        text-decoration: none;
        transition: color 0.2s ease;
        :hover {
            color: ${({theme})=> theme.color.primary};
        }
     }
    @media screen and (max-width: 37rem){
        flex-direction: column;
        align-items: flex-start;
        address {
            margin-bottom: 1rem;
        }
        .licence {
            padding: 0.5rem;
        }
    }
`