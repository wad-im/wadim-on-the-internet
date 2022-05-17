import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { IconX } from '@tabler/icons'
import { HeaderProps } from './header'
import { MenuProps } from './menu-button'

const MobileMenu = ({open, setOpen}: HeaderProps) => {

    const closeMenu = ()=>{
        setOpen(false);
    }

    return (
        <MenuContainer open={open}>
            <div className="menu">
                
                <button onClick={closeMenu}>
                    <IconX className='close-icon'/>
                </button>
                <nav>
                    <ul>
                        <li className='nav-item'><Link to='/'>Home</Link></li>
                        <li className='nav-item'><Link to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        </MenuContainer>
    )
}

export default MobileMenu

const MenuContainer  = styled.div<MenuProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: translate3d(${({open}) => open ? '0' : '100vw'}, 0, 0); 
    background-color: ${({theme}) => theme.color.background.dark};
    opacity: 90%;
    z-index: 5;
    overflow: hidden;
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
    li {
        margin-bottom: 1rem;
    }
    a {
        text-decoration: none;
        font-weight: 400;
        padding: 0.5rem;
        font-size: ${({theme})=> theme.text.h2};
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 40rem){
        .menu {
            padding: 2rem 1rem;
        }
    }
`