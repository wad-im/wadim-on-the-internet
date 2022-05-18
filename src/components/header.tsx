import { Link, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import MenuButton from "./menu-button";


export interface HeaderProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({open, setOpen}: HeaderProps)=>{
    return (
        <StyledHeader>
            <Link to='/' className="logo">
                <div className="wb-icon">WB</div>
                <h1 className="wb-title">wadim baslow</h1>
            </Link>
            <nav>
                <MenuButton open={open} setOpen={setOpen}/>
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/" activeClassName="active">Home</Link></li>
                    <li className="nav-item"><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin-bottom: 0;
        font-weight: 600;
        font-size: ${({theme})=> theme.text.h2};
    }
    a {
        text-decoration: none;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .wb-icon {
        padding: 1rem;
        font-weight: 600;
        background-color: ${({theme})=> theme.color.primary};
        color: #fff;
        border-radius: 50%;
        margin-right: 2rem;
    }
    .nav-items {
        display: flex;
    }
    .nav-item {
        list-style:none;
        font-weight: 400;
        padding: 0.5rem;
        margin-left: 0.5rem;
        a {
            transition: color 0.2s ease;
            :hover {
                color:${({theme})=> theme.color.primary};
            }
        }
        .active {
            color:${({theme})=> theme.color.primary};
        }
    }
    @media screen and (max-width: 55rem) {
        .nav-items {
            display: none;
        }
    }
    @media screen and (max-width: 37rem){
        h1, .dummy-logo {
            font-weight:700;
        }
    }
    @media screen and (max-width: 24rem) {
        .wb-title {
            font-size: ${({theme})=> theme.text.base};
        }
        .wb-icon {
            margin-right: 1rem;
        }
    })
`