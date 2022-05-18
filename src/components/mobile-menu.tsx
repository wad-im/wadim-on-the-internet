import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconX } from '@tabler/icons'
import { HeaderProps } from './header'
import { motion } from 'framer-motion'

const MobileMenu = ({open, setOpen}: HeaderProps) => {

    const closeMenu = ()=>{
        setOpen(!open);
    }

    const variants = {
        open: { 
            opacity: .95, 
            x: 0 ,
            zIndex: 5,
            transition: {
                type: 'spring',
                duration: 0.8,
            }},
        closed: { 
            opacity: 0, 
            x: "100wv",
            zIndex: -1,
            transition: {
                type: 'spring',
                duration: 0.8 
            },
          },
      }

    return (
        <MenuContainer animate={open ? "open" : "closed"} variants={variants}>
            <div className="menu">
                <button onClick={closeMenu}>
                    <IconX className='close-icon'/>
                </button>
                <nav>
                    <ul>
                        <li className='nav-item'><Link to='/' onClick={closeMenu}>Home</Link></li>
                        <li className='nav-item'><Link to='/about' onClick={closeMenu}>About</Link></li>
                    </ul>
                </nav>
                <div className="socials">
                    <p>Find me also on</p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/wbaslow/"><IconBrandLinkedin/> Linkedin</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/w_baslow"><IconBrandTwitter/> Twitter</a>
                        </li>
                        <li>
                            <a href="https://github.com/wad-im"><IconBrandGithub/> Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </MenuContainer>
    )
}

export default MobileMenu

const MenuContainer  = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.color.background.dark};
    z-index: -1;
    overflow: hidden;
    opacity: 0;
    .menu {
        padding: 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    button {
        outline: none;
        background: none;
        border: none;
        padding: 0.5rem;
        width: fit-content;
    }
    nav {
        margin-top: 10%;
    }
    ul {
        list-style: none;
        margin-left: 0;
    }
    .nav-item {
        margin-bottom: 1rem;
    }
    p {
        text-align: right;
    }
    a {
        text-decoration: none;
        font-weight: 400;
        padding: 0.5rem;
        font-size: ${({theme})=> theme.text.h2};
    }
    .socials {
        margin-top: 4rem;
        p {
            margin-right: 0.5rem;
        }
        a {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: right;
            svg {margin-right: .5rem;}
        }
    }
    @media screen and (max-width: 40rem){
        .menu {
            padding: 2rem 1rem;
        }
    }
    @media screen and (min-width: 55rem) {
        display: none;
        pointer-events: none;
        opacity: 0;
    }
`